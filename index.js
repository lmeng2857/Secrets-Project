//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var passwordReal = "ILoveProgramming";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  //res.send(req.body["password"]);
  if (req.body["password"] == passwordReal) {
    res.sendFile(_dirname + "/public/secret.html");
  } else {
    res.sendFile(_dirname + "/public/index.html");
    // res.redirect("/");
  }
  //passwordCheck();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

// function passwordCheck() {
//   if (req.body["password"] == passwordReal) {
//     res.sendFile(_dirname + "/public/secret.html");
//   } else {
//     res.sendFile(_dirname + "/public/index.html");
//   }
// }
