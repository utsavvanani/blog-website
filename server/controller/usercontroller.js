var sinupdata = require('../models/usermodel');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


exports.secure = async function (req, res, next) {
    try {
        console.log(req.headers.token);
        let token = req.headers.token;
        if (!token) {
            throw new Error("token is not found");

        }
        var decoded = await jwt.verify(token, "niralihirani");

        console.log(decoded);

        let chekuser = await sinupdata.findById(decoded.id);

        if (!chekuser) {
            throw new Error("user is not found");
        }

        req.userId = decoded.id;
        req.body.user = decoded.id;
        next();
    } catch (error) {
        res.status(404).json({
            status: "fail",
            meassage: error.meassage

        })
    }
}


exports.signupcreate = async function (req, res, next) {
    try {
        if (!req.body.fristname || !req.body.lastname || !req.body.email || !req.body.password) {
            throw new Error("please enter all data");
        }

        req.body.password = await bcrypt.hash(req.body.password, 10);
        let data = await sinupdata.create(req.body);

        let token = jwt.sign({ id: data._id }, "niralihirani");

        res.status(201).json({
            status: "success",
            meassage: "signupdata created successfully",
            data: data,
            token
        })
        console.log(data);
    } catch (error) {
        res.status(404).json({
            status: "fail",
            meassage: error.meassage,
        })
    }
}


exports.Login = async function(req, res) {
    try {
      if (!req.body.password || !req.body.email) {
        throw new Error("please enter all data");
      }
      let user = await sinupdata.findOne({ email: req.body.email });
      console.log(user);
      if (!user) {
        throw new Error("user not defined");
      }
   
      try {
        let checkpass = await bcrypt.compare(req.body.password, user.password)
        console.log(checkpass);
      } catch (error) {
        console.log(error);
      }
      
      let token = jwt.sign({ id: user._id }, "niralihirani");
      res.status(200).json({
        status: "success",
        message: "login successful",
        data: user,
        token
      });
      console.log(user);
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message,
      });
    }
  }
