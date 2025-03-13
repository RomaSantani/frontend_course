function searchCountry(event) {
    event.preventDefault();
    console.log("Country");
    const countryName = event.target[0].value;
    fetchCountryName(countryName);
}

function fetchCountryName(countryName) {
    fetch("https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=" + countryName,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response => {
        return response.json();
    }).then(data => {
        clearSearch();
        const teams = data["teams"];
        for (let i = 0; i < teams.length; i++) {
            console.log("Team is: " + teams[i]["strTeam"]);
            console.log("Description is: " + teams[i]["strDescriptionEN"]);
            console.log("Logo is: " + teams[i]["strLogo"]);
            console.log("Instagram link is: " + teams[i]["strInstagram"]);
            console.log("Twitter link is: " + teams[i]["strTwitter"]);
            console.log("Facebook link is: " + teams[i]["strFacebook"]);
            console.log("--------------------------");

            const teamName = teams[i]["strTeam"];
            const description = teams[i]["strDescriptionEN"];
            const logo = teams[i]["strLogo"];
            const instaLink = teams[i]["strInstagram"];
            const twitterLink = teams[i]["strTwitter"];
            const facebookLink = teams[i]["strFacebook"];

            const cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "card");
            cardDiv.setAttribute("style", "width: 18rem;");

            const image = document.createElement("img");
            image.setAttribute("class", "card-img-top");
            image.setAttribute("src", logo);
            image.setAttribute("alt", "some image here....");

            const cardBodyDiv = document.createElement("div");
            cardBodyDiv.setAttribute("class", "card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.setAttribute("class", "card-title");
            cardTitle.textContent = teamName;

            const cardDescription = document.createElement("p");
            cardDescription.setAttribute("class", "card-text");
            cardDescription.textContent = description;

            const facebookIcon = document.createElement("a");
            facebookIcon.setAttribute("class", "bi bi-facebook icon-size");
            facebookIcon.setAttribute("href", "https://" + facebookLink);
            facebookIcon.setAttribute("target", "_blank");

            const twitterIcon = document.createElement("a");
            twitterIcon.setAttribute("class", "bi bi-twitter icon-size icon-margin");
            twitterIcon.setAttribute("href", "https://" + twitterLink);
            twitterIcon.setAttribute("target", "_blank");

            const instagramIcon = document.createElement("a");
            instagramIcon.setAttribute("class", "bi bi-instagram icon-size icon-margin");
            instagramIcon.setAttribute("href", "https://" + instaLink);
            instagramIcon.setAttribute("target", "_blank");

            cardBodyDiv.appendChild(cardTitle);
            cardBodyDiv.appendChild(cardDescription);
            cardBodyDiv.appendChild(facebookIcon);
            cardBodyDiv.appendChild(twitterIcon);
            cardBodyDiv.appendChild(instagramIcon);

            cardDiv.appendChild(image);
            cardDiv.appendChild(cardBodyDiv);

            const sportsTeamDiv = document.getElementById("sportsTeam");
            sportsTeamDiv.appendChild(cardDiv);

        }
    })
}

function clearSearch() {
    const parentElement = document.getElementById("sportsTeam");

    // While the parent has child elements, remove the first one
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }

}