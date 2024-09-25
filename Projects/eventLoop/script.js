console.log("Start"); // synchronous

// Handled by Web API
setTimeout(() => {
    console.log("Inside setTimeout");
}, 1000);

console.log("End"); // synchronous
