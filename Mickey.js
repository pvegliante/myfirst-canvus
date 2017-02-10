function Mickey(x, y) {
    this.mickeyX = x;
    this.mickeyY = y;
    var self = this;
    document.addEventListener("keydown", function(e) {
        console.log(e.keyCode);
        if (e.keyCode === 87) self.mickeyY -= 5;
        if (e.keyCode === 83) self.mickeyY += 5;
        if (e.keyCode === 65) self.mickeyX -= 5;
        if (e.keyCode === 68) self.mickeyX += 5;
    });
}

Mickey.prototype.draw = function(ctx) {
    var x = this.mickeyX;
    var y = this.mickeyY;
    // face
    ctx.beginPath();
    ctx.ellipse(x, y, 50, 50, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    // left ear
    ctx.beginPath();
    ctx.ellipse(x - 56, y - 56, 30, 30, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    // right ear
    ctx.beginPath();
    ctx.ellipse(x + 57, y - 56, 30, 30, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    // // nose
    ctx.beginPath();
    ctx.ellipse(x, y, 6, 8, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    // // left eye
    ctx.beginPath();
    ctx.ellipse(x - 20, y - 16, 16, 18, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    // // right eye
    ctx.beginPath();
    ctx.ellipse(x + 20, y - 16, 16, 18, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    // right pup
    ctx.beginPath();
    ctx.ellipse(x + 10, y - 16, 5, 7, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    // left pup
    ctx.beginPath();
    ctx.ellipse(x - 10, y - 16, 5, 7, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    // mouth
    ctx.beginPath();
    ctx.ellipse(x, y + 25, 20, 15, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}
module.exports = Mickey;
