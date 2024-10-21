import { reverse } from "../src/reverseString"

test("reverse the string", () => {
    expect(reverse("hello")).toBe("olleh");
    expect(reverse("hello world")).toBe("dlrow olleh");
})