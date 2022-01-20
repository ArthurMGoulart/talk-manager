const readFile = require('../utils/readFile');
const writeFile = require('../utils/writeFile');

module.exports = async (req, res) => {
  const talkers = await readFile('./talker.json');
  const { id } = req.params;
  const { name, age, talk } = req.body;
  talkers[parseInt(id, 10) - 1] = { ...talkers[parseInt(id, 10) - 1], name, age, talk };
  await writeFile('./talker.json', JSON.stringify(talkers, null, 2));
  return res.status(200).json({ id: parseInt(id, 10), name, age, talk });
};
