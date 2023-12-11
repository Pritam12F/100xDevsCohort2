const fs = require("fs");

fs.writeFile("sample.txt", "copyrighted by pritam", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File written successfully");
  }
});
