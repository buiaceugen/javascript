// Create Customer class as follows:
export default class Customer {
    getName() {
        return 'stackoverflow';
    }
}

// Import the class
// no need for .js extension in path cos it gets inferred automatically
import Customer from './path/to/Customer';
// OR
const Customer = require('./path/to/Customer')

// Use the class
var customer = new Customer();
var name = customer.getName();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default class Customer(){
    constructor(){
        this.name="Jhon";
        this.getName=function(){
            return this.name;
        };
    }
}

import { Customer } from "./file1";
var customer=new Customer();
