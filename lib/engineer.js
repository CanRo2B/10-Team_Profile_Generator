const Employee = require("../lib/employee")

class Engineer extends Employee {
    constructor(userName, id, email, githubName) {
        super(userName, id, email);
        this.githubName = githubName;
    }

getgithubName(){
    return this.githubName;
}   

getRole() {
    return "Engineer";
}
}

module.exports = Engineer;