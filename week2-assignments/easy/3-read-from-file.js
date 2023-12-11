const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File read successfully");
    console.log(data);
  }
});
