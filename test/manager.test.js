const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

// can set office number
describe("Set office number via constructor argument", () => {
    const officeNumber = 100;
    const e = new Manager("Rickey", 1, "ricky@dodge.com", officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
})

// can get office number 
describe("Can get an office number from getOffice()", () =>{
    const officeNumber = 100;
    const e = new Manager("Rickey", 1, "ricky@dodge.com", officeNumber);
    expect(e.getOffice()).toBe(officeNumber);
});

// role returns manager
describe("Can get Office Manager getRole function", () => {
    const manager = "Manager";
    const e = new Manager("Rickey", 1, "ricky@dodge.com", 100);
    expect(e.getRole()).toBe(manager);
});
