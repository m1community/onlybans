const express = require("express");

const app = express();

app.get("/bans/:person", (req, res) => {
  res.sendStatus(403).send(`${req.params.person} has been banned!`);
});

app.get("/ban", (req, res) => {
  res.body = 'Nope';
  res.sendStatus(403);
});

app.listen(3000);
