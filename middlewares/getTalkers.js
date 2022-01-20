const readFile = require('../utils/readFile');

module.exports = async (req, res) => {
  const talkers = await readFile('./talker.json');
  if (!talkers) {
    return res.status(200).json([]);
  }
  return res.status(200).json(talkers);
};
