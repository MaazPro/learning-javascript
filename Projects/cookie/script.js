const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");
const deleteBtn = document.querySelector('#deleteBtn')


submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

deleteBtn.addEventListener('click', ()=>{
    deleteCookie("firstName")
    deleteCookie("lastName")
})

function setCookie(name, value, daysToLive){
    const date = new Date();
    // Changing daysToLive in miliseconds
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    // date.toUTCString() is the required format for the expires attribute of a cookie
    let expires = "expires=" + date.toUTCString();
    // Setting the cookie value
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    // Cookies are URL-encoded by default (to ensure that special characters are properly transmitted), so decodeURIComponent() is used to decode any URL-encoded characters back to their original form.
    const cDecoded = decodeURIComponent(document.cookie);
    
    // This separates the cookies in the key value pairs separated by ;
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        // This returns 0 if the name is found at the very beginning of the string.
        if(element.indexOf(name) == 0){
            // Returns value after the name
            result = element.substring(name.length + 1)
        }
    })
    return result;
}