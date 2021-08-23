import { adder, subtract, multiply, power } from ".";

describe("Function Test", () => {
    test("Function : Adder", () => {
        const result = adder(3, 4);
        expect(result).toBe(7);
    });

    test("Function : Subtract", () => {
        const result = subtract(4, 3);
        expect(result).toBe(1);
    });

    test("Function : multiply", () => {
        const result = multiply(3, 4);
        expect(result).toBe(12);
    });

    test("Function : power", () => {
        const result = power(3, 3);
        expect(27).toBe(27);
    });
});
