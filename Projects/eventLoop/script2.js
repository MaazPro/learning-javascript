async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()
    console.log(data);
    
  } catch (error) {
    console.log(error);
  }
}

console.log("1");
fetchData();
console.log("3");
