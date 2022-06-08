
const express = require("express");
const userModel = require("../models/UserModel");
const app = express();

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);

    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
    const users = await userModel.find({});

    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/user_delete", async (request, response) => {
    // const users = await userModel.find({});

    // try {
    //   response.send(users);
    // } catch (error) {
    //   response.status(500).send(error);
    // }

    userModel.findOne({
        _id: id
      }, function (err, user) {
        if (err) {
          return next(err);
        } else {
          req.user = user;
          next();
        }
      });
});


module.exports = app;
