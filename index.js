const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const bodyParser = require("body-parser");
const port = process.env.PORT || `https://backend-deploy-production-ccc9.up.railway.app`;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(bodyParser.json());

 const DB='mongodb://AjinkyaJadhav:AjinkyaJadhav@ac-iu35ayn-shard-00-00.sc9ta1x.mongodb.net:27017,ac-iu35ayn-shard-00-01.sc9ta1x.mongodb.net:27017,ac-iu35ayn-shard-00-02.sc9ta1x.mongodb.net:27017/?ssl=true&replicaSet=atlas-75il8p-shard-0&authSource=admin&retryWrites=true&w=majority';
// const DB = "mongodb://127.0.0.1:27017/Login";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfully");
  })
  .catch(() => {
    console.log("connection failed !");
  });

// userSchema created

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

//model created
const User = new mongoose.model("NEWDATA", userSchema);

// routes

app.get("/",async(req,res)=>{
  try {
      const apicreated = await   User.find();
        res.send(apicreated);
        console.log(apicreated);
           
  } catch (error) {
      console.log(error);
  }
          

 });





app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {

    if (user) {
      res.send({ message: "user already resgister" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });

      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered" });
        }
      });
    }
  });
  
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successfully", user: user });
        } else {
          res.send({ message: "Password not match" });
        }
      } else {
        res.send({ message: "user not registered" });
      }
    });
  });


app.listen(port, () => {
  console.log("start port no rawaily start...");
});
