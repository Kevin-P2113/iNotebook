const jwt = require("jsonwebtoken");
const JWT_SECRET = "lwkjafld4@3kjfaoiweourowj2392i349u";

const fetchuser = async (req, res, next) => {
  const authToken = req.header("Auth-Token");
  if (!authToken) {
    res.status(401).json({ error: "please use the corrent authToken " });
  }
  try {
    const data = await jwt.verify(authToken, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    console.log(error);
    res.json({ error: "your token is invalid" });
  }
};

module.exports = fetchuser;
