const readFile = require('../utils/readFile');

module.exports = async (req, res) => {
  const talkers = await readFile('./talker.json');
  const { q } = req.query;
  if (!q) {
    return res.status(200).json(talkers);
  }
  const filteredTalkers = talkers.filter((talker) => talker.name.includes(q));
  if (filteredTalkers.length === 0) {
    return res.status(200).json([]);
  }
  return res.status(200).json(filteredTalkers);
};
