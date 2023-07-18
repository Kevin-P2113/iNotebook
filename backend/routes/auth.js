const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "lwkjafld4@3kjfaoiweourowj2392i349u";

//create a user using POST: "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are any errors , return bad request and display errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // check if the user with this email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      // res.json(user);

      // using ES6 syntax autos to authToken: authToken
      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500);
      res.send("some error has occured");
    }
  }
);

// authenticate a user using POST: /api/auth/login. no login required

router.post(
  "/login",
  [
    body("email", "enter a valid email").isEmail(), // if email isn't even an email then we don't bother the server
    body("password", "password cannot be blank").exists(), // checks that password during login must not be blank
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "username/password invalid please try again" });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
          const payload = {
            user: {
              id: user.id,
            },
          };
          const authToken = jwt.sign(payload, JWT_SECRET);
          return res.status(200).json({ authToken });
        } else {
          return res
            .status(400)
            .json({ error: "username/password invalid please try again" });
        }
      });
    } catch (error) {
      res.status(500).send("some error has occured");
    }
  }
);

module.exports = router;
