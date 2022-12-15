const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Making manager", () => {
        it("should return all information unique to the Manager", () => {
        const person = new Manager("Tykeem", 12, "tykeem@manager.com", "205C");
        
        expect(person.name).toEqual("Tykeem");
        expect(person.id).toEqual(12);
        expect(person.email).toEqual("tykeem@manager.com");
        expect(person.officeNumber).toEqual("205C");
    })
})
});