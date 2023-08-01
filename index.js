// Import required modules
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

const {sumOfIntegers} = require("./Tasks/task2")
const {readData} = require("./Tasks/task3")

const inputArrayOfIntegers = [1, 2, 3, 4, 5]
const dataFilename = "data.txt";

const port = process.env.PORT;

app.use(
  cors({
    origin: "*",
  })
);

// Calling functions
require("./Tasks/task1")(app); //Task 1
sumOfIntegers(inputArrayOfIntegers) //Task 2
readData(dataFilename) //Task 3

// Start the server and listen on port 3000
app.listen(port, () => {
    console.log(`Task 1: Server is listening on port ${port}`);
  });