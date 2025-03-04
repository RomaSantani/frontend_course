function fetchPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response=>{
            return response.json();
    }).then(photos=>{
        for(let i=0;i<photos.length;i++){
            console.log("album Id is: " +photos[i]["albumId"]);  
            console.log("title is: " +photos[i]["title"]);
            console.log("url is: " +photos[i]["url"]);
            console.log("Thumbnail url is " +photos[i]["thumbnailUrl"]);
            console.log("------------");              
        }
    })
}

fetchPhotos();