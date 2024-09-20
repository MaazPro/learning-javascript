// Closure Example: Counter Function
function createCounter() {
    let count = 0; // This variable is in the outer function's scope (closure)

    return ()=>{
        // This inner function has access to `count` due to closure
        count += 1;
        return count;
    };
}

// Create a new counter instance
const counter = createCounter();

// Call the counter multiple times and display the result
const result = document.getElementById('result');
result.innerHTML = `
    <p>First call: ${counter()}</p>
    <p>Second call: ${counter()}</p>
    <p>Third call: ${counter()}</p>
`;

// Creating another counter to show each closure is independent
const anotherCounter = createCounter();
console.log("Another counter starts from:", anotherCounter());
