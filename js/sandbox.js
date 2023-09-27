//* global variables
let state = 0
let zipCode = "20314"
let temp = ""
let condition = ""



//* runs the api
async function test_axios(){
    const apiKey = "9a522097e4ef3c0ac50fa6944a8b3d33"
    const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;
    const result = await axios.get(api_url);
    console.log(result.data.name);
}
//* runs the api

//* top of the page

let topDiv = document.createElement("div")
document.body.appendChild(topDiv)

//* top of the page



let h1 = document.createElement("h1")
h1.innerHTML = "Weather App"
topDiv.appendChild(h1)



//* top of the page
 // Create a new div element
 let newDiv = document.createElement("div");
 document.body.appendChild(newDiv);
 
 let newP = document.createElement("input")
 newDiv.appendChild(newP)
 newP.id = "inputZip"
 
 let newButton = document.createElement("button");
 newButton.innerHTML = "get zip";
 newDiv.appendChild(newButton);
 newButton.id = "testBtn"




document.getElementById("testBtn").addEventListener('click', getZip)

function getZip(){
    let inputField = document.getElementById("inputZip")
    zipCode = inputField.value 
    test_axios();
}










































// Logan was here :)