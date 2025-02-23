function calculateResult(){
    const principal = document.getElementById("loanAmount").value;
    const rate = document.getElementById("interestRate").value;
    const tenure= document.getElementById("loanTenure").value;
    calculate(principal, rate, tenure);
}
function calculate(principal,rate,tenure){
const monthlyRate = rate/12/100;
const months = tenure * 12;
const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

const result = document.getElementById("result");
result.textContent = emi;
}
