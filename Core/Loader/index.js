import {Loader} from './Loader.js';

/**
 *
 * @constructor
 */
export function Index() {
    const scripts = {
        application: '../Core/Application.js',
        routes: '../Config/Routes/Routes.js'
    }
    let scriptPath = '';
    for (let key in scripts) {
        scriptPath = scripts[key];
        let path = {};
        Object.defineProperty(path, "script", {
            value: scriptPath,
            enumerable: false,
            configurable: false,
            writable: false
        });
        Object.getOwnPropertyDescriptor(path, "script");
        new Loader(path.script);
    }
}
