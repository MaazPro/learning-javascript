const apiUrl = 'https://jsonplaceholder.typicode.com/users'

function fetchData(){
    return new Promise((resolve, reject)=>{
        fetch(apiUrl)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            resolve(data)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

fetchData()
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})

async function fetchData2(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data);       
}
fetchData2()