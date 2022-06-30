const fs = require("fs");
const { Z_FIXED } = require("zlib");

const file = fs.writeFileSync("blog1.txt", "Hallo World");
const file2 = fs.readFileSync("blog1.txt");

const file3 = fs.writeFileSync("blog1.txt", "Huhu");
const file4 = fs.writeFileSync("blog2.txt", "jaou");
const file5 = fs.mkdir("./assets", () => { });

const file6 = fs.writeFileSync("delete.txt", "year");
const file7 = fs.writeFileSync("Hello.txt", "Hello");
const file8 = fs.rename("Hello.txt", "HelloWorld.txt", () => { });

console.log(file);
console.log(file2);

