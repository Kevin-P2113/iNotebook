const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

// secret which will be used to sign the JWT
const JWT_SECRET = "lwkjafld4@3kjfaoiweourowj2392i349u";

// ROUTE - 1: create a user using POST: "/api/auth/createuser". No login required

// Note: hashing the password and generating the JWT token are two different tasks.

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
    // 1. Checks if email is in a valid email format and name and password are of appropriate length.
    // if there are any errors (based on the parameters in the above array), return bad request and display errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // 2. If valid details then checks if a user with the same email already exists are not.
      // check if the user with this email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      // 3. creates a new secure salt + hash password for the user.
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);

      // 4. saves the user to the database with the new password.
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
      // 5. signs the data of the user (id) using the secret and then return the token created to the user.
      const authToken = jwt.sign(data, JWT_SECRET);

      // using ES6 syntax autos to authToken: authToken
      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500);
      res.send("some error has occured");
    }
  }
);

// ROUTE - 2: authenticate a user using POST: /api/auth/login. no login required
// giving user JWT token on successful login
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

// ROUTE - 3

router.post("/getuser", fetchuser, async (req, res) => {
  const user = await User.findById(req.user.id, "-password");
  if (!user) {
    return res
      .status(400)
      .json({ error: "an error has occured please login again" });
  }
  console.log(req.user.id);
  res.json(user);
});

module.exports = router;
