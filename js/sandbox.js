//* global variables
let state = 0
let zipCode = ""
let temp = ""
let condition = ""
const apiKey = "9a522097e4ef3c0ac50fa6944a8b3d33"



//* runs the api

//* runs the api



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
topDiv.classList = "d-flex justify-content-center"



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
    test_axios().then(console.log('got city'));

    
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

function fillCity(city){
    cityName.innerText = city
}
//* city area




//* temperature area
let tempDiv = document.createElement("div");
infoDiv.appendChild(tempDiv);
tempDiv.id = "tempDiv";
tempDiv.classList = "d-block border border-dark border-3 mt-3";

let tempMain = document.createElement("h5");
tempMain.innerHTML = "temperature";
tempDiv.appendChild(tempMain);
tempMain.id = "tempMain"
tempMain.classList = "d-flex justify-content-center mb-0 border-dark bg-info"

//*row container
let tempContainDiv = document.createElement("div");
infoDiv.appendChild(tempContainDiv);
tempContainDiv.id = "TempContainDiv";
tempContainDiv.classList = "d-flex justify-content-between border border-dark border-3 border-top-0"; // Use justify-content-between for a row layout
//*row container

let tempK = document.createElement("div");
tempContainDiv.appendChild(tempK);
tempK.id = "tempK";
tempK.innerHTML = "hi";
tempK.classList = "col-4 d-flex justify-content-center mb-0 align-items-center";

let tempF = document.createElement("div");
tempContainDiv.appendChild(tempF);
tempF.id = "tempF";
tempF.innerHTML = "hi";
tempF.classList = "col-4 d-flex justify-content-center mb-0 align-items-center";

let tempC = document.createElement("div");
tempContainDiv.appendChild(tempC);
tempC.id = "tempC";
tempC.innerHTML = "hi";
tempC.classList = "col-4 d-flex justify-content-center mb-0 align-items-center";


//* temperature area

async function test_axios() {
    try {
        const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;
        const result = await axios.get(api_url);
        console.log(result.data.main.temp)
        console.log(result.data.name);
        if (result) {
            fillCity(result.data.name);
        }

        function fillTemp(temp){
            tempK = result
        }
    } catch (error) {
        alert("zip code not found", error);
        // You can display an error message to the user here if needed
    }
}






































// Logan was here :)