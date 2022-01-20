// validação Rate
module.exports = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;
  const intRate = parseInt(rate, 10);
  if (intRate < 1 || intRate > 5) {
    return res.status(400).send({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }

  next();
};
