const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");

const Employees = [];

function addEmployees(){
 inquirer
 .prompt([
    {
        type: "list",
        name: "role",
        message: "What is the team member role on the Team?",
        choices: ["Manager", "Engineer", "Intern"]
    }, {
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
    }, 
 ])

.then((data) => {
     let datainfo = `<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
     <link rel="stylesheet" href="./style.css">
         <title>Document</title>
     </head>
     <body>
         <header class="container-fluid bg-danger">
             <h1 class="text-white text-center align-middle">My Team</h1>
         </header>
     
         <main class="container-fluid">
             <section class="row">
                <div class="col-12 d-flex justify-content-center">
                <div class="col-6 col-md-4 card column">
                    <div class="card-header bg-primary">
                        <h2 class="text-white">${data.name}</h2>
                        <h3 class="text-white">${data.getRole}</h3>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${data.id}</li>
                            <li class="list-group-item">${data.email}</li>
                            <li class="list-group-item"></li>
                        </ul>
                </div>
                </div>
             </section>
         </main>
     </body>
     </html>`
     
     .then (function(addEmployees()){
        let getInfo = " ";
        if (role === "Manager"){
            getInfo = "office number";
        } else if (role === "Engineer") {
            getInfo = "Github Username";
        }  else  {
           getInfo = "school";
           }
        inquirer.prompt([{
            message: `Enter your ${getInfo}`,
            name = "getInfo",
           },
        {
            type: "confirm",
            message: "Would you like to add more Team Members?",
            name: "moreEmployees"
        }
        ])}       
        .then(function Confirm() => {
                if "yes" = function newEmployees(){
                    if "no", writeTEamProfile();
                    console.log("Awesome Team Profile!");
                }
            
        }
    )

    writeTEamProfile{}
     fs.writeFile('data.html', datainfo, (err) =>
     err ? console.log(err) : console.log("Team Profile created."));
 });

