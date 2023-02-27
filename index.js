const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const { num1, num2, operation } = req.body;

  let result;

  switch (operation) {
    case "add":
      result = Number(num1) + Number(num2);
      break;
    case "subt":
      result = Number(num1) - Number(num2);
      break;
    case "divide":
      result = Number(num1) / Number(num2);
      break;
    case "mult":
      result = Number(num1) * Number(num2);
      break;
    default:
      break;
  }

  res.send(`O resultado dessa operação é: ${result}`);
});

app.listen(PORT, () => {
  console.log(`App live on https://localhost:${PORT}`);
});
