window.addEventListener("load", logo);

function logo() {
  var canvas = document.getElementsByTagName("canvas")[0],
    ctx = canvas.getContext('2d'),
    w = 640,
    h = 640,
    s = 2;

    canvas.width = w * s;
    canvas.height = h * s;
    canvas.style.width = "auto";
    canvas.style.height = "100%";
    ctx.scale(s, s);

    var cols = 60,
      rows = 70,
      psize = 2,
      xPos = w/2 - 10,
      yPos = h/2 - (rows*psize)/2,
      lgpsize = psize * 9,
      maxLgpCols = 6,
      amp = 6,
      freq = 20,
      waveX = 0,
      color = [
        'rgb(0, 0, 0)',
        'rgb(228, 116, 28)',
        'rgb(72, 180, 101)',
        'rgb(53, 124, 179)',
        'rgb(246, 195, 15)',
      ],
      skyBg = new Image(),
      sky = {
        x: 0,
        w: w,
        h: w * 0.6,
        speed: 1
      },
      partObj = function(x, y, color, size, lvl) {
        this.x = x || 0;
        this.origX = this.x;
        this.y = y || 0;
        this.origY = this.y;
        this.color = color || "rgb(0, 0, 0)";
        this.size = size || 1;
        this.origSize = this.size;
        this.lvl = lvl || 0;
      },
      part = [];

    skyBg.src = "http://iconshow.me/media/images/Textures/pattern/clouds-seamless-background.jpg";

    for(let j = 0; j < maxLgpCols; ++j) {
      for(let i = 0; i < 7; ++i) {
        let pc = color[i == 1 || 1 == 2 ? 1 : (i == 4 || i == 5 ? 3 : 0)];
        part.push(new partObj((xPos + lgpsize/2) - ((lgpsize + psize) * j), yPos + lgpsize/2 + (lgpsize + psize) * i + psize + amp*Math.cos((waveX - (lgpsize * j)) * Math.pow(freq, -1)), pc, lgpsize*(1/maxLgpCols)*(maxLgpCols -j), i));
      }
    }

    var drawScreen = function() {
      ctx.clearRect(0,0,w,h);
      ctx.drawImage(skyBg,w/2 - sky.w/2 - sky.x, h/2, sky.w, sky.h);
      ctx.drawImage(skyBg,w/2 - sky.w/2 - sky.x, h/2 - sky.h, sky.w, sky.h);
      ctx.drawImage(skyBg,w*1.5 - sky.w/2 - sky.x, h/2, sky.w, sky.h);
      ctx.drawImage(skyBg,w*1.5 - sky.w/2 - sky.x, h/2 - sky.h, sky.w, sky.h);

      sky.x += sky.speed;

      if(sky.x > sky.w) {
        sky.x = 0;
      }

      for(let p in part) {
        ctx.fillStyle = part[p].color;

        ctx.fillRect(
          part[p].x - part[p].size/2,
          part[p].y - part[p].size/2,
          part[p].size,
          part[p].size
        );

        part[p].x -= psize;

        if(part[p].size > 0) {
          part[p].size -= psize * (1/maxLgpCols);
        }
        if(part[p].x < xPos - (lgpsize * 6)) {
          part[p].x = xPos + lgpsize/2;
          part[p].y = yPos + lgpsize/2 + (lgpsize + psize) * part[p].lvl + psize + amp*Math.cos(waveX * Math.pow(freq, -1));
          part[p].size = lgpsize;
        }
      }

      for(let r = 0; r < rows; ++r) {
        for(let c = 0; c < cols; ++c) {
          let validPt = false;

          if(r > 9 && r < 31) {
            if(c > 9 && c < 26) {
              ctx.fillStyle = color[1];
            } else if(c > 34 && c < 52) {
              ctx.fillStyle = color[2];
            } else {
              ctx.fillStyle = color[0];
            }
          } else if(r > 39 && r < 61) {
            if(c > 9 && c < 26) {
              ctx.fillStyle = color[3];
            } else if (c > 34 && c < 52) {
              ctx.fillStyle = color[4];
            } else {
              ctx.fillStyle = color[0];
            }
          } else {
            ctx.fillStyle = color[0];
          }

          if((c > 9 || r % 10 != 0) && c != 9) {
            ctx.fillRect((c * psize) + xPos, (r * psize) + yPos + amp * Math.cos((c + waveX) * Math.pow(freq, -1)), psize, psize);
          }
        }
      }

      waveX += Math.PI;
      if(waveX > freq*2*Math.PI) {
        waveX = 0;
      }
    },
    run = function() {
      drawScreen();
      setTimeout(run, 1000/60);
    };
    run();
}