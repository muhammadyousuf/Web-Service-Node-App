const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

var app = express();
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile("server.log", log + "\n", err => {
    if (err) {
      console.log("unable to connect server");
    }
  });
  next();
});
app.use((req, res, next) => {
  res.render("maintaince.hbs");
});
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.get("/", (req, res, next) => {
  res.send("<h1>Hello Express</h1>");
});

app.get("/about", (req, res, next) => {
  res.render("about.hbs", {
    pageTile: "About Page"
  });
});

app.get("/express", (req, res, next) => {
  res.render("express.hbs", {
    firstName: "Muhammad",
    lastName: "Yousuf",
    likes: ["FaceBook Instagram Whatsapp"],
    pageTile: "Express Page"
  });
});

app.get("/bad", (req, res, next) => {
  res.send({
    errorMessage: "unable to access this route"
  });
});

app.listen(5000, () => {
  console.log("Server is running 5000 port");
});
