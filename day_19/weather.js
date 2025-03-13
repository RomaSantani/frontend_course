function searchCityName(event) {
    event.preventDefault();
    const cityName = event.target[0].value;
    findPlaces(cityName);
}

function findPlaces(cityName) {
    fetch("https://www.meteosource.com/api/v1/free/find_places?text=" + cityName + "&key=ax93rkk6yppasg2usuesylrfqf6n59du87gn5tz0", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        const placesForm = document.createElement("form");

        for (let i = 0; i < data.length; i++) {
            console.log("City name is: " + data[i]["name"]);
            console.log("Place id is: " + data[i]["place_id"]);
            console.log("Country is: " + data[i]["country"]);
            console.log("*****************************");

            const name = data[i]["name"];
            const placeId = data[i]["place_id"];
            const country = data[i]["country"];

            const placeDiv = document.createElement("div");
            placeDiv.setAttribute("class", "form-check");

            const inputElement = document.createElement("input");
            inputElement.setAttribute("class", "form-check-input");
            inputElement.setAttribute("type", "radio");
            inputElement.setAttribute("name", "placesRadio");
            inputElement.setAttribute("id", placeId);
            inputElement.setAttribute("value", placeId);

            const labelElement = document.createElement("label");
            labelElement.setAttribute("class", "form-check-label");
            labelElement.setAttribute("for", placeId);
            labelElement.textContent = name + "-" + placeId + "-" + country;

            placesForm.appendChild(placeDiv);

            placeDiv.appendChild(inputElement);
            placeDiv.appendChild(labelElement);

        }

        const getWeatherButton = document.createElement("input");
        getWeatherButton.setAttribute("type", "submit");
        getWeatherButton.setAttribute("class", "btn btn-primary");
        getWeatherButton.setAttribute("value", "GetWeather");

        placesForm.appendChild(getWeatherButton);

        const findPlacesDiv = document.getElementById("placesDiv");
        findPlacesDiv.appendChild(placesForm);

        placesForm.addEventListener("submit", getWeather);
    })
}

function getWeather(event) {
    event.preventDefault();
    for(let i=0;i<event.target.length;i++){
        const checked = event.target[i].checked;
        console.log(checked);

        if(checked){
            console.log("Selected value is:" + event.target[i].value);
            const placeId = event.target[i].value;
            fetchWeather(placeId);
        }
    }
}

function fetchWeather(placeId){
    fetch("https://www.meteosource.com/api/v1/free/point?place_id="+placeId+"&sections=all&timezone=UTC&language=en&units=metric&key=ax93rkk6yppasg2usuesylrfqf6n59du87gn5tz0",{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    }).then(response=>{
        return response.json();
    }).then(data=>{
        console.log("summary is: " + data["current"]["summary"]);
        console.log("temperature is: " + data["current"]["temperature"]);

        const summaryElement = document.createElement("h1");
        summaryElement.textContent = "Summary is: " + data["current"]["summary"];
        
        const tempElement = document.createElement("h1");
        tempElement.textContent = "Temperature is : " + data["current"]["temperature"];

        const results = document.getElementById("weatherResults");
        results.appendChild(summaryElement);
        results.appendChild(tempElement);
    })
}
