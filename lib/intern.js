const Employee = require("../lib/employee")

class Intern extends Employee {
    constructor(userName, id, email, school) {
        super(userName, id, email);
        this.school = school;
    }

getSchool() {
    return this.school;
}

getRole() {
    return "Intern";
}
}

module.exports = Intern;
