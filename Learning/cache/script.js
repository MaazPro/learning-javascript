console.log("caches" in self);

async function storeData1() {
  let cache = await caches.open("storedata");
  // stores data in Cache
  await cache.add(new Request("https://jsonplaceholder.typicode.com/todos/"));
  // Fetching data
  // Returns the first matched value
  let request = await cache.match(
    "https://jsonplaceholder.typicode.com/todos/"
  );

  if (request) {
    console.log(await request.json());
  } else {
    console.log("No data in cache");
  }
}

async function storeData2() {
  let cache = await caches.open("storedata");
  await cache.addAll([
    "https://jsonplaceholder.typicode.com/todos/",
    "https://jsonplaceholder.typicode.com/todos/1",
  ]);
  let keys = await cache.keys();
  for (let request of keys) {
    let response = await cache.match(request);
    console.log(await response.json());
  }
}

async function storeData3() {
  let cache = await caches.open("storedata");
  let request = await cache.match(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  if (request) {
    console.log("Data restored from cache");

    console.log(await request.json());
  } else {
    await cache.add("https://jsonplaceholder.typicode.com/todos/");
    console.log("Data stored to cache");
  }
}
// storeData1();
// storeData2()
storeData3();
