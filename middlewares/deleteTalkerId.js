const readFile = require('../utils/readFile');
const writeFile = require('../utils/writeFile');

module.exports = async (req, res) => {
  const talkers = await readFile('./talker.json');
  const { id } = req.params;
  const indexPeople = talkers.findIndex((p) => p.id === Number(id));
  if (!indexPeople) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  const newFileContent = talkers.filter((value) => value.id !== Number(id));
  await writeFile('./talker.json', JSON.stringify(newFileContent, null, 2));
  return res.status(204).send();
};
