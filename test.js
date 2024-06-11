class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));      // Outputs: 8
console.log(calculator.subtract(5, 3)); // Outputs: 2
console.log(calculator.multiply(5, 3)); // Outputs: 15
console.log(calculator.divide(6, 3));   // Outputs: 2



// Test cases for Calculator class
//const calculator = new Calculator();

// Test add() method
console.log(calculator.add(5, 3) === 8); // Expected output: true
console.log(calculator.add(-5, -3) === -8); // Expected output: true

// Test subtract() method
console.log(calculator.subtract(5, 3) === 2); // Expected output: true
console.log(calculator.subtract(3, 5) === -2); // Expected output: true

// Test multiply() method
console.log(calculator.multiply(5, 3) === 15); // Expected output: true
console.log(calculator.multiply(5, 0) === 0); // Expected output: true

// Test divide() method
console.log(calculator.divide(6, 3) === 2); // Expected output: true
try {
    calculator.divide(6, 0);
} catch (e) {
    console.log(e.message === "Cannot divide by zero"); // Expected output: true
}