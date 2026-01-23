function calculate() {
  
  const BMIvalue = document.getElementById("BMI-amt");
  const macro = document.getElementById("macro-amt");
  const weightinput = document.getElementById("weight");
  const heightinput = document.getElementById("height");

  const weight = parseFloat(weightinput.value);
  const height = parseFloat(heightinput.value) / 100;

  if (isNaN(weight) || isNaN(height) || height <= 0 || height == weight) {
    BMIvalue.textContent = "Invalid input";
    return;
  }

  const result = weight / (height * height);
  const protien = weight * 1.6 ;

  BMIvalue.textContent = result.toFixed(2);
  macro.textContent = protien.toFixed(2);
}
                                             