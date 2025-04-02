// Javascript for interactivity

// Declaring const to each HTML element to reference them in the code.
// I prefer to do this because it makes the code more readable and easier to understand.

const costPerLiterInput = document.getElementById('costPerLiter');
const litersPurchasedInput = document.getElementById('litersPurchased');
const calculateButton = document.getElementById('calculateButton');
const totalCostText = document.getElementById('totalCost');

// Now, let's create a function to calculate the cost.

function calculateTotalCost() {
    
    // Since we're dealing with money costs and all that, we'll need to convert the given inputs into decimal numbers (floats).

    const costPerLiter = parseFloat(costPerLiterInput.value); // Converts the input to a float and then assigns itself to the constant costPerLiter. 
    const litersPurchased = parseFloat(litersPurchasedInput.value); // Same process is done here as well.

    // Although the user can only type numbers, we must still check if their input is valid.
    // By using if-else statements and the isNaN function, we can validate the data.

    if (!isNaN(costPerLiter) && !isNaN(litersPurchased)) { // By adding an exclamation point (not operator) within isNan, this basically defines Not a Number.
        
        // Now. let's calculate the total cost using multiplication operators. After that, we'll assign it to totalCost.
        const totalCost = costPerLiter * litersPurchased;

        // We're gonna update the total cost paragraph text but of course, round it to two decimal places to make the output cleaner.
        totalCostText.textContent = `Total Cost: ${totalCost.toFixed(2)}$`;

    } else {
        // If the input is invalid, the total cost paragraph text will say invalid input.
        totalCostText.textContent = 'Invalid input';
    }
}

// This makes it so that when the button is clicked, the calculateTotalCost function is called and done.
calculateButton.addEventListener('click', calculateTotalCost);