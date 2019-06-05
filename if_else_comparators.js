prompt("What is your name");
prompt("What is your lovers name?");
alert("Okay let me see how well you match");

calculation = Math.random() * 100;
calculation = Math.floor(calculation) + 1;

if (calculation === 100) {
    alert(calculation + "% Your love is unrivaled by anything this world has seen")
} else if (calculation >= 79) {
    alert(calculation + "% Your love knows no bounds")
} else if (calculation >= 69) {
    alert(calculation + "% You match well, but you will argue")
} else if (calculation >= 59) {
    alert(calculation + "% You should just be friends")
} else {
    alert(calculation + "% You should be aquaintances")
}

//BMI Calculator Enhanced 

function bmiCalculator(weight, height) {
    var interpretation = weight / (height ** 2);
    return Math.round(interpretation);

}

function bmiRating(bmi) {
    if (interpretation >= 35) {
        console.log("Your bmi: " + interpretation + " You are extremely obese")
    } else if (interpretation >= 30) {
        console.log("Your bmi: " + interpretation + " You are obese")
    } else if (interpretation >= 25) {
        console.log("Your bmi: " + interpretation + " You are overweight")
    } else if (interpretation >= 18.5) {
        console.log("Your bmi: " + interpretation + " You have a normal bmi")
    } else console.log("Your bmi: " + interpretation + " You are underweight")
}

var interpretation = bmiCalculator(65, 1.5)
console.log(bmiRating(interpretation));

//BMI Calculator Enhance V.2

function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / (height * height));
    var interpretation;

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight."
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
    } else if (bmi >= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
    }

    return interpretation;
}