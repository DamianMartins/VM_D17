const fs = require("fs");
const path = require("path");

const filePath = "/app/src/security-test.js";  // Ruta completa al script

const content = fs.readFileSync(filePath, "utf8");
const vulnerabilities = snyk.analyze(content);

if (vulnerabilities.length > 0) {
  console.log(`Encontradas vulnerabilidades en el archivo security-test.js`);
  vulnerabilities.forEach((vulnerability) => {
    console.log(`- ${vulnerability.description}`);
  });
}

