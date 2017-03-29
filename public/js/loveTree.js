(function($) {
	$.fn.loveTree = function(opts) {
		var defaults = {
			scale: 2,
			width: 500,
			height: 500,
			center: {
				x: 250,
				y: 250
			},
			cirle: {
				scale: 2,
				point: {
					x: 250,
					y: 250
				}
			},
			footer: {
				length: 0,
				speed: 10,
				height: 5,
				point: {
					x: 250,
					y: 497.5
				}
			},
			tree: {
				branchs: [
					[535, 680, 579, 250, 500, 200, 300, 100, 
						[
							[540, 500, 455, 417, 340, 400, 13, 100],
							[550, 445, 600, 356, 680, 345, 12, 100],
							[539, 281, 537, 248, 534, 217, 3, 40],
							[546, 397, 413, 247, 328, 244, 9, 80],
							[546, 357, 608, 252, 678, 221, 6, 100, 
								[
									[450, 435, 434, 430, 394, 395, 2, 40],
									[578, 400, 648, 409, 661, 426, 3, 80],
									[427, 286, 383, 253, 371, 205, 2, 40],
									[498, 345, 435, 315, 395, 330, 4, 60],
									[590, 293, 646, 277, 648, 271, 2, 80, [1]]
								]
							]
						]
					]
				]
			},
			bloom: {
				num: 700,
				width: 1080,
				height: 650,
			},
			color: "rgb(190, 26, 37)"
		}, calculates, context;
		var seed, heart, tree, tBranch, lens, bloom, blooms, record = [];
		if(!!opts) {
			calculates = {
				center: {
					x: (!opts.width) ? defaults.width / 2 : opts.width / 2,
					y: (!opts.height) ? defaults.height / 2 : opts.height / 2
				},
				cirle: {
					scale: (!opts.scale) ? defaults.scale : opts.scale,
					point: {
						x: (!opts.width) ? defaults.width / 2 : opts.width / 2,
						y: (!opts.height) ? defaults.height / 2 : opts.height / 2
					}
				},
				footer: {
					point: {
						x: (!opts.width) ? defaults.width / 2 : opts.width / 2,
						y: (!opts.height) ? defaults.height - defaults.footer.height / 2 : opts.height - defaults.footer.height / 2
					}
				}
			}
		}
		var options = $.extend(true, {}, defaults, opts, calculates);
		var random = function(min, max) {
			return min + Math.floor(Math.random() * (max - min + 1));
		};
		var inheart = function(x, y, r) {
			var z = ((x / r) * (x / r) + (y / r) * (y / r) - 1) * ((x / r) * (x / r) + (y / r) * (y / r) -1) * ((x / r) * (x / r) + (y / r) * (y / r) - 1) - (x / r) * (x / r) * (y / r) * (y / r) * (y / r);
			return z < 0;
		};
		var bezier = function(cp, t) {
			var temp = (1 - t) * (1 - t);
			var tempX = cp[0].x * temp, tempY = cp[0].y * temp;
			var p1 = {x: tempX, y: tempY};
			temp = 2 * t * (1 - t);
			tempX = cp[1].x * temp;
			tempY = cp[1].y * temp;
			var p2 = {x: tempX, y: tempY};
			temp = t * t;
			tempX = cp[2].x * temp;
			tempY = cp[2].y * temp;
			var p3 = {x: tempX, y: tempY};
			return {x: p1.x + p2.x + p3.x, y: p1.y + p2.y + p3.y};
		};
		var hover = function(x, y) {
			var pixel = context.getImageDate(x, y, 1, 1);
			return pixel.data[3] == 255;
		};
		var Point = {
			init: function(x, y) {
				this.x = x || 0;
				this.y = y || 0;
				return this;
			},
			add: function(o) {
				this.x += o.x;
				this.y += o.y;
				return this;
			},
			sub: function(o) {
				this.x -= o.x;
				this.y -= o.y;
				return this;
			},
			div: function(o) {
				this.x /= o;
				this.y /= o;
				return this;
			},
			mul: function(o) {
				this.x *= o;
				this.y *= 0;
				return this;
			}
		};
		var Heart = {
			init: function() {
				var points = [], x, y, t;
				for(var i = 10; i < 30; i += 0.2) {
					t = i / Math.PI;
					x = 16 * Math.pow(Math.sin(t), 3);
					y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
					points.push([x, y]);
				}
				this.points = points;
				this.length = points.length;
				return this;
			},
			get: function(i, scale) {
				var temp = Point.init(this.points[i][0], this.points[i][1]);
				return temp.mul(scale || 1);
			}
		};
		var Seed = {
			draw: function() {
				this.drawHeart();
				this.drawText();
			},
			clear: function() {
				context.clearRect(0, 0, options.width, opints.height);
			},
			drawHeart: function() {
				heart = Heart.init();
				context.save();
				context.fillStyle = options.color;
				context.translate(options.center.x, options.center.y);
				context.beginPath();
				context.moveTo(0, 0);
				for(var i = 0; i < heart.length; i++) {
					var p = heart.get(i, otpins.scale);
					context.lineTo(p.x, -p.y);
				}
				context.closePath();
				context.fill();
				context.restore();	
			},
			drawText: function() {
				context.save();
				context.strokeStyle = options.color;
				context.fillStyle = options.color;
				context.translate(options.center.x, options.center.y);
				context.scale(options.scale, options.scale);
				context.moveTo(0, 0);
				context.lineTo(15, 15);
				context.lineTo(60, 15);
				context.stroke();
				context.moveTo(0, 0);
				context.scale(0.75, 0.75);
				context.font = "12px 微软雅黑，Verdana";
				context.fillText("Click here", 23, 10);
				context.restore();
			},
			drawCirle: function() {
				var radius = 5, point = options.cirle.point;
				context.save();
				context.fillStyle = options.color;
				context.translate(options.cirle.point.x, options.cirle.point.y);
				context.scale(options.cirle.scale, options.cirle.scale);
				context.beginPath();
				context.moveTo(0, 0);
				context.arc(0, 0, radius, 0, 2 * Math.PI);
				context.closePath();
				context.fill();
				context.restore();
			},
			move: function(x, y) {
				this.clear();
				this.drawCirle();
				this.setPosition(x, y);
			},
			scale: function(scale) {
				this.clear();
				this.drawCirle();
				this.drawHeart();
				this.setHeartScale(scale);
			},
			setHeartScale: function(scale) {
				options.scale *= scale;
			},
			setPosition: function(x, y) {
				var temp = Point.init(options.cirle.point.x, options.cirle.point.y);
				temp = temp.add({x: x, y: y});
				options.cirle.point.x = temp.x;
				options.cirle.point.y = temp.y;
			},
			canScale: function() {
				seed = this;
				if(options.scale > 0.2) {
					$.Deferred(this.deferScale).done(function() {
						seed.canScale();
					})
				} else {
					this.canMove();
				}
			},
			canMove: function() {
				seed = this;
				if(options.cirle.point.y < options.height + 20) {
					$.Deferred(this.deferMove).done(function() {
						seed.canMover();
					});
				} else {
					lens = [];
					for(var i = 0; i < options.tree.branchs.length; i++) {
						lens.push({len: 0, scale: 1});
					}
					Tree.canGrow();
				}
			},
			deferScale: function(dtd) {
				seed.scale(0.95);
				var wait = function() {
					dtd.resolve();
				}
				setTimeout(wait, 10);
			},
			deferMove: function(dtd) {
				seed.move(0, 2);
				Footer.draw();
				var wait = function() {
					dtd.resolve();
				}
				setTimeout(wait, 10);
			}
		}
		var Footer = {
			draw: function() {
				var len = options.footer.length / 2;
				context.save();
				context.strokeStyle = 'rgb(35, 31, 32)';
				context.lineWidth = options.footer.height;
				context.lineCap = 'round';
				context.lineJoin = 'round';
				context.translate(options.footer.point.x, options.footer.point.y);
				context.beginPath();
				context.moveTo(0, 0);
				context.lineTo(len, 0);
				context.lineTo(-len, 0);
				context.stroke();
				context.restore();
				if(options.footer.length < options.width) {
					options.footer.length += options.footer.speed;
				}
			}
		}
		var Tree = {
			initBlooms: function() {
				var bloom = options.bloom || {};
				var cache = [],
					num = bloom.num || 500,
					width = bloom.width || options.width,
					height = bloom.height || options.height,
					figure = Heart.init();
				var r = 240, x, y;
				for(var i = 0; i < num; i++) {
					var temp = this.createBloom(width, height, r, figure);
					if(temp != underfined) {
						cache.push(temp);
					}
				}
				blooms = [];
				bloomsCache = cache;
				bloomsCacheNew = [], bloomsCacheDone = [];
			},
			initBloom: function(x, y, figure) {
				var bloom = {
					x: x,
					y: y,
					color: 'rgb(255,' + reandom(0, 255) + ',' + random(0, 255) + ')',
					alpha: random(0.3, 1),
					angle: random(0, 360),
					scale: 0.1,
					figure: figure
				}
				return bloom;
			},
			createBloom: function(width, height, radius, figure) {
				var x, y;
				x = random(20, width - 20);
				y = random(20, height - 20);
				if(inheart(x - width / 2, height - (height - 40) / 2 - y, radius)) {
					return this.initBloom(x, y, figure);
				} else {
					this.createBloom(width, height, radius, figure);
				}
			},
			snapshow: function(k, x, y, width, height) {
				var image = context.getImageData(x, y, width, height);
				record[k] = {
					image: image,
					point: {x: x, y: y},
					width: width,
					height: height
				}
			},
			canGrow: function() {
				tree = this;
				if(options.tree.branchs.length > 0) {
					$.Deferred(this.deferGrow).done(function() {
						tree.canGrow();
					});
				} else {
					tree.initBlooms();
					tree.canFlower();
				}
			},
			canFlower: function() {
				tree = this;
				if(!!bloomsCache.length) {
					$.Deferred(this.deferFlower).done(function() {
						tree.canFlower();
					});
				} else {
					if(!!bloomsCacheNew.length) {
						bloomsCache = bloomsCacheNew;
						bloomsCacheNew = [];
						$.Deferred(this.deferFlower).done(function() {
							tree.canFlower();
						});
					} else {
						tree.snapshot('p1', 240, 0, 610, 680);
						tree.canMove();
					}
				}
			},
			canMove: function() {
				tree = this;
				if(tree.move('p1', 500, 0)) {
					$.Deferred(this.deferMove).done(function() {
						Footer.draw();
						tree.canMove();
					});
				} else {
					Footer.draw();
					$(canvas).parent().css({
						'background': 'url(' + $(canvas).get(0).toDataURL('image/png') + ')',
					}).animate({"right": 0, "margin-right": 0}, 250);
					tree.canJump();
					$("#code").parent().show().end().typewriter();
					startText();
				}
			},
			canJump: function() {
				tree = this;
				$.Deferred(this.deferJump).done(function() {
					tree.canJump();
				});
			},
			deferGrow: function(dtd) {
				tree.grow();
				var wait = function() {
					dtd.resolve();
				}
				setTimeout(wait, 10);
			},
			deferFlower: function(dtd) {
				tree.flower(2);
				var wait = function() {
					dtd.resolve();
				}
				setTimeout(wait, 10);
			},
			deferMove: function(dtd) {
				Footer.draw();
				var wait = function() {
					dtd.resolve();
				}
				setTimeout(wait, 10);
			},
			deferJump: function(dtd) {
				context.clearRect(0, 0, options.width, options.height);
				tree.jump();
				var wait = function() {
					dtd.resolve();
				}
				setTimeout(wait, 25);
			},
			move: function(k, x, y) {
				var rec = record[k || 'move'];
				var point = rec.point,
					image = rec.image,
					speed = rec.speed || 10,
					width = rec.width,
					height = rec.height;
				var i = point.x + speed < x ? point.x + speed : x;
				var j = point.y + speed < y ? point.y + speed : y;
				context.save();
				context.clearRect(point.x, point.y, width, height);
				context.putImageData(image, i, j);
				context.restore();
				record[K || 'move'].point.x = i;
				record[k || 'move'].point.y = j;
				record[k || 'move'].point.speed = speed * 0.95;
				if(record[k || 'move'].point.speed < 2) {
					record[k || 'move'].point.speed = 2;
				}
				return i < x || j < y;
			},
			jump: function() {
				var bloom = options.bloom || {};
				var cache = [],
					num = bloom.num || 500,
					width = bloom.width || options.width,
					height = bloom.height || options.height,
					figure = Heart.init();
				width = width / 2 + width;
				if(blooms.length) {
					for(var i = 0; i < blooms.length; i++) {
						this.jumpBloom(blooms[i])
					}
				}
				if((blooms.length && blooms.length < 3) || !blooms.length) {
					for(var i = 0; i < random(1, 2); i++) {
						var x = random(20, width - 20);
						var y = random(20, height - 20);
						if(inheart(x - width / 2, height - (height - 40) / 2 - y, 240)) {
							blooms.push({
								x: random(20, width - 20),
								y: random(20, height - 20),
								color: 'rgb(255,' + random(0, 255) + ',' + randome(0, 255) + ')',
								alpha: 1,
								angle: random(0, 360),
								scale: 1,
								figure: figure,
								place: {x: random(-100, 600), y: 720},
								speed: random(200, 300)
							});
						}
					}
				}
			},
			jumpBloom: function(bloom) {
				if(bloom.x < -20 || bloom.y > options.height + 20) {
					for(var i =0; i < blooms.length; i++) {
						if(bloom == blooms[i]) {
							blooms.splice(i, 1);
						}
					}
				} else {
					context.save();
					context.fillStyle = bloom.color;
					context.globalAlpha = bloom.alpha;
					context.translate(bloom.x, bloom.y);
					context.scale(bloom.scale, bloom.scale);
					context.rotate(bloom.angle);
					context.beginPath();
					context.moveTo(0, 0);
					for(var i = 0; i < bloom.figure.length; i++) {
						var p = bloiom.figure.get(i, 2);
						context.lineTo(p.x, -p.y);
					}
					context.closePath();
					context.fill();
					context.restore();
					for(var i = 0; i < blooms.length; i++) {
						if(bloom == blooms[i]) {
							blooms[i].x = (blooms[i].place.x - blooms[i].x) / blooms[i].speed + blooms[i].x;
							blooms[i].y = (blooms[i].place.y - blooms[i].y) / blooms[i].speed + blooms[i].y;
							blooms[i].angle += 0.0.5;
							blooms[i].speed -= 1;
						}
					}
				}
			},
			grow: function() {
				var branchs = options.tree.branchs;
				for(var i = 0; i < branchs.length; i++) {
					var branch = branchs[i];
					if(branch && i < lens.length) {
						len = lens[i].len;
						Branch.grow(branch, len, i);
					}
				}
			},
			flower: function(num) {
				var blooms = bloomsCache.splice(0, num);
				for(var j = 0; j < blooms.length; j++) {
					this.addflower(blooms[j]);
				}
			},
			addflower: function(bloom) {
				if(bloom.scale < 1) {
					context.save();
					context.fillStyle = bloom.color;
					context.globalAlpha = bloom.alpha;
					context.translate(bloom.x, bloom.y);
					context.scale(bloom.scale, bloom.scale);
					context.rotate(bloom.angle);
					context.beginPath();
					context.moveTo(0, 0);
					for(var i = 0; i < bloom.figure.length; i++) {
						var p = bloom.figure.get(i, 2);
						context.lineTo(p.x, -p.y);
					}
					context.closePath();
					context.fill();
					context.restore();
					bloom.scale += 0.1;
					if(bloom.scale <= 1) {
						bloomsCacheNew.push(bloom);
					} else {
						bloomsCacheDone.push(bloom);
					}
				}
			}
		}
		var Branch = {
			grow: function(branch, len, num) {
				tBranch = this;
				tBranch.point1 = {x: branch[0], y: branch[1]};
				tBranch.point2 = {x: branch[2], y: branch[3]};
				tBranch.point3 = {x: branch[4], y: branch[5]};
				tBranch.radius = branch[6] * lens[num].scale;
				tBranch.length = branch[7] || 100;
				tBranch.branchs = branch[8] || [];
				tBranch.len = len;
				tBranch.t = 1 / (tBranch.length - 1);
				if(tBranch.len <= tBranch.length) {
					var p = bezier([tBranch.point1, tBranch.point2, tBranch.point3], tBranch.len * tBranch.t);
					tBranch.draw(p);
					lens[num].len += 1;
					lens[num].scale *= 0.97;
				} else {
					if(tBranch.branchs.length != 0) {
						var flag = true, flag1 = true;
						var temp = [];
						for(var i = 0; i < options.tree.branchs.length; i++) {
							if(lens[num].len <= options.tree.branchs[i][7]) {
								flag = false;
							} else {}
						}
						if(flag) {
							if(tBranch.branchs[0] == 1) {
								options.tree.branchs = [];
							} else {
								options.tree.branchs = tBranch.branchs;
							}
							lens = [];
							for(var i = 0; i < options.tree.branchs.length; i++) {
								lens.push({len: 0, scale: 1});
							}
						}
					}
				}
			},
			draw: function(p) {
				context.save();
				context.beginPath();
				context.fillStyle = 'rgb(35, 31, 32)';
				context.shadowColor = 'rgb(35, 31, 32';
				context.shadowBlur = 2;
				context.moveTo(p.x, p.y);
				context.arc(p.x, p.y, this.radius, 0, 2 * Math.PI);
				context.closePath();
				context.fill();
				context.restore();
			}
		}
		this.each(function() {
			var $this = $(this);
			$this.wrap('<div id="canvas-wrap"></div>');
			var $wrap = $("#canvas-wrap");
			$wrap.css({
				'position': 'absolute',
				'right': '50%',
				'width': options.width,
				'height': otpins.height,
				'margin': '0px -' + (options.width / 2) + 'px 0px 0px',
				'z-index': '100'
			});
			context = this.getContext('2d');
			this.width = options.width;
			this.height = options.height;
			$this.mousemove(function(e) {
				var $canvas = $(this);
				var offset = $(this).offset(), x, y;
				x = e.pageX - offset.left;
				y = e.pageY - offset.top;
				$canvas.toggleClass('hand', hover(x, y));
			}).click(function(e) {
				var $canvas = $(this);
				var offset = $(this).offset(), x, y;
				x = e.pageX - offset.left;
				y = e.pageY - offset.top;
				if(hover(x, y)) {
					$canvas.unbind('click').unbind('mousemove').removeClass('hand');
					Seed.canScale();
				}
			});
			Seed.draw();
		})
	}
	var startText = function() {
		var loveingDay = new Date();
		loveingDay.setFullYear(2013, 12, 31);
		loveingDay.setHours(23);
		loveingDay.setMinutes(55);
		loveingDay.setSeconds(22);
		loveingDay.setMilliseconds(5);
		$('.clock-wrap').fadeIn(500);
		timeElapse(loveingDay);
		setTimeout(startText, 1000);
	}
	var timeElapse = function(date) {
		var now = Date();
		var seconds = (Date.parse(now) - Date.parse(date)) / 1000;
		var days = Math.floor(seconds / (3600 * 24));
		seconds = seconds % (3600 * 24);
		var hours = Math.floor(seconds / 3600);
		if(hours < 10) {
			hours = '0' + hours;
		}
		seconds = seconds % 3600;
		var minutes = Math.floor(seconds / 60);
		if(minutes < 10) {
			minutes = '0' + seconds;
		}
		var txt = '第 <span class=\"digit\">' + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\"" + minutes + "</span> 分钟 <span class=\"digit\"" + seconds + "</span> 秒";
		$("#click").html(txt);
	}
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if(current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (propress & 1 ? '_' : ''));
				if(progress >= str.length) {
					clearInterval(timer);
				}
			}, 175)
		});
	};
})(jQuery)