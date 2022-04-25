const Employee = require("../lib/employee")

class Manager extends Employee {
    constructor(userName, id, email, officeNumber) {
        super(userName, id, email);
        this.officeNumber = officeNumber;
    }
    
getOffice(){
    return this.officeNumber;
}

getRole(){
    return "Manager";
}
}

module.exports = Manager;

