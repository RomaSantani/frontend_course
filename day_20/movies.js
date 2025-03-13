function searchMovie(event) {
    event.preventDefault();
    console.log("Movie");
    const movieName = event.target[0].value;
    fetchMovie(movieName);
}

function fetchMovie(movieName) {
    fetch("https://www.omdbapi.com/?t=" + movieName + "&apikey=", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log("Title is: " + data["Title"]);
        console.log("Description is: " + data["Plot"]);
        console.log("Actors are: " + data["Actors"]);
        console.log("url is: " + data["Poster"]);
        console.log("IMDB rating is : " + data["imdbRating"]);
        console.log("------------------");

        const movieTitle = data["Title"];
        const description = data["Plot"];
        const actorsName = data["Actors"];
        const url = data["Poster"];
        const rating = data["imdbRating"];

        const cardElement = document.createElement("div");
        cardElement.setAttribute("class", "card card-wm");

        const imgElement = document.createElement("img");
        imgElement.setAttribute("class", "image-hw");
        imgElement.setAttribute("src", url);
        imgElement.setAttribute("alt", "Some img here...");

        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.setAttribute("class", "card-body");

        const cardTitle = document.createElement("h2");
        cardTitle.setAttribute("class", "card-title");
        // cardTitle.textContent = movieTitle;
        cardTitle.innerHTML = movieTitle + "&nbsp; <span class='badge bg-secondary'>" + rating + "</span>"

        const cardDescription = document.createElement("p");
        cardDescription.setAttribute("class", "card-text");
        cardDescription.innerHTML = description + "&nbsp; <span class='fsb'>" + actorsName + "</span>";


        cardElement.appendChild(imgElement);
        cardElement.appendChild(cardBodyDiv);

        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardDescription);

        const movieCardDiv = document.getElementById("movieCard");
        movieCardDiv.appendChild(cardElement);


    })
}