// Task 1

var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDiary(dairy) {
  for (var dai of dairy) {
    console.log(dai);
  }
}
logDiary(dairy);

// Task 2

const animal = { canJump: true };

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(bird) {
  for (var bir of Object.keys(bird)) {
    console.log(bir + ": " + bird[bir]);
  }
}

birdCan(bird);

// Task 3

function animalCan(bird) {
  for (var bir in bird) {
    console.log(bir + ": " + bird[bir]);
  }
}

animalCan(bird);

// Task 1

var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (var item of dairy) {
    console.log(item);
  }
}

// Task 2

const animal = { canJump: true };

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (key of Object.keys(bird)) {
    console.log(key + ": " + bird[key]);
  }
}

// Task 3

function animalCan() {
  for (key in bird) {
    console.log(key + ": " + bird[key]);
  }
}

logDairy();

birdCan();

animalCan();
