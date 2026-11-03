function add(num1, num2){
    return num1 + num2;
}

function div(num1, num2) {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    console.log(`Dividing ${num1} by ${num2}`);
    return num1 / num2;
}

try {
    let result = div(10, 0);
    console.log(`Result of division: ${result}`);
} catch (error) {
    console.error(error.message);
}finally {
    console.log("Execution completed.");
}
