function searchCity(event){
    event.preventDefault();
    const cityName = event.target[0].value;
    searchCityName(cityName);
}

function searchCityName(cityName){
    fetch("https://www.meteosource.com/api/v1/free/find_places?text=" + cityName + "&key=ax93rkk6yppasg2usuesylrfqf6n59du87gn5tz0",{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    }).then(response=>{
        return response.json();
    }).then(data=>{
        const cityForm = document.createElement("form");

        for(let i=0;i<data.length;i++){
            console.log("Name is: " + data[i]["name"]);
            console.log("Place_id is: " + data[i]["place_id"]);
            console.log("Country is: " + data[i]["country"]);
            console.log("Timezone is: " + data[i]["timezone"]);
            console.log("---------------------------");

            const name = data[i]["name"];
            const place = data[i]["place_id"];
            const country = data[i]["country"];
            const timezone = data[i]["timezone"];

            const formCheckDiv = document.createElement("div");
            formCheckDiv.setAttribute("class","form-check");

            const cityInput = document.createElement("input");
            cityInput.setAttribute("type","radio");
            cityInput.setAttribute("id", i);
            cityInput.setAttribute("name", "city-name-radios");
            cityInput.setAttribute("value", place);
            cityInput.setAttribute("class", "form-check-input");

            const cityLabel = document.createElement("label");
            cityLabel.setAttribute("for", i);
            cityLabel.setAttribute("class", "form-check-label city-label");
            cityLabel.textContent = name + "-" + place ;

            formCheckDiv.appendChild(cityInput);
            formCheckDiv.appendChild(cityLabel);

            cityForm.appendChild(formCheckDiv);

        }

        const getWeatherButton = document.createElement("input");
        getWeatherButton.setAttribute("type","submit");
        getWeatherButton.setAttribute("class","btn btn-primary btn-margin");
        getWeatherButton.setAttribute("value","Get weather");

        cityForm.appendChild(getWeatherButton);

        const weatherDiv = document.getElementById("weatherDiv");
        weatherDiv.appendChild(cityForm);

        cityForm.addEventListener("submit", getWeather);
    })
}

function getWeather(event){
    event.preventDefault();
    console.log("inside get weather");

    const targetValues = event.target;

    for(let i=0; i<targetValues.length;i++){
        console.log(targetValues[i]["checked"]);
        console.log(targetValues[i]["value"]);

        const checked= targetValues[i]["checked"];
        const place_id = targetValues[i]["value"];

        if(checked){
            getWeatherData(place_id);
        }
    }
}

function getWeatherData(place_id){
    fetch("https://www.meteosource.com/api/v1/free/point?place_id="+place_id+"&sections=all&timezone=UTC&language=en&units=metric&key=ax93rkk6yppasg2usuesylrfqf6n59du87gn5tz0" , {
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    }).then(response=>{
        return response.json();
    }).then(data=>{
        console.log("Summary is: " + data["current"]["summary"]);
        console.log("Temperature is: " + data["current"]["temperature"]);
    })
}

    