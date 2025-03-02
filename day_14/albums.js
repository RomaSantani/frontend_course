function fetchAlbums() {
    fetch("https://jsonplaceholder.typicode.com/albums",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response => {
        return response.json();
    }).then(albums =>{
        for(let i=0;i<albums.length;i++){
            console.log("User id is:" + albums[i]["userId"]);
            console.log("id is:" + albums[i]["id"]);
            console.log("Title is:" + albums[i]["title"]);
            console.log("------");
        }
    })
}

fetchAlbums();