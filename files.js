// const userName = "Max";

// console.log(`Hi ${userName}!`);

const fs = require("fs");

fs.readFile("user-data.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

fs.writeFile("user-data.txt", "username=Matt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
