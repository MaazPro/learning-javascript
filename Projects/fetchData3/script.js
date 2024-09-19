const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const apiUrl2 = 'https://jsonplaceholder.typicode.com/todos';
const promise1 = new Promise((resolve, reject)=>{
    fetch(apiUrl)
    .then((response)=>{
       return response.json()
    })
    .then(data => resolve(data))
    .catch((error)=>reject(error))
})

const promise2 = new Promise((resolve, reject)=>{
    fetch(apiUrl2)
    .then((response)=>{
       return response.json()
    })
    .then(data => resolve(data))
    .catch((error)=>reject(error))
})
 const response = Promise.all([promise1, promise2])
response
.then((data)=>console.log(data))
.catch(error => console.log(error))


async function fetchData(){
    try {
        const response = await fetch(apiUrl)
        const response2 = await fetch(apiUrl2)
        const data = await response.json()
        const data2 = await response2.json()
        console.log("Data 1");        
        console.log(data);
        console.log("Data 2");
        console.log(data2);      
    } catch (error) {   
        console.log(error);        
    }
}
fetchData()