const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Making engineer", () => {
        it("should return all information unique to the Engineer", () => {
        const person = new Engineer("Stuart", 84, "stuart@engineer.com", "stuartbowie84");
        
        expect(person.name).toEqual("Stuart");
        expect(person.id).toEqual(84);
        expect(person.email).toEqual("stuart@engineer.com");
        expect(person.github).toEqual("stuartbowie84");
    })
})
});