const Engineer = require("../lib/engineer");

// Can get github username from function
describe("getgithubName", () => {
    it("Can get the Github Username from function", () => {
        const githubName = "CanBe";
        const e = new Engineer("Payton", 5, "email@email.com", githubName);
        expect(e.getgithubName()).toBe(githubName);
    });
});

// Can get github username from constructor argument
    it("Set Github Username via constructor argument", () => {
        const githubName = "CanBe";
        const e = new Engineer("Payton", 5, "email@email.com", githubName);
        expect(e.githubName).toBe(githubName);
    });

    describe("getRole", () => {
        it("Can get title, Engineer, from getRole function", () => {
                const engineer = "Engineer";
                const e = new Engineer("Payton", 5, "email@email.com", "CanBe");
                expect(e.getRole()).toBe(engineer);
        });
    });