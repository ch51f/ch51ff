(function($) {
  // $.fn.bubble = function(opts) {
  //   console.log(123)
  // }
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  // context.moveTo(0, 0);
  // context.lineTo(800, 600);
  // context.lineWidth = 5;
  // context.strokeStyle = "#AA394C";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(100, 100);
  // context.lineTo(300, 300);
  // context.lineTo(100, 500);
  // context.lineWidth = 5;
  // context.strokeStyle = "#AA394C";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(300, 100);
  // context.lineTo(500, 300);
  // context.lineTo(300, 500);
  // context.lineWidth = 5;
  // context.strokeStyle = "blue";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(500, 100);
  // context.lineTo(700, 300);
  // context.lineTo(500, 500);
  // context.lineWidth = 5;
  // context.strokeStyle = "black";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(150, 50);
  // context.lineTo(650, 50);
  // context.lineTo(650, 550);
  // context.lineTo(150, 550);
  // context.lineTo(150, 50);
  // context.closePath(); 
  // context.fillStyle = "yellow";
  // context.lineWidth = 5;
  // context.strokeStyle = 'black';
  // context.fill();
  // context.stroke();

  // drawRect(context, 150, 50, 50, 50, 'red', 5, 'blue');
  // drawRect(context, 250, 50, 50, 50, 'green', 5, 'red');
  // drawRect(context, 350, 50, 50, 50, 'yellow', 5, 'black');

  // context.beginPath();
  // context.rect(0, 0, 800, 600)
  // context.fillStyle = "#AA9033";
  // context.fill();

  // context.beginPath();
  // for(var i = 0; i <= 20; i++) {
  //   drawWhiteRect(context, 200 + 10 * i, 100 + 10 * i, 400 - 20 * i, 400 - 20 * i);
  //   drawBlackRect(context, 205 + 10 * i, 105 + 10 * i, 390 - 20 * i, 390 - 20 * i);
  // }

  // context.beginPath();
  // context.rect(395, 295, 5, 5);
  // context.fillStyle = "black";
  // context.lineWidth = 5;

  // context.fill();
  // context.stroke();

  // context.lineWidth = 50;
  // context.strokeStyle = "#1BAAAA";

  // context.beginPath();
  // context.moveTo(100, 100);
  // context.lineTo(700, 100);
  // context.lineCap = "butt";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(100, 300);
  // context.lineTo(700, 300);
  // context.lineCap = "round";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(100, 500);
  // context.lineTo(700, 500);
  // context.lineCap = "square";
  // context.stroke();

  // context.lineWidth = 3;
  // context.strokeStyle = "black";

  // context.beginPath();
  // context.moveTo(100, 0);
  // context.lineTo(100, 600);
  // context.moveTo(700, 0);
  // context.lineTo(700, 600);
  // context.stroke();

  // context.beginPath();
  // context.moveTo(100, 100);
  // context.lineTo(300, 300);
  // context.lineTo(100, 500);
  // context.lineJoin = "miter";
  // context.lineWidth = 20;
  // context.strokeStyle = "red";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(300, 100);
  // context.lineTo(500, 300);
  // context.lineTo(300, 500);
  // context.lineJoin = "bevel";
  // context.lineWidth = 20;
  // context.strokeStyle = "blue";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(500, 100);
  // context.lineTo(700, 300);
  // context.lineTo(500, 500);
  // context.lineJoin = "round";
  // context.lineWidth = 20;
  // context.strokeStyle = "black";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(100, 100);
  // context.lineTo(300, 300);
  // context.lineTo(100, 500);
  // context.lineJoin = "miter";
  // context.miterLimit = 10;
  // context.lineWidth = 5;
  // context.strokeStyle = "red";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(300, 200);
  // context.lineTo(500, 300);
  // context.lineTo(300, 400);
  // context.lineJoin = "miter";
  // context.miterLimit = 10;
  // context.lineWidth = 5;
  // context.strokeStyle = "blue";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(500, 290);
  // context.lineTo(700, 300);
  // context.lineTo(500, 310);
  // context.lineJoin = "miter";
  // context.miterLimit = 10;
  // context.lineWidth = 5;
  // context.strokeStyle = "black";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(0, 0);
  // context.lineTo(180, 0);
  // context.lineTo(180, 180);
  // context.lineJoin = 'bevel';
  // context.lineCap = 'round';
  // context.lineWidth = 10;
  // context.strokeStyle = "red";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(300, 200);
  // context.lineTo(480, 200);
  // context.lineTo(480, 380);
  // context.lineJoin = 'bevel';
  // context.lineCap = 'round';
  // context.lineWidth = 10;
  // context.strokeStyle = "blue";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(600, 400);
  // context.lineTo(780, 400);
  // context.lineTo(780, 580);
  // context.lineJoin = 'round';
  // context.lineCap = 'butt';
  // context.lineWidth = 10;
  // context.strokeStyle = "black";
  // context.stroke();

  // context.rect(200, 100, 400, 400);
  // var grd = context.createLinearGradient(200, 300, 600, 300);

  // grd.addColorStop(0, "black");
  // grd.addColorStop(0.5, "white");
  // grd.addColorStop(1, "black");

  // context.fillStyle = grd;
  // context.fill();

  // var grd = context.createLinearGradient(100, 300, 700, 300);

  // grd.addColorStop(0, 'olive');
  // grd.addColorStop(0.25, 'maroon');
  // grd.addColorStop(0.5, 'aqua');
  // grd.addColorStop(0.75, 'fuchsia');
  // grd.addColorStop(0.25, 'teal');

  // context.fillStyle = grd;
  // context.strokeStyle = grd;

  // context.strokeRect(200, 50, 300, 50);
  // context.strokeRect(200, 100, 150, 50);
  // context.strokeRect(200, 150, 450, 50);

  // context.fillRect(200, 300, 300, 50);
  // context.fillRect(200, 350, 150, 50);
  // context.fillRect(200, 400, 450, 50);

  // context.fillRect(0, 550, 800, 25);

  // var grd = context.createRadialGradient(400, 300, 100, 400, 300, 200);

  // grd.addColorStop(0, "olive");
  // grd.addColorStop(0.25, "maroon");
  // grd.addColorStop(0.5, "aqua");
  // grd.addColorStop(0.75, "fuchsia");
  // grd.addColorStop(0.25, "teal");

  // context.fillStyle = grd;

  // context.fillRect(100, 100, 600, 400);

  // var img = new Image();
  // img.src = "/asset/edu8-1.jpg";
  // img.onload = function() {
  //   var pattern = context.createPattern(img, "repeat");
  //   context.fillStyle = pattern;
  //   context.fillRect(0,0,800,600);
  // }

  context.fillStyle = "#fff";
  context.fillRect(0, 0, 800, 600);

  // drawRoundRect(context, 200, 100, 400, 400, 50);
  // context.strokeStyle = "#0078AA";
  // context.stroke();

  // drawRoundRect(context, 200, 100, 400, 400, 5);
  // context.fillStyle = "#AA7B41";
  // context.strokeStyle = "#0078AA";
  // context.stroke();
  // context.fill();

  // for(var i = 1; i <= 4; i++) {
  //   for(var j = 1; j <= 4; j++) {
  //     drawRoundRect(context, 200 + 16 * i + 80 * (i - 1), 100 + 16 * j + 80 * (j - 1), 80, 80, 5);
  //     context.fillStyle = "#CCBFB4";
  //     context.strokeStyle = "#0078AA";
  //     context.stroke();
  //     context.fill();
  //   }
  // }  

  // drawArcTo(context, 200, 200, 600, 200, 600, 400, 100);

  // context.lineWidth = 5;
  // context.strokeStyle = "#333";
  // context.beginPath();
  // context.moveTo(60, 337);
  // context.quadraticCurveTo(256, 43, 458, 336);
  // context.stroke();

  // drawPrairie(context);
  // drawSky(context);
  // for(var i = 0; i < 5; i++) {
  //   var x0 = 500 * Math.random() + 50;
  //   var y0 = 200 * Math.random() + 50;
  //   var c0 = 100 * Math.random() + 50;
  //   drawCloud(context, x0, y0, c0);
  // }

  // context.fillStyle = "#00AAAA";
  // context.fillRect(100, 100, 200, 100);

  // context.fillStyle = "red";
  // context.translate(100, 100);
  // context.fillRect(100, 100, 200, 100);

  // context.fillStyle = "#00AAAA";
  // context.fillRect(100, 100, 200, 100);

  // context.save();
  // context.fillStyle = "red";
  // context.translate(100, 100);
  // context.fillRect(100, 100, 200, 100);
  // context.restore();

  // context.save();
  // context.fillStyle = "green";
  // context.translate(200, 200);
  // context.fillRect(100, 100, 200, 100);
  // context.restore();

  // for(var i = 0; i <= 12; i++) {
  //   context.save();
  //   context.translate( 70 + i * 50, 50 + i * 40);
  //   context.fillStyle = "#00AAAA";
  //   context.fillRect(0, 0, 20, 20);
  //   context.restore();

  //   context.save();
  //   context.translate(70 + i * 50, 50 + i * 40);
  //   context.rotate(i * 30 * Math.PI / 180);
  //   context.fillStyle = "red";
  //   context.fillRect(0, 0, 20, 20);
  //   context.restore();
  // }

  // for(var i = 1; i <= 10; i++) {
  //   context.save();
  //   context.translate(400, 300);
  //   context.rotate(36 * i * Math.PI / 180);
  //   context.fillStyle = "rgba(255, 0, 0 , 0.25)";
  //   context.fillRect(0, -200, 200, 200);
  //   context.restore();
  // }

  context.strokeStyle = "red";
  context.lineWidth = 5;
  for(var i = 1; i < 4; i++) {
    context.save();
    context.scale(i, i);
    context.strokeRect(50, 50, 150, 100);
    context.restore();
  }
})(jQuery)

