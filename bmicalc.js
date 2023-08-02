
function calculateBMI() {
    // Get input values
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    // Check if inputs are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").textContent = "Please enter valid weight and height.";
        return;
    }

    // Calculate BMI
    var bmi = weight / (height * height);

    // Display result
    var resultText = "Your BMI is: " + bmi.toFixed(2);
    if (bmi < 18.5) {
        resultText += " (Underweight)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += " (Normal weight)";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += " (Overweight)";
    } else {
        resultText += " (Obese)";
    }
    document.getElementById("result").textContent = resultText;
}

