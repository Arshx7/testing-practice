export function caesarCipher(string) {
    let cipher = "";

    for (let i = 0; i < string.length; i++) {
        if(string[i].match(/[a-z]/)) {
            cipher += String.fromCharCode((string[i].charCodeAt(0) - 97 + 3) % 26 + 97);
        } else if(string[i].match(/[A-Z]/)) {
            cipher += String.fromCharCode((string[i].charCodeAt(0) - 65 + 3) % 26 + 65);
        } else {
            cipher += string[i];
        }
    }
    return cipher;

    
}