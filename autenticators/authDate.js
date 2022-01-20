// validação data
const dateCheck = require('../utils/dateCheck');

module.exports = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;

  if (!dateCheck(watchedAt)) {
    return res.status(400).send({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  next();
};