function drawRect(ctx, x, y, w, h, fillColor, borderWidth, borderColor) {
  ctx.beginPath();
  // ctx.moveTo(x, y);
  // ctx.lineTo(x + w, y);
  // ctx.lineTo(x + w, y + h);
  // ctx.lineTo(x, y + h);
  // ctx.lineTo(x, y);
  // ctx.closePath();
  ctx.rect(x, y, w, h);

  ctx.lineWidth = borderWidth;
  ctx.strokeStyle = borderColor;
  ctx.fillStyle = fillColor;

  ctx.fill();
  ctx.stroke();
}

function drawBlackRect(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);

  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";

  ctx.stroke();
}

function drawWhiteRect(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);

  ctx.lineWidth = 5;
  ctx.strokeStyle = "white";

  ctx.stroke();
}

function drawRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 3 / 2);
  ctx.lineTo(w - r + x, y);
  ctx.arc(w - r + x, r + y, r, Math.PI * 3 / 2, Math.PI * 2);
  ctx.lineTo(w + x, h + y - r);
  ctx.arc(w - r + x, h - r + y, r, 0, Math.PI * 1 / 2);
  ctx.lineTo(r + x, h + y);
  ctx.arc(r + x, h - r + y, r, Math.PI * 1 / 2, Math.PI);
  ctx.closePath();
}

