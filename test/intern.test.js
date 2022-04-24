const Intern = require("../lib/intern");

// Can get school from function
describe("getSchool", () => {
    it("Can get the school name from getSchool function", () => {
        const school = "Purdue";
        const e = new Intern("Patrick", 22, "email@email.com", school);
        expect(e.getSchool()).toBe(school);
    });
})

// Can get the school name from the constructor argument
    it("Set school name from construstor argument", () => {
        const school = "Purdue";
        const e = new Intern("Patrick", 22, "email@email.com", school);
    });

// Role returns Intern
describe("getRole", () => {
    it("Can get title Intern from getRole function", () => {
            const intern = "Intern";
            const e = new Intern("Patrick", 22, "email@email.com", "Purdue");
            expect(e.getRole()).toBe(intern);
    });
});