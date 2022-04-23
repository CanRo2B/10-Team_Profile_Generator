const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

// can set office number
describe("Set office number via constructor argument", () => {
    const officeNumber = 100;
    const e = new Manager("Rickey", 1, "ricky@dodge.com", officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
})

// can get office number

// role returns manager
