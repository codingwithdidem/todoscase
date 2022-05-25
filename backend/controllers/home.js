const welcome = (req, res, next) => {
  res.json({
    message: "Welcome to the Todo API",
  });
};

module.exports = { welcome };
