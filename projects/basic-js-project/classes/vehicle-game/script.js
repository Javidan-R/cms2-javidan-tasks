class Vehicle {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 50;
    this.height = 30;
  }

  move() {
    this.x += this.speed;
  }

  draw(context) {
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  checkCollision(vehicle) {
    return (
      this.x < vehicle.x + vehicle.width &&
      this.x + this.width > vehicle.x &&
      this.y < vehicle.y + vehicle.height &&
      this.y + this.height > vehicle.y
    );
  }
}

class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.vehicles = [];
    this.paused = false;
    this.score = 0;
    this.scoreElement = document.getElementById('score');
  }

  addVehicle(vehicle) {
    this.vehicles.push(vehicle);
  }

  update() {
    if (this.paused) {
      return;
    }

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const vehicle of this.vehicles) {
      vehicle.move();
      vehicle.draw(this.context);
    }

    this.checkCollisions();
    this.updateScore();

    requestAnimationFrame(() => this.update());
  }

  checkCollisions() {
    for (let i = 0; i < this.vehicles.length; i++) {
      for (let j = i + 1; j < this.vehicles.length; j++) {
        const vehicleA = this.vehicles[i];
        const vehicleB = this.vehicles[j];

        if (vehicleA.checkCollision(vehicleB)) {
          this.endGame();
          return;
        }
      }
    }
  }

  updateScore() {
    this.score += 1;
    this.scoreElement.textContent = this.score;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  endGame() {
    this.paused = true;
    alert(`Game Over!\nFinal Score: ${this.score}`);
  }
}

function initGame() {
  const gameCanvas = 'game-canvas';
  const game = new Game(gameCanvas);

  const vehicle1 = new Vehicle(50, 100, 1);
  const vehicle2 = new Vehicle(200, 200, 0.5);

  game.addVehicle(vehicle1);
  game.addVehicle(vehicle2);

  game.update();

  document.addEventListener('keydown', (event) => {
    if (event.key === 'p') {
      game.togglePause();
    }
  });
}

initGame();
