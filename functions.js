//basic function

function buyMilk() {
    console.log("goes to store and gets milk");
}

buyMilk();


// Input Function

function getMilk(bottles) { //input number of bottles
    var cost = bottles * 1.5; //multiply the # of bottles * the cost
    console.log(cost); //log the cost
}

getMilk(2); //input 2 bottles

// Input Function Challenge

function getJuice(moneyAvailable) {
    var juiceCost = 2.3;
    var numOfBottles = moneyAvailable / juiceCost;
    console.log("You can buy " + Math.floor(numOfBottles) + " bottles of juice");
}

getJuice(10);

//Functions inside Functions
/*

function getMilk(moneyAvailable, costPerBottle) {
    console.log("Buy " + calcNumOfBottles(moneyAvailable, costPerBottle) + " bottles of milk");//go to line 8
    return calcChange(moneyAvailable, costPerBottle);
}


function calcNumOfBottles(startingMoney, costPerBottle) { //take args from getMilk(x) and line 3
    var numOfBottles = Math.floor(startingMoney / costPerBottle); //calculate numOfBottles I can buy on line 3
    return numOfBottles; //return numberOfBottles to getMilk line 3
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

*/
//BMI CALCULATOR CHALLENGE

//Create your function below this line.
function getBMI(weight, height) {
    var bmi = weight / (height ** 2);
    return Math.round(bmi);
}



// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(90, 1.4);

//BMI Challenge two

function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / (height * height));
    var interpretation;

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight."
    }
    if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are normal weight."
    }
    if (bmi >= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
    }

    return interpretation;
}
console.log(bmiCalculator(6, 2))
/*
function bmiMessage(bmi) {
    if (bmi < 18.5) {
        return  "Your BMI is " + bmi + ", so you are underweight."
    }
        if (bmi >= 18.5 && bmi < 24.9) {
        return  "Your BMI is " + bmi + ", so you are normal weight."
    }
        if (bmi >= 24.9) {
        return  "Your BMI is " + bmi + ", so you are overweight."
    }
}

bmi = bmiCalculator(6, 2);
console.log(bmiMessage(bmi));
*/