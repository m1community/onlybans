"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get("/bans/:person", (req, res) => {
    res.status(403).send({
        username: `${req.params.person}`,
        banned: true,
    });
});
app.get("/bans", (_req, res) => {
    res.status(406).send(`<h1>406 UNACCEPTABLE HAX</h1><p>Use /bans/USERNAME, silly!</p>`);
});
app.get("/ban/:person", (_req, res) => {
    res.status(403).send(`<h1>403 Forbidden</h1><p>Only God can use this function.</p>`);
});
app.get("/", (_req, res) => {
    res.redirect("/bans");
});
app.listen(process.env.PORT || 3000);
//# sourceMappingURL=index.js.map