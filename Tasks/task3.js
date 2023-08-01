//Task 3: Asynchronous File Handling
// Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. The script should print the total word count to the console.

const fs = require("fs");

const readData = async (filename) => {
    try {
        // Read the file
        const data = await fs.promises.readFile(filename, 'utf8');

        // Count the numbers of words
        const wordCount = data.split(/\s+/).filter(word => word.trim() !== '').length;
        console.log('Task 3: Total word count in the file', filename, ':', wordCount);
      } catch (err) {
        console.error('Error reading the file:', err);
      }
  }

  module.exports = {readData};