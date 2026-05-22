let isRaining = true;
console.log(typeof isRaining);

if (isRaining == false) {
  console.log("carry an umbrella");
} else {
  console.log("no worry");
}

let Eng = 50;
let Maths = 50;
let Bio = 50;
let chem = 50;
let average = (Eng + Maths + Bio + chem) / 4;
console.log(average);
if (average >= 70) {
  console.log("excellent result");
} else if (average >= 60) {
  console.log("you failed");
} else if (average >= 50) {
  console.log("good result");
}
// N.F

let weather = "sunny";
switch (weather) {
  case "rainy":
    console.log("it's rainy");

    break;
  case "cloudy":
    console.log("it's cloudy");

    break;
  case "sunny":
    console.log("the sun is shinning");

    break;

  default:
    console.log("it's a great weather");
}
// ternary operator

let isGoing = true

isGoing? console.log("is going 0"): console.log("it's not going");


