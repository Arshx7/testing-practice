import { caesarCipher } from "../src/caesarCipher";

test("cipher text", () => {
    expect(caesarCipher("xyz")).toMatch("abc");
    expect(caesarCipher("HeLLo")).toMatch("KhOOr");
    expect(caesarCipher("Hello, World!")).toMatch("Khoor, Zruog!");
})