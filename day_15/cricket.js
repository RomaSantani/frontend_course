function getNews(subject){
    fetch("https://newsapi.org/v2/everything?q=" + subject,{
        method:"GET",
        headers:{
            'Content-Type':'application/json',
            'X-Api-Key' :
        }
    }).then(response=>{
        return response.json();
    }).then(news=>{
        const articles = news["articles"];
        for(i=0;i<articles.length;i++){
            console.log("Title is: " + articles[i]["title"]);
            console.log("Description is: " + articles[i]["description"]);
            console.log("Url is: " + articles[i]["url"]);
        }
    })
}
getNews("politics India");