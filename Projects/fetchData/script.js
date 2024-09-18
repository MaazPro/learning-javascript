const apiURL = 'https://jsonplaceholder.typicode.com/users'
function fetchUserData(){
    return new Promise((resolve, reject)=>{
        fetch(apiURL)
        .then(response =>{
            if (!response.ok)
            {
                reject("Error: Unable to fetch data!")
            }
            return response.json()
        })
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
}

fetchUserData()
.then(users =>{
    console.log(users);
})
.catch(error =>{
    console.log(error);
})