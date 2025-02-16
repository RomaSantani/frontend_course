function printHelloWorld(){
    console.log("Hello World!!");
}

//printHelloWorld();

function printHelloWorldWithName(name){
    console.log("Hello World " + name + "!!");
}

//printHelloWorldWithName("Bharat");

function printHelloWorldWithNames(name1, name2){
    console.log("Hello World " + name1 + " and " +name2);
}

//printHelloWorldWithNames("Roma" , "Bharat");

function addTwoNumbers(num1 , num2){
    console.log(num1 + num2);
}
//addTwoNumbers(1,2);

function subtract(num1,num2){
    console.log("The result is: " + (num1-num2));
}
//subtract(4,5);

function subtractBiggerFromSmaller(num1,num2){
    if(num1>num2){
        console.log("The result is: " + (num1-num2));
    }else {
        console.log("The result is: " + (num2-num1));
    }
}
//subtractBiggerFromSmaller(10,3);
//subtractBiggerFromSmaller(3,10);

function subtractSmallerFromBigger(num1,num2){
    if(num1<num2){
        console.log("The result is: " + (num1-num2));
    } else {
        console.log("The result is: " + (num2-num1));
    }
}
//subtractSmallerFromBigger(10,3);
//btractSmallerFromBigger(3,10);

function addWithoutConsoleLog(a,b){
    return a+b;
}
const addResult = addWithoutConsoleLog(3,5);
console.log(addResult);