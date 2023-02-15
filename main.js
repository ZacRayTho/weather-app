//main div 
let main = document.getElementById("main");

//state object
let app = {
    data: {},
    city: undefined,
    conditions: undefined,
    temp: undefined,
    other: undefined,
    shown: false,
};

//function for page load
function init() {
    //create header
    const header = document.createElement("h1");
    header.textContent = "Weather App";
    main.append(header);

    //create input field
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    main.append(input);

    //create button
    const btn = document.createElement("button");
    btn.textContent = "Get Weather"
    btn.style.background = "turquoise"
    main.append(btn);

    //create container
    const display = document.createElement("div")
    display.setAttribute("class", "container")
    main.append(display)
}

//create the main organism that contains all the data
function makePage() {

    //clear container of previous searches
    contain.innerHTML = "";

    //create city row
    const city = document.createElement("div")
    city.setAttribute("class", "row")
    //create header
    const cityhead = document.createElement("h4");
    cityhead.textContent = "City";
    cityhead.style.background = "orange";
    city.appendChild(cityhead)
    //create another row for text because textcontent clears all children of city div
    const citytext = document.createElement("h6");
    citytext.textContent = app.city
    city.appendChild(citytext)
    contain.append(city)

    //create temp row
    const temp = document.createElement("div")
    temp.setAttribute("class", "row")
    //temp header
    const temphead = document.createElement("h4");
    temphead.textContent = "Temperature";
    temphead.style.background = "orange";
    temp.appendChild(temphead)
    //create another row for text because textcontent clears all children of city div
    const temptext = document.createElement("h6");
    temptext.textContent = app.temp
    temp.appendChild(temptext)
    contain.appendChild(temp)

    //create condition row
    const cond = document.createElement("div")
    cond.setAttribute("class", "row")
    //cond header
    const condhead = document.createElement("h4");
    condhead.textContent = "Condition";
    condhead.style.background = "orange";
    cond.appendChild(condhead)
    //create another row for text because textcontent clears all children of city div
    const condtext = document.createElement("h6");
    condtext.textContent = app.conditions;
    cond.appendChild(condtext)
    contain.appendChild(cond)

    const other = document.createElement("div")
    other.setAttribute("class", "row")
    //other header
    const otherhead = document.createElement("h4");
    otherhead.textContent = "Other Info";
    otherhead.style.background = "orange";
    other.appendChild(otherhead)
    //create another row for text because textcontent clears all children of city div
    const othertext = document.createElement("img");
    othertext.setAttribute("src", `https://openweathermap.org/img/wn/${app.other}@2x.png`)
    other.appendChild(othertext)
    contain.appendChild(other)
}

//make error page
function errorPage() {
    contain.innerHTML = ""


}

// self explanatory 
function apiCall(zip) {
    let options = {
        baseURL: "https://api.openweathermap.org/data/2.5",
        params: {
            zip: zip,
            // nat: "us", country code optional??
            appid: "0d1e898c01510df0c5e8eab9ad775a46",
        }
    }
    axios.get('/weather', options)
        .then(function (response) {
            console.log(response);
            app.city = response.data.name;
            app.conditions = response.data.weather[0].description;
            app.temp = Math.floor(response.data.main.temp * 9/5 - 459.67) + '℉';
            app.other = response.data.weather[0].icon;
            makePage();
        })
        .catch(function (error) {
            console.log(error);
            errorPage();
        })
}

init()
const input = document.querySelector("input");
const btn = document.querySelector("button");
const contain = document.querySelector(".container");
btn.addEventListener("click", () => {
    apiCall(input.value);
})

