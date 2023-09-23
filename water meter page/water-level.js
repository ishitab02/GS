function checkWaterConsumption() {
    // Get user input values
    const familyMembers = parseInt(document.getElementById("familyMembers").value, 10);
    const waterConsumed = parseInt(document.getElementById("waterConsumed").value, 10);

    // Calculate the standard water consumption (10 liters per person)
    const standardWaterConsumption = familyMembers * 30;

    // Calculate the water level percentage
    const waterLevelPercentage = (waterConsumed / standardWaterConsumption) * 100;

    // Get the water level element and the message element
    const waterLevel = document.getElementById("waterLevel");
    const message = document.getElementById("message");

    // Adjust the water level and display messages based on consumption
    
    if (waterLevelPercentage <= 50) {
        waterLevel.style.height = "25%";
        waterLevel.style.backgroundColor = "#87CEEB";
        message.textContent = "Brilliant Water Management";
    }
    else if (waterLevelPercentage <= 100 && waterLevelPercentage >50) {
        waterLevel.style.height = "50%";
        waterLevel.style.backgroundColor = "#1E90FF"; // Deep blue
        message.textContent = "Good Water Management";
    } 
    else if (waterLevelPercentage <= 200 && waterLevelPercentage >100) {
        waterLevel.style.height = "75%";
        waterLevel.style.backgroundColor = "red"; // Red
        message.textContent = "Poor Water Management";
    } 
    else {
        waterLevel.style.height = "100%";
        waterLevel.style.backgroundColor = "black"; //black
        message.textContent = "Disastrous Water Management!";
        
    }
}
