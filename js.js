var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var myColor = "red";

document.getElementById('color').oninput = function (ev) {
    myColor = this.value;
}

document.getElementById('but').onclick = function (ev) {
    ctx.clearRect(0, 0, 400, 200);
}

canvas.onmousedown = function (ev) {
    canvas.onmousemove = function (ev) {
        var x = ev.offsetX;
        var y = ev.offsetY;
        ctx.fillRect(x, y, 5, 5);

        ctx.fillStyle = myColor;
        ctx.fill();

    }

    canvas.onmouseup = function (ev) {
        canvas.onmousemove = null;
    }

    }








