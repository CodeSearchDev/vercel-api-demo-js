// src/main.js
module.exports = (req, res) => {
  if (req.url === '/') {
    res.status(200).json({
      status: 200,
      message: "This is the main route!"
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Route not found"
    });
  }
};