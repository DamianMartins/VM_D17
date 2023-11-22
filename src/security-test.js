//test5
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "src", "security-test.js");

const content = fs.readFileSync(filePath, "utf8");
const vulnerabilities = snyk.analyze(content);

if (vulnerabilities.length > 0) {
  console.log(`Encontradas vulnerabilidades en el archivo security-test.js`);
  vulnerabilities.forEach((vulnerability) => {
    console.log(`- ${vulnerability.description}`);
  });
}
