const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

// can set office number from function  
describe("getOffice", () => {
    it("Can get an office number from getOffice()", () =>{
        const officeNumber = 100;
        const e = new Manager("Rickey", 1, "email@email.com", officeNumber);
        expect(e.getOffice()).toBe(officeNumber);
    });
});
    // can get office number from constructor argument
    it("Set office number via constructor argument", () => {
        const officeNumber = 100;
        const e = new Manager("Rickey", 1, "email@email.com", officeNumber);
        expect(e.officeNumber).toBe(officeNumber);
    });

// role returns manager
describe("getRole", () => {
    it("Can get Office Manager getRole function", () => {
        const manager = "Manager";
        const e = new Manager("Rickey", 1, "email@email.com", 100);
        expect(e.getRole()).toBe(manager);
    });
});