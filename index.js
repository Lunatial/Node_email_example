const next = require("next");
const express = require("express");
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
require("dotenv").load();

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
server.use(bodyParser.json());

app.prepare().then(() => {
  server.post("/", (req, res) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.APP_PASS
      }
    });

    var mailOptions = {
      from: process.env.MY_EMAIL,
      to: `${req.body.email}`,
      subject: `${req.body.subject}`,
      html: `${req.body.texteditor}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        res.status(500);
        res.json({ Error: error.message });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200);
        res.json({ Success: true });
      }
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
