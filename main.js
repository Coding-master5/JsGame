class Game {
  constructor(w, h) {
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    document.body.appendChild(canvas);
  }
  #drawTriangle(x1, y1, z1, x2, y2, z2, x3, y3, z3, c) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1/z1+this.canvas.width/2, y1/z1+this.canvas.height/2);
    this.ctx.lineTo(x2/z2+this.canvas.width/2, y2/z2+this.canvas.height/2);
    this.ctx.lineTo(x3/z3+this.canvas.width/2, y3/z3+this.canvas.height/2);
    this.ctx.closePath();
    this.ctx.fillStyle = c || 'black';
    this.ctx.fill();
  }
  #drawPlane(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4, c) {
    this.#drawTriangle(x1, y1, z1, x2, y2, z2, x4, y4, z4, c);
    this.#drawTriangle(x2, y2, z2, x4, y4, z4, x3, y3, z3, c);
  }
  drawQuad(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4, x5, y5, z5, x6, y6, z6, x7, y7, z7, x8, y8, z8, c) {
  	this.#drawPlane(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4, c);
    this.#drawPlane(x5, y5, z5, x6, y6, z6, x7, y7, z7, x8, y8, z8, c);
    this.#drawPlane(x1, y1, z1, x2, y2, z2, x6, y6, z6, x5, y5, z5, c);
    this.#drawPlane(x2, y2, z2, x3, y3, z3, x7, y7, z7, x6, y6, z6, c);
    this.#drawPlane(x4, y4, z4, x3, y3, z3, x7, y7, z7, x8, y8, z8, c);
    this.#drawPlane(x1, y1, z1, x4, y4, z4, x8, y8, z8, x5, y5, z5, c);
  }
}
