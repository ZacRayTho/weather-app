## Questions
- How do we make sure the input only contains integers and can only contain 5 characters? When should we clear out the input or should we?
- What endpoint are we using from the API? Are there query parameters to send over? Where do I put the API Key?
- What happens when we enter new information for the second time? 
- When I click the button does it always automatically hide the bottom pane?
- HTML/CSS
- Conditional rendering
- When you first load page, the only thing you see is the input and the button
- After submission of a zip code you will see the rest.

## Atoms
- Input  
- submit button
- info we get back from api ??


## Organism
- city box/div
- temp div
- condition div
- other info div
- the whole area containing all the above organisms (that hides or shows)??


## Objectives
### as user i want to be able to input my zip code and get back data related to the weather in my area
- Single div for the whole application
- document.createElement 
- document.appendChild
- Use zip code input to fetch data from Open Weather Map API
- Axios / onClick or onSubmit
- Handle successful or unsuccessful attempts to the API
- If the request is successful, display the following in a 'mobile app' format:
- City name
- Current weather conditions
- Current temperature in Kelvin, Fahrenheit, and Celsius
- A unique image, decided by the current temperature (The API has icons built-in, be sure to read the docs)
- If the request is unsuccessful, display a specific error message such as "Invalid Zip Code" or anything else that might come back from the API.
- Handle multiple attempts to enter a zip code
- Look good on desktop and mobile using Bootstrap


## Variables
STATE
currentWeather (obj)
- City
- Conditions
- Temperature - {} (k,f,c)
- Image / icon  
zipCode that got passed in?  
showConditions: boolean  
errorMessage: ‘’   
## Functions
init()  
convertTemperature()  
buildHTML() elements  
- Show city, populate with state data currentWeather.city  
- Show temperature
- Change the src of the image tag to the currentWeather.image
- Populate with api data  

changeHTML()  
getData - call the api  
- Uses axios to call some endpoint ?
- .then for success()
- ---updateState()
- .then for state updated
- ---buildHTML()
- .catch for failure()
- ---handleError()


handleError()  
## Procedures
CREATE GETDATA FUNCTION

INIT
Add a zip code input   
Add a button  
Add the title of the page  
Add placeholders elements for all the organisms (Temp, City, Conditions)  
-         Hide these until submit is pressed
Bind event handler to the button - getData()  

## START
INIT  
on buttonPress -validate input   
getData()  -this calls the api  
.then
Build the HTML    
Fill the HTML with the Data   
(set state to appropriate handle data )  
.catch   
handleError()  





