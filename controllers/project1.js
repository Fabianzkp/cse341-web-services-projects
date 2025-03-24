const greet = (req, res) => {
    res.send("This is for the personal project.");
  };
  
  module.exports = {
    greet,
  }; // Export the function to be used in routes/index.js