Application.getUrl();
function init() {
    Application.loadJSON('Config/Routes/index.json',function(response) {
        // Parse JSON string into object
        let actual_JSON = JSON.parse(response);
        console.log(actual_JSON);
    });
}
init();
