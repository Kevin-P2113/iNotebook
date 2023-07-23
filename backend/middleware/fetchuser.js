const jwt = require("jsonwebtoken");
const JWT_SECRET = "lwkjafld4@3kjfaoiweourowj2392i349u";


// This is a middleware called fetch user which basically takes the JWT token from the 
// request header and then verifies it using the secret key which we've set, if successful it'll
// call the next function which then forwards the req,res to the next function in the chain. otherwise
// it will throw an error and give a response and never call the next method 


const fetchuser = async (req, res, next) => {
  // 1. check if auth-token is present 
  const authToken = req.header("Auth-Token");
  if (!authToken) {
    // logic to execute if auth-token is not present
    res.status(401).json({ error: "please use the corrent authToken " });
  }
  // logic to execute if auth-token is present
  try {
    //verify the auth-token
    const data = await jwt.verify(authToken, JWT_SECRET);  
    // add the payload data to the req body which can be used to access user data
    req.user = data.user;  
    //call the next middleware
    next();    
  } catch (error) {
    console.log(error);
    res.json({ error: "your token is invalid" });
  }
};

module.exports = fetchuser;
