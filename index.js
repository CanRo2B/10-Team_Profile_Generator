const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const employees = [];

function init() {
    startDoc();
    addEmployees();
}

function addEmployees() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is the team member role on the Team?",
            choices: ["Manager", "Engineer", "Intern"],
        },  {
        type: "input",
        name: "username",
        message: "What is the team member name?",
        },  {
        type: "input",
        name: "id",
        message: "What is the team member ID?",
        }, {
        type: "input",
        name: "email",
        message: "What is the team member email address?",
        }])
        .then(function({role, username, id, email}) {
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
    .then(function({getInfo, inquireMore}) {
        let newEmployees;
        if(role === "Manager") {
            newEmployees = new Manager(username, id, email, getInfo); 
        } else if (role === "Engineer") {
            newEmployees = new Engineer(username, id, email, getInfo);
        } else {
            newEmployees = new Intern(username, id, email, getInfo);
        }
        employees.push(newEmployees);
        getCards(newEmployees)
        .then(function(){
            if(inquireMore === "Yes") {
                addEmployees();
            } else {
                endDoc();
            }
        });
    });
});
}




function startDoc() {
    const dataInfo = 
     `<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
         <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
         <link rel="stylesheet" href="./dist/style.css">
         <title>Team Profile Generator</title>
     </head>
     <body>
         <header class="container-fluid">
             <h1 class="text-white text-center align-items-center">My Team</h1>
         </header>
         <main>
            <section class="container">
                <div class="row">`;
    fs.writeFile("data.html", dataInfo, function (err) {
        if (err) {
            console.log(err);
        }
        // err ? console.log(err) : console.log("Team Profile created."));
    });
}

function getCards(employee) {
    return new Promise(function(resolve, reject) {
        const role = employee.getRole();
        const username = employee.getName();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = "";
        if (role === "Manager") {
        const officeNumber = employee.getOffice();
            data =  `<div class="col-4 mt-4">
                         <div class="card h-100">
                             <div class="card-header" id="man">
                                 <h3>${username}</h3>
                                 <h4>${role}</h4>
                                 <span class="material-symbols-outlined">
                                 supervisor_account
                                 </span>
                             </div>
                             <div class="card-body">
                                 <p class="id">ID: ${id}</p>
                               <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
                              <p class="officeNumber">Office Number: ${officeNumber}</p>
                             </div>
                         </div>
                     </div>`;
                    } ;
            if (role === "Engineer") {
            const githubName = employee.getgithubName();
            data = `<div class="col-4 mt-4">
                 <div class="card h-100">
                     <div class="card-header" id="eng">
                         <h3>${username}</h3>
                         <h4>${role}</h4>
                         <span class="material-symbols-outlined">engineering</span>
                     </div>
                     <div class="card-body">
                         <p class="id border">ID: ${id}</p>
                         <p class="email border">Email: <a href="mailto:${email}">${email}</a></p>
                         <p class="githubName border">GitHub: ${githubName}</p>
                     </div>
                 </div>
             </div>`;
             } 
        if (role === "Intern") {
            const school = employee.getSchool();
            data = `<div class="col-4 mt-4">
                <div class="card h-100">
                     <div class="card-header" id="int">
                    <h3>${username}</h3>
                         <h4>${role}</h4>
                         <span class="material-symbols-outlined">
                         school
                         </span>
                     </div>
                     <div class="card-body">
                         <p class="id border">ID: ${id}</p>
                         <p class="email border">Email: <a href="mailto:${email}">${email}</a></p>
                         <p class="school border">School: ${school}</p>
                     </div>
                 </div>
             </div>`;
        } ;
        // console.log("Add Team Member Profile Card");
        fs.appendFile("data.html", data, function (err) {
                if (err) {
                     reject(err);
                     return;
                };
                return resolve();
                
            });
    });
}

    
function endDoc(){
    const end = `</div>
            </section>
            </main>
        </body>
    </html>`;
    fs.appendFile("data.html", end, (err) =>
    err ? console.log(err) : console.log("Team Profile created."));
}
 
init();

