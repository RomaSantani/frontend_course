function calculateResult(operator){
    const firstNumber = document.getElementById("first-number").value;
    const secondNumber = document.getElementById("second-number").value;
    const result=calculate(firstNumber, secondNumber,operator);
    document.getElementById("calculated-result").textContent = result;
    document.getElementById("calculated-result").style = "color:red; font-style:bold; font-size:48px;";
}

function calculate(firstNumber , secondNumber, operator){
    if (operator==="+"){
        return Number(firstNumber)+Number(secondNumber);
    }else if(operator==="-"){
        return Number(firstNumber)-Number(secondNumber);
    }else if(operator==="*"){
        return Number(firstNumber)*Number(secondNumber);
    }else if(operator==="/"){
        return Number(firstNumber)/Number(secondNumber);
    }else if(operator==="**"){
        return Number(firstNumber)**Number(secondNumber);
    }else{
        console.log("invalid operator");
    }
}

