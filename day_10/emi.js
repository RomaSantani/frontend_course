function calculateResult(event) {
    console.log("Calculating EMI");
    console.log(event);
    console.log(event.target[0].value);
    event.preventDefault();
    const principal = document.getElementById("loanAmount").value;
    const rate = document.getElementById("interestRate").value;
    const tenure = document.getElementById("loanTenure").value;
    const emi = calculate(principal, rate, tenure);
    const result = document.getElementById("result");
    result.textContent = emi;
}
function calculate(principal, rate, tenure) {
    const monthlyRate = rate / 12 / 100;
    const months = tenure * 12;
    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    emi = Math.floor(emi);
    return emi;
}
function resetResult(event){
    event.preventDefault();
    const result=document.getElementById("result");
    result.textContent="44986";
}

function hover(){
    document.getElementById("amount-label").style="color:red";
    console.log("Hovering");
}

function hoverout(){
    document.getElementById("amount-label").style="color:black";
    console.log("Hovering");
}