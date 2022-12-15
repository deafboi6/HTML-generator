const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Making employee", () => {
    it("should return all information unique to the Employee role", () => {
        const person = new Employee("John", 2, "xx@test.com");
        
        expect(person.name).toEqual("John");
        expect(person.id).toEqual(2);
        expect(person.email).toEqual("xx@test.com");
    })
})
});
