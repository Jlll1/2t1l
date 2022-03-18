import { Test, Assert } from "./TestRunner";

export class ExampleTest {
    constructor() {

Test.case('pass', () => {
    Assert.equal(1 + 1, 2);
});

Test.case("Should fail", () => {
    Assert.equal(1 + 1, 3);
});

    }
}