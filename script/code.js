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
  } else if (weight === "" || isNaN(weight)) {
    display.innerHTML = "This is not a valid weight";
  } else {
     bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //  Declaring whether you are Under Weight, Normal, Overweight or Obese
    if (bmi < 18.5) {
            display.innerHTML.body.style.color = `You are Under Weight: ${bmi}`;
          } else if (bmi >= 18.5 && bmi < 24.9) {
            display.innerHTML = `You are Normal Weight: ${bmi}`;
          } else if (bmi >= 25 && bmi < 29.9) {
            display.innerHTML = `You are Overweight: ${bmi}`;
          } else {
            display.innerHTML = `You are Obese: ${bmi}`;
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
