function getNews(keyword) {
    fetch("https://newsdata.io/api/1/latest?apikey=&q=" + keyword, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        const results = data["results"];

        for(let i=0;i<results.length;i++){
            console.log("Title is: " + results[i]["title"]);
            console.log("description is: " + results[i]["description"]);
            console.log("Image url is: "+ results[i]["image_url"]);
            console.log("----------");
        }
    })

}
getNews("sports");