const fetchButton = document.getElementById("fetchButton")
const resultElement = document.getElementById("result")
const stopServerButton = document.getElementById("stopServer");
const startServer = document.getElementById("startServer")
let success = true;
function fetchUserData(){
    return new Promise((resolve, reject)=>{

        // 2 seconds delay to simlate asynchronous server request
        setTimeout(()=>{
            if(success){
                resolve({
                    name: "Person",
                    age: 20,
                    email: "person@gmail.com"
                })
            }else{
                reject("Error: Failed to fetch user data.")
            }
         }, 2000)
    })
}

fetchButton.addEventListener("click", ()=>{
    resultElement.innerHTML = "Fetching user data.."

    fetchUserData().then((data)=>{
        resultElement.innerHTML = `Name: ${data.name}, Age: ${data.age}, Email: ${data.email}`
    }).catch(error =>{
        resultElement.innerHTML = error
    })
})

stopServerButton.addEventListener("click", ()=>{
    success = false;
    alert("Server stopped")
})
startServer.addEventListener("click", ()=>{
    success = true;
    alert("Server started")
})