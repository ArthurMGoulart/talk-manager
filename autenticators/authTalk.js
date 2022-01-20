// validação nova conversa
module.exports = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(400).send({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  const { watchedAt, rate } = talk;
  if (rate === 0) {
    return next();
  }
  if (!watchedAt || !rate) {
    return res.status(400).send({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  next();
};
