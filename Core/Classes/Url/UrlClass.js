class UrlClass {
    constructor(data) {
        this.parseUrl(data.url);
    }

    parseUrl(url) {
        let match = url.match(/^(([^:\/?#]+:)?\/\/((?:([^\/?#:]*):([^\/?#:]*)@)?([^\/?#:]*)(?::([^\/?#:]*))?))?([^?#]*)(\?[^#]*)?(#.*)?$/),
            response = {
                hash: match[10] || "",                   // #asd
                host: match[3] || "",                    // localhost:257
                hostname: match[6] || "",                // localhost
                href: match[0] || "",                    // http://username:password@localhost:257/deploy/?asd=asd#asd
                origin: match[1] || "",                  // http://username:password@localhost:257
                pathname: match[8] || (match[1] ? "/" : ""), // /deploy/
                port: match[7] || "",                    // 257
                protocol: match[2] || "",                // http:
                search: match[9] || "",                  // ?asd=asd
                username: match[4] || "",                // username
                password: match[5] || ""                 // password
            };
        if (response.protocol.length === 2) {
            response.protocol = "file:///" + response.protocol.toUpperCase();
            response.origin = response.protocol + "//" + response.host;
        }
        response.href = response.origin + response.pathname + response.search + response.hash;
        console.log(response);
        return response;
    }
}


let string = document.readyState;
if (string === "loading") {
    //The document is still loading.
} else if (string === "interactive") {
    //The document has finished loading. We can now access the DOM elements.
    //But sub-resources such as scripts, images, stylesheets and frames are still loading.
    let url = document.getElementById("url").innerHTML = location.href;
    new UrlClass({url: url});
} else if (string === "complete") {// The page is fully loaded.
    //The page is fully loaded.
}
