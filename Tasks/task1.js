// Task 1: Basic Node.js Server
// Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests. You can use any library or framework of your choice.

module.exports = (app) => {
    app.get("/", (req, res) => {
        // Respond with "Hello, World!"
        res.send("Hello World");
      });
}