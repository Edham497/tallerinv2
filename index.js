const express = require("express");
const cors = require("cors");
const serveStatic = require("serve-static");
const path = require('path');
const history = require("connect-history-api-fallback");

const port = process.env.PORT || 3000;

const app = express(

)
app.use(cors());
app.use(history());
app.use(express.json());

app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.listen(port);
