const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Making intern", () => {
        it("should return all information unique to the Intern", () => {
        const person = new Intern("Nemo", 7, "nemo@intern.com", "edx");
        
        expect(person.name).toEqual("Nemo");
        expect(person.id).toEqual(7);
        expect(person.email).toEqual("nemo@intern.com");
        expect(person.school).toEqual("edx");
    })
})
});