function fetchBbcNews(subject){
    fetch("https://newsapi.org/v2/everything?q="+subject,{
        method:"GET",
        headers:{
            'Content-Type':'application/json',
            'Authorization': 
        }
    }).then(response=>{
        return response.json();
    }).then(news=>{
        const articles = news["articles"];
        for(let i=0;i<articles.length;i++){
            console.log("Source id is: " + articles[i]["source"]["id"]);
            console.log("Source name is: " + articles[i]["source"]["name"]);
            console.log("author is: " + articles[i]["author"]);
            console.log("title is: " + articles[i]["title"]);
            console.log("description is: " + articles[i]["description"]);
            console.log("-------------------");
        }
    })
}
fetchBbcNews("Bollywood");


