function searchCocktails(event) {
    event.preventDefault();
    console.log("Tea");
    const cocktailName = event.target[0].value;
    fetchCocktail(cocktailName);
}
function fetchCocktail(cocktailName) {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName, {
        methode: "GET"
    }).then(response => {
        return response.json();
    }).then(data => {
        clearSearch(false);
        const fixedGridDiv = document.createElement("div");
        fixedGridDiv.setAttribute("class", "fixed-grid has-3-cols");

        const gridDiv = document.createElement("div");
        gridDiv.setAttribute("class", "grid");

        fixedGridDiv.appendChild(gridDiv);

        const drinks = data["drinks"];
        for (let i = 0; i < drinks.length; i++) {
            console.log("Drink name is: " + drinks[i]["strDrink"]);
            console.log("Instructions : " + drinks[i]["strInstructions"]);
            console.log("Drink image is: " + drinks[i]["strDrinkThumb"]);
            console.log("***************************************");

            const drinkName = drinks[i]["strDrink"];
            const instructions = drinks[i]["strInstructions"];
            const image = drinks[i]["strDrinkThumb"];

            const cellDiv = document.createElement("div");
            cellDiv.setAttribute("class", "cell");

            const cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "card");

            const imageDiv = document.createElement("div");
            imageDiv.setAttribute("class", "card-image");

            const figure = document.createElement("figure");
            figure.setAttribute("class", "image is-square");

            const imageElement = document.createElement("img");
            imageElement.setAttribute("src", image);
            imageElement.setAttribute("alt", "some image here...");

            const cardContentDiv = document.createElement("div");
            cardContentDiv.setAttribute("class", "card-content");

            const mediaDiv = document.createElement("div");
            mediaDiv.setAttribute("class", "media");

            const mediaContentDiv = document.createElement("div");
            mediaContentDiv.setAttribute("class", "media-content");

            const titleP = document.createElement("p");
            titleP.setAttribute("class", "title is-4");
            titleP.textContent = drinkName;


            const contentDiv = document.createElement("div");
            contentDiv.setAttribute("class", "content");
            contentDiv.textContent = instructions;

            gridDiv.appendChild(cellDiv);
            cellDiv.appendChild(cardDiv);
            cardDiv.appendChild(imageDiv);
            cardDiv.appendChild(cardContentDiv);
            imageDiv.appendChild(figure);
            figure.appendChild(imageElement);
            cardContentDiv.appendChild(mediaDiv);
            cardContentDiv.appendChild(contentDiv);
            mediaDiv.appendChild(mediaContentDiv);
            mediaContentDiv.appendChild(titleP);

        }

        const resultsDiv = document.getElementById("results");
        resultsDiv.appendChild(fixedGridDiv);
    })
}

function clearSearch(clearInput) {
    const parentElement = document.getElementById("results");

    // While the parent has child elements, remove the first one
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    if (clearInput) {
        const drinkInput = document.getElementById("drinkInput");
        drinkInput.value = '';
    }

}
