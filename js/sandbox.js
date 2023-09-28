//* global variables
let state = 0
let zipCode = "20314"
let temp = ""
let condition = ""
const apiKey = "9a522097e4ef3c0ac50fa6944a8b3d33"



//* runs the api
async function test_axios(){
    const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;
    const result = await axios.get(api_url);
    console.log(result.data.name);
    if (result) fillCity(result.data.name)
}
//* runs the api
let h1 = document.createElement("h1")
h1.innerHTML = "Weather App"
document.body.appendChild(h1)

//* container class div
let container = document.createElement("div")
document.body.appendChild(container)
container.id = "container"
container.className = "container"

let topDiv = document.createElement("div")
container.appendChild(topDiv)
topDiv.id = "topDiv"
//* container class div

//* top of the page


//* top of the page



//* input and button area
 let input = document.createElement("input")
 topDiv.appendChild(input)
 input.id = "input"
 input.placeholder = "input zip"
 
 let newButton = document.createElement("button");
 newButton.innerHTML = "get weather";
 topDiv.appendChild(newButton);
 newButton.id = "testBtn"

document.getElementById("testBtn").addEventListener('click', getZip)

function getZip(){
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

let city = document.createElement("p")
city.innerText = "City"
cityDiv.appendChild(city)
city.id = "city"

let cityName = document.createElement("p")
cityDiv.appendChild(cityName)
cityName.id = "cityName"
//* city area


function fillCity(city){
    cityName.innerText = city
}







































// Logan was here :)