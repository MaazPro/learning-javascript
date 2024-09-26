async function storeData() {
    // name of the schema/cache
  let cache = await caches.open("storedata");
  // This checks if the image with the URL is already stored in the cache.
  let request = await cache.match("https://picsum.photos/id/237/200/300");
  if (request) {
    console.log("Data restored from cache");
    // The image data is extracted as a blob
    let getImage = await request.blob();
    // Creates a URL for the blob data.
    document.querySelector("img").src = URL.createObjectURL(getImage);
  } else {
    // If the image is not cached is fetch from the API.
    let reqImage = await fetch("https://picsum.photos/id/237/200/300");
    if (reqImage.ok) {
      // The image is added to the cache 
      await cache.add("https://picsum.photos/id/237/200/300");
      // The image is converted to a blob 
      let getImage = await reqImage.blob();
      // Blob is then turned in to a URL
      document.querySelector("img").src = URL.createObjectURL(getImage);
    }
    console.log("Data stored to cache");
  }
}

async function fetchCache(){
  // creates a cache names storedata
    let cache = await caches.open("storedata");
    // The method searches for a cached response that matches the URL
    let request = await cache.match("https://picsum.photos/id/237/200/300");
    if (request) {
      console.log("Data restored from cache");
      // The response is converted to a blob 
      let getImage = await request.blob();
      // The blob is converted to a URL
      document.querySelector("#img2").src = URL.createObjectURL(getImage);
      
    } 
}

const btn = document.querySelector('button')
btn.addEventListener('click', ()=>{
    fetchCache()
})

storeData()