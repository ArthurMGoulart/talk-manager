const readFile = require('../utils/readFile');

module.exports = async (req, res) => {
  const { id } = req.params;
  const talkers = await readFile('./talker.json');
  const talker = talkers.find((talk) => talk.id === parseInt(id, 10));
  if (!talker) {
    return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(talker);
};
