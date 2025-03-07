function searchNews(event){
    event.preventDefault();
    const searchTerm = event.target[0].value;
    findNews(searchTerm);
}

function findNews(searchTerm){
    fetch("https://newsapi.org/v2/everything?q=" + searchTerm ,{
        method:"GET",
        headers:{
            'Content-Type':'application/json',
            'X-Api-Key' : 
        }
    }).then(response=>{
        return response.json();
    }).then(data=>{
        const articles = data["articles"];
        for (let i=0;i<articles.length;i++){
            const title = articles[i]["title"];
            const description = articles[i]["description"];
            const url = articles[i]["url"];
            const urlToImage = articles[i]["urlToImage"];

            const cardDiv = document.createElement("div");
            cardDiv.setAttribute("class" , "card col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-2");

            const imgElement = document.createElement("img");
            imgElement.setAttribute("src", urlToImage);
            imgElement.setAttribute("class","card-img-top");
            imgElement.setAttribute("alt","some image here...");

            const cardBody = document.createElement("div");
            cardBody.setAttribute("class","card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.setAttribute("class","card-title");
            cardTitle.textContent = title;

            const cardText= document.createElement("p");
            cardText.setAttribute("class","card-text");
            cardText.textContent=description;

            const newsSourceButton = document.createElement("a");
            newsSourceButton.setAttribute("href", url);
            newsSourceButton.setAttribute("target","_blank");
            newsSourceButton.setAttribute("class","btn btn-primary");
            newsSourceButton.textContent="Go to News";

            cardDiv.appendChild(imgElement);
            cardDiv.appendChild(cardBody);

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(newsSourceButton);

            const resultsDiv = document.getElementById("results");
            resultsDiv.appendChild(cardDiv);

        }
    })
}