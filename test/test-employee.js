// Require the employee from the lib folder
const Employee = require("../lib/employee");

// Test can begin employee instance
describe("Employee", () => {
    it("Begin the instance of employee", () => {
        const e = new Employee();
        // expect(new Employee(e)).toBe("object");
        expect(typeof(e)).toBe("object");
    });
    
// Test can set name via constructor args
    it("Can set a name with the constructor arguments", () => {
        const name = "Rocket";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

// Can set id via constructor args
    it("Will set an ID with the constructor arguments", () => {
        const idNumber = 522;
        const e = new Employee();
        expect(e.id).toBe(idNumber);
    });

// can set email via constructor argument
    it("Will set an email with the constructor arguments", () => {
        const emailCheck = "email@email.com";
        const e = new Employee("Rocket", 522, emailCheck);
        expect(e.emailCheck).toBe(emailCheck);
    });

// can set id via constructor function
describe("getId", () =>{
    it("Can get ID from the getID function", () => {
        const idNumber = 522;
        const e = new Employee("Rocket", idNumber);
        expect(e.getID()).toBe(idNumber);
    });
});

// can get email via constructor function
describe("getEmail", () => {
    it("Can get Email from the getEmail function", () => {
        const emailCheck = "email@email.com";
        const e = new Employee("Rocket", 522, emailCheck)
        expect(e.getEmail()).toBe(emailCheck);
    });
});

// role function should return employee
describe("getRole", () => {
    it("Can get the team member Role from the getRole function", () => {
        const roleCheck = "Employee";
        const e = new Employee("Rocket", 522, "email@email.com");
        expect(e.getRole()).toBe(roleCheck);
    });
});
})

