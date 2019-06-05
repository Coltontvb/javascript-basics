//fizz buzz game basic function MY OWN ITERATION BEFORE LEARNING
//Used equalFizzbuzz() to avoid conflict with real fizzbuzz
//Use for loops, as this is what we have learned so far
function equalFizzBuzz() {
    for (var i = 0; i < 101; i++) {
        if (i % 2 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else console.log(i);
    }
}
equalFizzBuzz();

//Second interation with Third Outcome fix

function fizzBuzz() {
    var myArray = [];
    for (var i = 1; i < 11; i++) {
        if (i % 3 === 0 && i % 5 == 0) { //my fix
            myArray.push("FizzBuzz");
        } else if (i % 5 === 0) {
            myArray.push("buzz");
        } else if (i % 3 === 0) {
            myArray.push("fizz");
        } else myArray.push(i);
    }
    console.log(myArray);
}

fizzBuzz();

function fizzBuzz2() {
    var i = 1;
    while (i <= 100) {
        if (i % 3 === 0 && i % 5 == 0) { //my fix
            myArray.push("FizzBuzz");
        } else if (i % 5 === 0) {
            myArray.push("buzz");
        } else if (i % 3 === 0) {
            myArray.push("fizz");
        } else myArray.push(i);
    }
    i++;
}

fizzBuzz2()
//While loop option
function whileFizzBuzz() {
    var myArray = [];
    while (myArray.length <= 100) {
        if (myArray.length % 3 === 0 && myArray % 5 == 0) { //my fix
            myArray.push("FizzBuzz");
        } else if (myArray.length % 5 === 0) {
            myArray.push("buzz");
        } else if (myArray.length % 3 === 0) {
            myArray.push("fizz");
        } else myArray.push(myArray.length);
    }
    myArray.length++;
    console.log(myArray)
}

whileFizzBuzz();

//Bottles of Beer While Loop

//bottles of beer

function bottlesOfBeer() {
    var numOfBeer = 100;
    while (numOfBeer > 0) {
        console.log(numOfBeer + " bottle of beer on the wall, " + numOfBeer + " bottle of beer. take one down and pass it around, " + numOfBeer + " bottle of beer on the wall");
        numOfBeer--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}

bottlesOfBeer();

function fibonacciGenerator(n) {
    var fibonacciArray = [];
    var a = 0;
    var b = 0;
    var fn = a + b;

    for (i = 0; i <= n; i++) {
        if (a == 0 && b == 0) {
            a++;
            b++;
        } else fn = a + b;
        a = b;
        b = fn;
        fibonacciArray.push(fn);
    }
    return fibonacciArray;
}

fibonacciGenerator(10);