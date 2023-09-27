let state = 0
const apiKey = "9a522097e4ef3c0ac50fa6944a8b3d33"
let zipCode = "20314"
let temp = ""
let condition = ""



console.log("this runs");

async function test_axios(){
    const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;
    const result = await axios.get(api_url);
    console.log(result.data.name);

}

 // Create a new div element
 let newDiv = document.createElement("div");
 document.body.appendChild(newDiv);
 
 let newButton = document.createElement("button");
 newButton.innerHTML = "get zip";
 newDiv.appendChild(newButton);
 newButton.id = "testBtn"


let newP = document.createElement("input")
newDiv.appendChild(newP)
newP.id = "inputZip"


document.getElementById("testBtn").addEventListener('click', getZip)

function getZip(){
    let inputField = document.getElementById("inputZip")
    zipCode = inputField.value 
    // console.log(inputField.value)
    test_axios();
}










































// Logan was here :)