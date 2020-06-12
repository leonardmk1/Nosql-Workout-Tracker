const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models/workout.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// db mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds131687.mlab.com:31687/heroku_lrmzj00b", {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(function(){
    return console.log("connected to mongo")
},function(err){
    console.log(err)
})

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
