import { calculator } from "../src/calculator";

test("calculator", () => {
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.add(1,-2)).toBe(-1);

    expect(calculator.subtract(3,4)).toBe(-1);
    expect(calculator.subtract(20,2)).toBe(18);

    expect(calculator.multiply(1,2)).toBe(2);
    expect(calculator.multiply(5,2)).toBe(10);

    expect(calculator.divide(6,2)).toBe(3);
    expect(calculator.divide(1,0)).toBe(Error);
} )