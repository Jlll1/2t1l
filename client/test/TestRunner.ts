import { JoiningRoomTest } from "./JoiningRoom.test";

export class Test {
    public static case(name: string, test: Function): void {
        try {
            console.log(`=== Running ${name}...`);
            test();
        } catch(err) {
            if (err instanceof AssertionError) {
                console.log(
                    `=== Test Failed! = ${name} =\n` +
                    `= ${err.message}\n` +
                    `===`
                    );
            } else {
                throw err;
            }
        }
    }
}

export class AssertionError {
    constructor(public message: string){}
}

export class Assert {
    public static equal(actual: any, expected: any): void {
        if (expected === actual) {
            return;
        }

        throw new AssertionError(`Expected value to be <<${expected}>>, but got <<${actual}>>.`)
    }
}

/* Register Test Classes */
new JoiningRoomTest();