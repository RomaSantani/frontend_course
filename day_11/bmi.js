function calculateBmi(event){
    event.preventDefault();
    let h = document.getElementById("height").value;
    const w = document.getElementById("weight").value;
    h=h/100;
    let bmi = w/(h**2);
    bmi = bmi.toFixed(2);
    document.getElementById("bmi").textContent = bmi;
    let bmiCategory = ""; 
    if(bmi<18.5){
        bmiCategory = "Underweight";
        document.getElementById("bmiCategory").textContent = bmiCategory;
        document.getElementById("bmiCategory").style= "color:yellow";
    }else if(bmi>=18.5 && bmi<25){
        bmiCategory = "Normal weight";
        document.getElementById("bmiCategory").textContent = bmiCategory;
        document.getElementById("bmiCategory").style= "color:green";
    }else if(bmi>=25 && bmi<30){
        bmiCategory = "Overweight";
        document.getElementById("bmiCategory").textContent = bmiCategory;
        document.getElementById("bmiCategory").style= "color:orange";
    }else{
        bmiCategory = "Obese";
        document.getElementById("bmiCategory").textContent = bmiCategory;
        document.getElementById("bmiCategory").style= "color:red";
    }
}