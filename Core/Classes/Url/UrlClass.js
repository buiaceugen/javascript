class UrlClass {

    /**
     *
     * @param url
     */
    constructor(url) {
        this.urlData = url;
    }

    /**
     *
     * @returns {{hostname: string, protocol: string, search: string, password: string, port: string, origin: string, host: string, href: string, hash: string, pathname: (string), username: string}}
     */
    get url() {
        return this.parseUrl();
    }

    /**
     *
     * @returns {{hostname: string, protocol: string, search: string, password: string, port: string, origin: string, host: string, href: string, hash: string, pathname: (string), username: string}}
     */
    parseUrl() {
        let match = this.urlData.match(/^(([^:\/?#]+:)?\/\/((?:([^\/?#:]*):([^\/?#:]*)@)?([^\/?#:]*)(?::([^\/?#:]*))?))?([^?#]*)(\?[^#]*)?(#.*)?$/),
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

        return response;
    }
}
