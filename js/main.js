//* global variables
let state = 0
let zipCode = ""
let temp = ""
let condition = ""
const apiKey = "9a522097e4ef3c0ac50fa6944a8b3d33"



//* top of the page
let h1 = document.createElement("h1")
h1.innerHTML = "Weather App"
document.body.appendChild(h1)
h1.classList = "d-flex justify-content-center"
//* top of the page



//* container class div
let container = document.createElement("div")
document.body.appendChild(container)
container.id = "container"
container.className = "container"
//* container class div


let topDiv = document.createElement("div")
container.appendChild(topDiv)
topDiv.id = "topDiv"
topDiv.classList = "mb-3 d-flex justify-content-center"



//* input and button area
 let input = document.createElement("input")
 topDiv.appendChild(input)
 input.id = "input"
 input.placeholder = "input zip"
 
 let newButton = document.createElement("button");
 newButton.innerHTML = "get weather";
 topDiv.appendChild(newButton);
 newButton.id = "testBtn"

document.getElementById("testBtn").addEventListener('click', function(){
    getWeather()
})

async function getWeather(){
    let inputField = document.getElementById("input")
    zipCode = inputField.value 
    init().then(console.log('got city'));

    
}
//* input and button area



//* information area

//* info container
let infoDiv = document.createElement("div")
container.appendChild(infoDiv)
infoDiv.id = "infoDiv"
//* info container


//* city area
let cityDiv = document.createElement("div")
infoDiv.appendChild(cityDiv)
cityDiv.id = "cityDiv"
cityDiv.classList = "d-block border border-dark border-3"

let city = document.createElement("h6")
city.innerText = "City"
cityDiv.appendChild(city)
city.id = "city"
city.classList = "d-flex justify-content-center mb-0 border-bottom border-dark bg-info"


let cityName = document.createElement("p")
cityDiv.appendChild(cityName)
cityName.id = "cityName"
cityName.classList = "d-flex justify-content-center mb-0 align-items-center"
//* city area




//* temperature area
let tempDiv = document.createElement("div");
infoDiv.appendChild(tempDiv);
tempDiv.id = "tempDiv";
tempDiv.classList = "d-block border border-dark border-3 mt-3";

let tempMain = document.createElement("h6");
tempMain.innerHTML = "Temperature";
tempDiv.appendChild(tempMain);
tempMain.id = "tempMain"
tempMain.classList = "d-flex justify-content-center border border-0 mb-0 border-dark bg-info"

//*row container
let tempContainDiv = document.createElement("div");
infoDiv.appendChild(tempContainDiv);
tempContainDiv.id = "TempContainDiv";
tempContainDiv.classList = "mb-3 d-flex justify-content-between border border-dark border-3 border-top-0";
//*row container


let tempK = document.createElement("div");
tempContainDiv.appendChild(tempK);
tempK.id = "tempK";
tempK.innerHTML = "";
tempK.classList = "col-4 d-flex justify-content-center mb-0 align-items-center";

let tempF = document.createElement("div");
tempContainDiv.appendChild(tempF);
tempF.id = "tempF";
tempF.innerHTML = "";
tempF.classList = "col-4 d-flex justify-content-center mb-0 align-items-center border border-black border-3 border-top-0 border-bottom-0 border-left border-right";

let tempC = document.createElement("div");
tempContainDiv.appendChild(tempC);
tempC.id = "tempC";
tempC.innerHTML = "";
tempC.classList = "col-4 d-flex justify-content-center mb-0 align-items-center";
//* temperature area


//* condition
let conditionDiv = document.createElement("div")
infoDiv.appendChild(conditionDiv)
conditionDiv.id = "conditionDiv"
conditionDiv.classList = "d-block border border-dark border-3"

let conditionName = document.createElement("h6")
conditionName.innerText = "Condition"
conditionDiv.appendChild(conditionName)
conditionName.id = "conditionName"
conditionName.classList = "d-flex justify-content-center mb-0 border-bottom border-dark bg-info"


let conditionFill = document.createElement("p")
conditionDiv.appendChild(conditionFill)
conditionFill.id = "conditionFill"
conditionFill.classList = "d-flex justify-content-center mb-0 align-items-center"
//* condition



//* image
let otherDiv = document.createElement("div");
otherDiv.id = "otherDiv";
otherDiv.classList = "mt-3 d-block border border-dark border-3";
infoDiv.appendChild(otherDiv);

let otherName = document.createElement("h6");
otherName.innerText = "otherName";
otherName.id = "otherName"; // Use a unique ID
otherName.classList = "d-flex justify-content-center mb-0 border-bottom border-dark bg-info";
otherDiv.appendChild(otherName);

let otherFill = document.createElement("img");
otherFill.id = "otherFill";
otherFill.classList = "d-block mx-auto";
otherDiv.appendChild(otherFill);
//* image




//* main function to run api data
async function init() {
    try {
        const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;
        const result = await axios.get(api_url);
        console.log(result.data)
        console.log(result.data.name);
        if (result) {
            fillCity(result.data.name);
        }

        //* function to populate the city
        function fillCity(city){
            cityName.innerText = city
        }

        //* function to populate the temp
        function fillTemp(){
            console.log(Math.round(result.data.main.temp) )
            tempK.textContent = Math.round(result.data.main.temp) + "K"
            tempF.textContent = Math.round((result.data.main.temp - 273.15) * 9/5 +32) + "F"
            tempC.textContent = Math.round(result.data.main.temp - 273.15) + "C"
        }
        fillTemp()

        function fillCondition(){
            console.log(result.data.weather[0].main)
            conditionFill.textContent = result.data.weather[0].main
        }
        fillCondition()
        
        //* function to populate other info
        function fillIcon(){
            console.log(result.data.weather[0].icon)
            // otherFill.src = result.data.weather[0].icon
            otherFill.src = `https://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`
        }
        fillIcon()
        
        
    } catch (error) {
        alert("zip code not found", error);
        // You can display an error message to the user here if needed
    }
}
// Logan was here :)