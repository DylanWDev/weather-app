const api_url = "https://jsonplaceholder.typicode.com/posts/1";
function init() {
    console.log('hello sandbox');
    test_axios()
}

async function test_axios(){
    const result = await axios.get(api_url);
    console.log(result);
}