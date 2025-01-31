// express.js (for Express)

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/express', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; // Required by Vercel
