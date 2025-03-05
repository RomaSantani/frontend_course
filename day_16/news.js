function getNews(event) {
    event.preventDefault();
    const searchTerm = event.target[0].value;
    searchNews(searchTerm);
}

function searchNews(searchTerm) {
    fetch("https://newsapi.org/v2/everything?q=" + searchTerm,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key':
            }
        }
    ).then(response=>{
        return response.json();
    }).then(data=>{
        const articles = data["articles"];
        for(let i=0;i<articles.length;i++){
            console.log("Title is: " + articles[i]["title"]);
            console.log("Description is: " + articles[i]["description"]);
            console.log("url is: " + articles[i]["urlToImage"]);
            console.log("------------------");

            const title = articles[i]["title"];
            const description = articles[i]["description"];
            const url = articles[i]["urlToImage"];

            const cardDiv = document.createElement("div");
            cardDiv.setAttribute("class","card card-wd");

            const imageElement =  document.createElement("img");
            imageElement.setAttribute("src", url);
            imageElement.setAttribute("class", "card-img-top");
            imageElement.setAttribute("alt" , "some image here...");

            const cardBody = document.createElement("div");
            cardBody.setAttribute("class","card-body");

            const cardTitle= document.createElement("h5");
            cardTitle.setAttribute("class" ,"card-title");
            cardTitle.textContent =title;

            const cardPara= document.createElement("p");
            cardPara.setAttribute("class" ,"card-text");
            cardPara.textContent = description;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardPara);

            cardDiv.appendChild(imageElement);
            cardDiv.appendChild(cardBody);

            const allNewsDiv=document.getElementById("all-news");
            allNewsDiv.appendChild(cardDiv);
        }
    })
}
