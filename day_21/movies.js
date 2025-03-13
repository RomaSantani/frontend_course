function searchMovie(event){
    event.preventDefault();
    console.log("3 idiots");
    const movieName = event.target[0].value;
    fetchMovie(movieName);
}

function fetchMovie(movieName){
    fetch("https://www.omdbapi.com/?t=" + movieName + "&apikey=",{
        method:"GET",
        hearders:{
            'Content-Type': 'application/json'
        }
    }).then(response=>{
        return response.json();
    }).then(data=>{
        console.log("Title is: " + data["Title"]);
        console.log("Description is: " + data["Plot"]);
        console.log("Actors are: " + data["Actors"]);
        console.log("url is: " + data["Poster"]);
        console.log("IMDB rating is : " + data["imdbRating"]);
        console.log("------------------");

        const title = data["Title"];
        const description = data["Plot"];
        const actors = data["Actors"];
        const url = data["Poster"];
        const rating = data["imdbRating"];

        const cardElement= document.createElement("div");
        cardElement.setAttribute("class", "card");

        const imgElement = document.createElement("img");
        imgElement.setAttribute("class", "photo-hw");
        imgElement.setAttribute("src" , url);
        imgElement.setAttribute("alt" , "some image here...");

        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.setAttribute("class", "card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.setAttribute("class", "card-title");
        //document.textContent = title;
        cardTitle.innerHTML = title + "&nbsp; <span class='badge bg-secondary'>" + rating + "</span>"

        const cardDescription = document.createElement("p");
        cardDescription.setAttribute("class", "card-text");
        //document.textContent = description;
        cardDescription.innerHTML = description + "&nbsp; <span class='fsb'>" + actors + "</span>";

        cardElement.appendChild(imgElement);
        cardElement.appendChild(cardBodyDiv);

        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardDescription);

        const movieCard = document.getElementById("movieCard");
        movieCard.appendChild(cardElement);
    })
}