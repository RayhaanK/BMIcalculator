// Declaring variables
let calculate = document.querySelector("#calculate");
let clear = document.querySelector("#clear");
let display = document.querySelector("#display");
let bmi;

// Calculating the BMI
function calculation() {
    // Declaring variables
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
//   To make sure no invalid text is inserted or not at all
  if (height === "" || isNaN(height)) {
    display.innerHTML = "This is not a valid height";
    display.style.color = "red"
  } else if (weight === "" || isNaN(weight)) {
    display.innerHTML = "This is not a valid weight";
    display.style.color = "red"
  } else {
     bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //  Declaring whether you are Under Weight, Normal, Overweight or Obese
    if (bmi < 18.5) {
            display.innerHTML = `You are Under Weight 🦟: ${bmi}`;
            display.style.color = "#E55807"
          } else if (bmi >= 18.5 && bmi < 24.9) {
            display.innerHTML = `You are Normal Weight 😏: ${bmi}`;
            display.style.color = "green"
          } else if (bmi >= 25 && bmi < 29.9) {
            display.innerHTML = `You are Overweight 🦧: ${bmi}`;
            display.style.color = "#990000"
        } else {
            display.innerHTML = `You are Obese 🐷: ${bmi}`;
            display.style.color = "#F94A29"
    }
  }}

// clear button
function clears() {
    // clears everyting displayed
  window.location.reload()
}
clear.addEventListener("click", () => {
  clears();
});
