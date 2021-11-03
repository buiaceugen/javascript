/**
 *
 * @type {{}|{}}
 */
var Application = Application || {};

/**
 *
 * @returns {{hostname: string, protocol: string, search: string, password: string, port: string, origin: string, host: string, href: string, hash: string, pathname: string, username: string}}
 */
Application.getUrl = function () {
    let string = document.readyState;
    if (string === "loading") {
        //The document is still loading.
    } else if (string === "interactive") {
        //The document has finished loading. We can now access the DOM elements.
        //But sub-resources such as scripts, images, stylesheets and frames are still loading.
        let url = document.getElementById("url").innerHTML = location.href;
        const getUrl = new UrlClass(url);
        return getUrl.url;
    } else if (string === "complete") {// The page is fully loaded.
        //The page is fully loaded.
    }
}

/**
 *
 * @param file
 * @param callback
 */
Application.loadJSON = function(file, callback) {
    let obj = new XMLHttpRequest();
    obj.overrideMimeType("application/json");
    obj.open('GET', file, true); // Replace 'my_data' with the path to your file
    obj.onreadystatechange = function () {
        if (obj.readyState === 4 && obj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(obj.responseText);
        }
    };
    obj.send(null);
}

