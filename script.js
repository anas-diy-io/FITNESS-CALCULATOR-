function calculate() {
  
  const BMIvalue = document.getElementById("BMI-amt");
  const macro = document.getElementById("macro-amt");
  const calorie = document.getElementById("calorie-amt");

  const weightinput = document.getElementById("weight");
  const heightinput = document.getElementById("height");
  const ageinput = document.getElementById("age");
  const gender = document.getElementById("gender").value;
  const TDEE = parseInt(document.getElementById("TDEE").value);


  const weight = parseFloat(weightinput.value);
  const height = parseFloat(heightinput.value) / 100;
  const age = parseInt(ageinput.value);
  const heightcm = height * 100;


  if (!weight || !height|| !age || !gender) {
    calorie.textContent = "Fill all fields";
    return;
  }

  let BMR;
  if(gender=="m"){
      BMR =(10 * weight) + (6.25 * heightcm) - (5 * age ) + 5 ;
  }
  else if(gender=="f"){
      BMR =(10 * weight) + (6.25 * heightcm) - (5 * age ) - 161 ;
  }

  let calories;
  if(TDEE===0)
  {
    calorie.textContent ="select activity level:(";
    return;
  }
  else if(TDEE===1)
  {
    calories=BMR * 1.2;
  }
  else if(TDEE===2)
    {
    calories=BMR * 1.375;
  }
  else if(TDEE===3)
  { 
    calories=BMR * 1.55;
  }
  else if(TDEE===4)
  {
    calories=BMR * 1.725;
  }
  else if(TDEE===5)
  {
    calories=BMR * 1.9;
  }


  const BMI = weight / (height * height);
  const protien = weight * 1.85 ;

  BMIvalue.textContent = BMI.toFixed(1);
  macro.textContent = protien.toFixed(2);
  calorie.textContent = calories.toFixed(0);
}
                                             
