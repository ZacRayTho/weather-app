//main div 
let main = document.getElementById("main");

//state object
let app = {
    data: {},
    city: undefined,
    conditions: undefined,
    temp: undefined,
    other: undefined,
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
    input.setAttribute("placeholder", "Zip code");
    main.append(input);

    //create button
    const btn = document.createElement("button");
    btn.textContent = "Get Weather"
    btn.style.background = "turquoise"
    main.append(btn);

    //create autoLocate button
    const btn2 = document.createElement("button");
    btn2.textContent = "GPS"
    btn2.style.background = "turquoise"
    main.append(btn2);

    //create container
    const display = document.createElement("div")
    display.setAttribute("class", "row border-0")

    main.append(display)
}

//create the main organism that contains all the data
function makePage() {

    //clear container of previous searches
    contain.innerHTML = "";


    //create city row
    const city = document.createElement("div")
    city.setAttribute("class", "col-md-3")
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
    temp.setAttribute("class", "col-md-3")
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
    cond.setAttribute("class", "col-md-3")
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
    other.setAttribute("class", "col-md-3")
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

    //clear container of previous searches
    contain.innerHTML = "";

    //create ERROR row
    const err = document.createElement("div")
    err.setAttribute("class", "row")
    //create header
    const errhead = document.createElement("h4");
    errhead.textContent = "ERROR 404";
    errhead.style.background = "orange";
    err.appendChild(errhead)
    //create another row for text because textcontent clears all children of city div
    const errtext = document.createElement("h6");
    errtext.textContent = "Make sure zip code is only 5 numbers and valid!"
    err.appendChild(errtext)
    contain.append(err)


}

// self explanatory 
function apiCall(zip,lat,lon) {
    let options = {
        baseURL: "https://api.openweathermap.org/data/2.5",
        params: {
            zip: zip,
            lat: lat,
            lon: lon,
            appid: "0d1e898c01510df0c5e8eab9ad775a46",
        }
    }
    axios.get('/weather', options)
        .then(function (response) {
            console.log(response);
            app.city = response.data.name;
            app.conditions = response.data.weather[0].description;
            app.temp = Math.floor(response.data.main.temp * 9 / 5 - 459.67) + '℉';
            app.other = response.data.weather[0].icon;
            makePage();
        })
        .catch(function (error) {
            console.log("FAILURE HERE " + error);
            errorPage();
        })
}

//using html geolocation to get position via latitude and longitude
function autoLocate() {
    //getCurrentPosition retrieves the longitude and latitude but passes it to the callback function it receives
    //also is an API and returns either success or error like axios (AHA?)
    //making the function inline and also an anonymous function with arrow syntax and getCurrentFunction is passing  its results to position variable
    //also GetCurrentPosition is asynchronous so have to wait for the '.catch' to call the weather API
    let lat;
    let long;
    navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        apiCall(undefined,lat,long)
        // console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0d1e898c01510df0c5e8eab9ad775a46`);
    })
}

init();
autoLocate();
const input = document.querySelector("input");
const btns = document.querySelectorAll("button");
const contain = document.querySelector(".row");
btns[0].addEventListener("click", () => {
    apiCall(input.value, undefined, undefined);
})
btns[1].addEventListener("click", () => {
    autoLocate();
})