const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      return res.json("Нет токена");
    }
    const [type, token] = authorization.split(" ");
    if (type !== "Bearer") {
      return res.json("неправильный тип токена");
    }
    req.user = await jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (err) {
    res.json(err.toString());
  }
};
