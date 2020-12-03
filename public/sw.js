console.log("Service worker Registered successfully")
let cacheData="appv1"; // cache name
this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((data)=>{
            data.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "index.html",
                "/users",
                "https://jsonplaceholder.typicode.com/users",
                "/about",
                "/"
            ])
        })
    )
})
this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((result)=>{
                console.log("result",result)
                if(result){
                    return result
                }
            })
        )
    }
})