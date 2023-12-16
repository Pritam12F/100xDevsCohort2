const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  const data1 = data.replace(/\s+/g, " ").trim();
  fs.writeFile("output.txt", data1, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File cleaned successfully");
    }
  });
});
