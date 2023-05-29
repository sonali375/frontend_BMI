function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value / 100; // convert height to meters

  var bmi = weight / (height * height);
  var result = "RESULT: Your BMI is " + bmi.toFixed(2);

  document.getElementById("result").textContent = result;
}

// Add an event listener to the calculate button
document.getElementById("btn-calculate").addEventListener("click", calculateBMI);

function openWikipedia() {
  window.open("https://en.wikipedia.org/wiki/Body_mass_index", "_blank");
}
