const apiKey = "9a522097e4ef3c0ac50fa6944a8b3d33"
const zipCode = "40513"
const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;
function init() {
    console.log('hello sandbox');
    test_axios()
}

async function test_axios(){
    const result = await axios.get(api_url);
    console.log(result);
}

 // Create a new div element
 let newDiv = document.createElement("div");
 document.body.appendChild(newDiv);

let newButton = document.createElement("button");
newButton.innerHTML = "hi";
newDiv.appendChild(newButton);

newButton.id = "testBtn"

// document.getElementById("testBtn").addEventListener('click', )










































// Logan was here :)