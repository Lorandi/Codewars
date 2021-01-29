//Calculate BMI

function bmi(weight, height) {
    x = weight / (height * height);
    if (x <= 18.5){
        return "Underweight"
    } else if (x <= 25.0){
        return "Normal"
    } else if (x <= 30.0){
        return "Overweight"
    } else{
        return "Obese"
    }
  }

  console.log(bmi(85,1.8))