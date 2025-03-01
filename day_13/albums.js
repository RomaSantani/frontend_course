const albums = [
    {
        "albumId": 1,
        "id": 1,
        "title": "Breathtaking Nature Landscape",
        "url": "https://picsum.photos/600/400?random=1",
        "description": "A glimpse into the beautiful landscapes of nature."
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "Urban Art and City Lights",
        "url": "https://picsum.photos/600/400?random=2",
        "description": "An artistic view of the city lights and urban art."
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "Misty Mountain Landscape",
        "url": "https://picsum.photos/600/400?random=3",
        "description": "A mysterious landscape filled with fog and distant mountains."
    }
];

for(i=0; i<albums.length; i++){
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src" , albums[i]["url"]);
    imageElement.setAttribute("height" , "300px");
    imageElement.setAttribute("class", "card-img-top");
    imageElement.setAttribute("alt", "some image here...");

    const bodyDiv = document.createElement("div");
    bodyDiv.setAttribute("class","card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = albums[i]["title"];

    const cardDescription = document.createElement("p");
    cardDescription.setAttribute("class", "card-text");
    cardDescription.textContent = albums[i]["description"];

    cardDiv.appendChild(imageElement);
    cardDiv.appendChild(bodyDiv);

    bodyDiv.appendChild(cardTitle);
    bodyDiv.appendChild(cardDescription);

    const albumsBody = document.getElementById("albumsBody");
    albumsBody.appendChild(cardDiv);
}