function drawArcTo(ctx, x0, y0, x1, y1, x2, y2, r) {
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.arcTo(x1, y1, x2, y2, r);
  ctx.lineWidth = 6;
  ctx.strokeStyle = "red";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.lineTo(x2, y2);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#0088AA";
  ctx.stroke();
}

function drawSky(ctx) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 420)
  ctx.bezierCurveTo(250, 300, 350, 550, 800, 400);
  ctx.lineTo(800, 0);
  ctx.lineTo(0, 0);
  ctx.closePath();

  var lineStyle = ctx.createRadialGradient(400, 0, 50, 400, 0, 200);
  lineStyle.addColorStop(0, "#42A9AA");
  lineStyle.addColorStop(1, "#2491AA");

  ctx.fillStyle = lineStyle;
  ctx.fill();
  ctx.restore();
}

function drawPrairie(ctx) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 420);
  ctx.bezierCurveTo(250, 300, 350, 550, 800, 400);
  ctx.lineTo(800,600);
  ctx.lineTo(0, 600);
  ctx.closePath();

  var lineStyle = ctx.createLinearGradient(0, 600, 600, 0);
  lineStyle.addColorStop(0, "#00AA58");
  lineStyle.addColorStop(0.3, "#63AA7B");
  lineStyle.addColorStop(1, "#04AA00");

  ctx.fillStyle = lineStyle;
  ctx.fill();
  ctx.restore();
}

function drawCloud(ctx, cx, cy, cw) {
  var maxWidth = 800;
  cx = cx % maxWidth;
  var ch = cw * 0.6;

  ctx.beginPath();
  ctx.fillStyle = "white";

  var grd = ctx.createLinearGradient(0, 0, 0, cy);
  grd.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
  grd.addColorStop(1, 'rgba(255, 255, 255, 0.5)');
  ctx.fillStyle = grd;

  ctx.arc(cx, cy, cw * 0.19, 0, 360, false);
  ctx.arc(cx + cw * 0.08, cy - ch * 0.3, cw * 0.11, 0, 360, false);
  ctx.arc(cx + cw * 0.3, cy - ch * 0.25, cw * 0.25, 0, 360, false);
  ctx.arc(cx + cw * 0.6, cy, cw * 0.21, 0, 360, false);
  ctx.arc(cx + cw * 0.3, cy - ch * 0.1, cw * 0.28, 0, 360, false);
  ctx.closePath();

  ctx.fill();
}