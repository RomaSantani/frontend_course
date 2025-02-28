function calculateBmiResult(event) {
    console.log("Roma...");
    event.preventDefault();
    const w = getWeight();
    const h = getHeight();
    const bmi = calculateBmi(w, h);

    document.getElementById("bmi").textContent = bmi;
    const bmiCategory = getBmiCategory(bmi);
    setBmiCategory(bmiCategory);
}

function getHeight() {
    return (document.getElementById("height").value) / 100;
}

function getWeight() {
    return document.getElementById("weight").value;
}

function calculateBmi(w, h) {
    return (w / (h ** 2)).toFixed(2);
}
function setBmiCategory(bmiCategory) {
    document.getElementById("bmiCategory").textContent = bmiCategory;
}

function getBmiCategory(bmi) {
    if (bmi < 18.5) {
        setBmiColor("yellow");
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        setBmiColor("green");
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        setBmiColor("orange");
        return "Overweight";
    } else {
        setBmiColor("red");
        return "Obese";
    }
}

function setBmiColor(color) {
    document.getElementById("bmiCategory").style.color = color;
}