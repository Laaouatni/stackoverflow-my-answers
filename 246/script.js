class Coords {
  static array = [];

  static translate(dx = 0, dy = 0) {
    Coords.array.forEach((point) => {
      point.x += dx;
      point.y += dy;
    });
  }

  static rotate(angleDeg = 0) {
    const angleRad = (angleDeg * Math.PI) / 180;
    Coords.array.forEach((point) => {
      point.x = point.x * Math.cos(angleRad) - point.y * Math.sin(angleRad);
      point.y = point.x * Math.sin(angleRad) + point.y * Math.cos(angleRad);
    });
  }
}

class Point extends Coords {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;

    Coords.array.push(this);
  }
}
