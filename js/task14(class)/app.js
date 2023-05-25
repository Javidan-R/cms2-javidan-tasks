class Car {
  speed = 0;
  constructor(model, year, owner) {
    (this.model = model), (this.year = year), (this.owner = owner);
  }
  qazVer() {
    return (this.speed += 10);
  }
  tormozVer() {
    return (this.speed -= 10);
  }
}

const tesla = new Car("t28", 2020, "Musk");
console.log(tesla);
console.log(tesla.qazVer());

Array.prototype.clear = function () {
  this.length = [];
  return `empty array`;
};
const arr = [1, 3, 4, 54, 55];
arr.clear();
console.log(arr);
String.prototype.hide = function () {
  return this.slice(0, 3) + "*".repeat(this.length - 3);
};
let text = "Cavidan";
text = text.hide();
console.log(text);

Number.prototype.isEven = function () {
  return this % 2 == 0;
};
const ed = 13;
console.log(ed.isEven());

// TASKS
