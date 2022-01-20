const readFile = require('../utils/readFile');
const writeFile = require('../utils/writeFile');

module.exports = async (req, res) => {
  const talkers = await readFile('./talker.json');
  const { name, age, talk } = req.body;

  const id = talkers[talkers.length - 1].id + 1;
  talkers.push({ id, name, age, talk });
  await writeFile('./talker.json', JSON.stringify(talkers, null, 2));
  return res.status(201).json({ id, name, age, talk });
};
