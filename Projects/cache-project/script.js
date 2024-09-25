async function storeData() {
    // name of the schema
  let cache = await caches.open("storedata");
  let request = await cache.match("https://picsum.photos/id/237/200/300");
  if (request) {
    console.log("Data restored from cache");
    let getImage = await request.blob();
    document.querySelector("img").src = URL.createObjectURL(getImage);
  } else {
    let reqImage = await fetch("https://picsum.photos/id/237/200/300");
    if (reqImage.ok) {
      await cache.add("https://picsum.photos/id/237/200/300");
      let getImage = await reqImage.blob();
      document.querySelector("img").src = URL.createObjectURL(getImage);
    }
    console.log("Data stored to cache");
  }
}

async function fetchCache(){
    let cache = await caches.open("storedata");
    let request = await cache.match("https://picsum.photos/id/237/200/300");
    if (request) {
      console.log("Data restored from cache");
      let getImage = await request.blob();
      document.querySelector("#img2").src = URL.createObjectURL(getImage);
    } 
}

const btn = document.querySelector('button')
btn.addEventListener('click', ()=>{
    fetchCache()
})

storeData()