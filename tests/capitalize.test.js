import { capitalize } from "../src/capitalize"

test("capitalize the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("World")).toBe("World")
})