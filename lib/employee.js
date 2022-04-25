// const inquirer = require("inquirer");
// const fs = require("fs");

class Employee {
    constructor(username, id, email) {
        this.username = username;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.username;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}


module.exports = Employee;