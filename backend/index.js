const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

// calling the function in "db.js" whihc establishes connection with our mongoDB database
connectToMongo();

// creating the express app on port 3000
const app = express();
const port = 3000;

// parses the req body as json if the content-type of the request is set as application/json
// it's a middle ware that only intercepts if the req content-type is application/json
app.use(cors());
app.use(express.json());

// the root endpoint that sends a response
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// keeping routing in other files to keep index.js clean and simple
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// starting the application by making it listen for requests on port 3000
app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`);
});
