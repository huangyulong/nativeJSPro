var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#000';
ctx.strokeStyle = '#666';

var rect = {
    x: 0,
    y: 0,
    vx: 5,
    vy: 5,
    width: 100,
    height: 100,
    draw: function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
    },
    rotate(){
        // ctx.clearRect(0,0,canvas.width, canvas.height);
        // ctx.translate(rect.x + rect.width/2,rect.height*Math.sin(Math.PI/4)-rect.height) //rect.height*Math.cos(Math.PI/4)-rect.height
        // ctx.translate(100,100)
        // rect.x++;
        ctx.clearRect(-51,-51,canvas.width, canvas.height)
        ctx.rotate(Math.PI/180);
        ctx.strokeRect(-50,-50, rect.width, rect.height)
        window.requestAnimationFrame(rect.rotate)
    },
    drawLine(){
        ctx.beginPath();
        ctx.moveTo(rect.x, rect.height/2);
        ctx.lineTo(canvas.width, rect.height/2);
        ctx.closePath()
        ctx.stroke()
    }

}

var interval = null;
function draw(){
    if(rect.x === 580){
        rect.y = rect.y + rect.height;
        rect.x = 0;
    }else{
        rect.x = rect.x + rect.vx;
    }
    rect.rotate();
    if(rect.y === 300){
        rect.x = 0;
        rect.y = 0;
        rect.draw()
        window.cancelAnimationFrame(interval)
    }else{
        interval = window.requestAnimationFrame(draw)
    }
  
}

var time = null
function rotate(){
    // rect.x += rect.vx;
    rect.rotate()
}

// ctx.translate(400,300);
// rect.rotate()
// setInterval(function(){
//     rect.x++;
//     rect.rotate()
// },100)

// rect.draw();
// draw()
// rect.drawLine()
// rect.rotate()

ctx.clearRect(0,0,canvas.width, canvas.height)

ctx.strokeRect(0,0,200,200);

ctx.beginPath()
ctx.translate(100,100)
ctx.rotate(Math.PI/4);
ctx.strokeRect(-100,-100,200,200)
ctx.fillRect(200,-100,200,200)
ctx.closePath()

ctx.strokeRect(0,0,300,300)


















