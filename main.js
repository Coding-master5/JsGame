class Game {
  constructor(w, h) {
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    canvas.style.border = '1px solid #000';
    
    this.camX = 0;
    this.camY = 0;
    this.camZ = 1;

    this.fov = 75;
    
    document.body.appendChild(canvas);
  }
  #drawTriangle(x1, y1, z1, x2, y2, z2, x3, y3, z3, c) {
    this.ctx.beginPath();
    this.ctx.moveTo((x1+this.camX)/(z1*fov+this.camZ)+this.canvas.width/2, (y1+this.camY)/(z1*fov+this.camZ)+this.canvas.height/2);
    this.ctx.lineTo((x2+this.camX)/(z2*fov+this.camZ)+this.canvas.width/2, (y2+this.camY)/(z2*fov+this.camZ)+this.canvas.height/2);
    this.ctx.lineTo((x3+this.camX)/(z3*fov+this.camZ)+this.canvas.width/2, (y3+this.camY)/(z3*fov+this.camZ)+this.canvas.height/2);
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
  setCameraPos(x, y, z, xRot, yRot, zRot) {
    [this.camX, this.camY, this.camZ] = [x, y, z];
  }
}
