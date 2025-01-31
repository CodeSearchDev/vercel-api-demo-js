// module.js (Module Export)

module.exports = (req, res) => {
  res.status(200).json({ message: 'Hello from Module Export on Vercel!' });
};
