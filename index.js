const inquirer = require("inquirer");
const fs = require("fs");


const promptUser = () => {
    return inquirer
 .prompt([
    {
        type: "input",
        name: "name",
        message: "What is the team member name?",
    }, {
        type: "input",
        name: "id",
        message: "What is the team member ID?",
    }, {
        type: "input",
        name: "email",
        message: "What is the team member email address?",
    }, {
        type: "list",
        name: "role",
        message: "What is the team member role on the Team?",
        choices: ["Manager", "Engineer", "Employee", "Intern"]
    }
 ])}

 