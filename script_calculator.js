
function calculatePercentage() {
    // Get user input values
    const days = document.getElementById("days").value;
    const years = document.getElementById("years").value;

    // Check if inputs are valid
    if (days && years && years > 0) {
        // Calculate the total days in the given years (assuming 365 days per year)
        const totalDays = years * 365;

        // Calculate percentage
        const percentage = (days / totalDays) * 100;

        // Display the result
        document.getElementById("result").textContent = `Result: ${percentage.toFixed(2)}%`;
    } else {
        document.getElementById("result").textContent = "Please enter valid numbers.";
    }
}
