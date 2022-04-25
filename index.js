const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");


const employees = [];

function init() {
    startDoc();
    addEmployees();
}

function addEmployees() {
 inquirer.prompt([
        {
        type: "input",
        name: "userName",
        message: "What is the team member name?",
        },  
        {
        type: "list",
        name: "role",
        message: "What is the team member role on the Team?",
        choices: ["Manager", "Engineer", "Intern"]
        }, 
        {
        type: "input",
        name: "id",
        message: "What is the team member ID?",
        }, 
        {
        type: "input",
        name: "email",
        message: "What is the team member email address?",
        }])
        .then(function({userName, role, id, email}) {
        let getInfo = "";
            if (role === "Manager") {
                getInfo = "office number";
            } 
            else if (role === "Engineer") {
                getInfo = "Github Username";
            }  else  {
                getInfo = "school";
            }  
        inquirer.prompt([
            {
            type: "input",
            name: "getInfo",
            message: `Enter your ${getInfo}`,
           }, {
            type: "list",
            name: "inquireMore",
            message: "Would you like to add more Team Members?",
            choices: ["Yes", "No"],
            }
        ])
    })  
    .then(function({getInfo, inquireMore}){
        let newEmployees;
        if(role === "Manger") {
            newEmployees = new Manager(userName, id, email, getInfo); 
        } else if (role === "Engineer") {
            newEmployees = new Engineer(userName, id, email, getInfo);
        } else {
            newEmployees = new Intern(userName, id, email, getInfo);
        }
        employees.push(newEmployees);
        addFile(newEmployees)
        .then(function(){
            if(inquireMore === "Yes") {
                addEmployees();
            } else {
                endDoc();
            }
        });
    });
};



function startDoc() {
    const dataInfo = 
     `<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
         <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
         <link rel="stylesheet" href="./style.css">
         <title>Team Profile Generator</title>
     </head>
     <body>
         <header class="container-fluid bg-danger">
             <h1 class="text-white text-center align-middle">My Team</h1>
         </header>
         <main>
            <section class="container">
                <div class="row">`;
    fs.writeFile("data.html", dataInfo, (err) =>
        err ? console.log(err) : console.log("Team Profile created."));
}

function getCards(employee) {
    return new Promise(function(resolve, reject){
        const userName = employee.getName();
        const role = employee.getRole();
        const id = employee.getID();
        const email = employee.getEmail();
        let data = "";
        if (role === "Engineer") {
            const githubName = employee.getgithubName();
            data =    `<div class="col-4 mt-4">
                 <div class="card h-100">
                     <div class="card-header">
                         <h3>${employee.name}</h3>
                         <h4>${employee.role}</h4>
                         <span class="material-symbols-outlined">
                         supervisor_account
                         </span>
                     </div>
                     <div class="card-body">
                         <p class="id">ID: ${employee.id}</p>
                         <p class="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                         <p class="githubName">GitHub: ${engineer.githubName}</p>
                     </div>
                 </div>
             </div>`
        } else if (role === "Intern") {
            const school = employee.getSchool();
            data = `<div class="col-4 mt-4">
                <div class="card h-100">
                     <div class="card-header">
                    <h3>${employee.name}</h3>
                         <h4>${employee.role}</h4>
                        <span class="material-symbols-outlined">
                         supervisor_account
                         </span>
                     </div>
                     <div class="card-body">
                         <p class="id">ID: ${employee.id}</p>
                         <p class="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                         <p class="school">School: ${intern.school}</p>
                     </div>
                 </div>
             </div>`
        } else {
            const officeNumber = employee.getOffice();
            data =  `<div class="col-4 mt-4">
                         <div class="card h-100">
                             <div class="card-header">
                                 <h3>${employee.name}</h3>
                                 <h4>${employee.role}</h4>
                                 <span class="material-symbols-outlined">
                                 supervisor_account
                                 </span>
                             </div>
                             <div class="card-body">
                                 <p class="id">ID: ${employee.id}</p>
                               <p class="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                              <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
                             </div>
                         </div>
                     </div>
                    `
        }
        console.log("Add Team Member Profile Card");
        fs.appendFile("data.html", dataInfo, (err) =>
        err ? console.log(err) : console.log("Added Cards"));

    });
}
    
function endDoc(){
    const end = `</div>
        </div>
        </body>
    </html>`
    fs.appendFile("data.html", dataInfo, (err) =>
    err ? console.log(err) : console.log("Team Profile created."));
}
 
init();

// Create Manager card
    //  const createManager = function(manager) {
    //      return  
    //         `<div class="col-4 mt-4">
    //             <div class="card h-100">
    //                 <div class="card-header">
    //                     <h3>${data.name}</h3>
    //                     <h4>${data.role}</h4>
    //                     <span class="material-symbols-outlined">
    //                     supervisor_account
    //                     </span>
    //                 </div>
    //                 <div class="card-body">
    //                     <p class="id">ID: ${data.id}</p>
    //                     <p class="email">Email: <a href="mailto:${data.email}">${data.email}</a></p>
    //                     <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
    //                 </div>
    //             </div>
    //         </div>
    //         `;
    //     }
    // Create Engineer card
    // const createEngineer = function(engineer) {
    //     return
    //     `<div class="col-4 mt-4">
    //     <div class="card h-100">
    //         <div class="card-header">
    //             <h3>${data.name}</h3>
    //             <h4>${data.role}</h4>
    //             <span class="material-symbols-outlined">
    //             supervisor_account
    //             </span>
    //         </div>
    //         <div class="card-body">
    //             <p class="id">ID: ${data.id}</p>
    //             <p class="email">Email: <a href="mailto:${data.email}">${data.email}</a></p>
    //             <p class="githubName">GitHub: ${engineer.githubName}</p>
    //         </div>
    //     </div>
    // </div>`

    // Create Intern card
    // const createIntern = function(intern) {
    //     return
    //     `<div class="col-4 mt-4">
    //     <div class="card h-100">
    //         <div class="card-header">
    //             <h3>${data.name}</h3>
    //             <h4>${data.role}</h4>
    //             <span class="material-symbols-outlined">
    //             supervisor_account
    //             </span>
    //         </div>
    //         <div class="card-body">
    //             <p class="id">ID: ${data.id}</p>
    //             <p class="email">Email: <a href="mailto:${data.email}">${data.email}</a></p>
    //             <p class="school">School: ${intern.school}</p>
    //         </div>
    //     </div>
    // </div>`
    //   
    //     .then(function Confirm() => {
    //             if "yes" = function newEmployees(){
    //                 if "no", writeTEamProfile();
    //                 console.log("Awesome Team Profile!");
    //             }
            
    //     }
    // )

    // writeTEamProfile{}
    

