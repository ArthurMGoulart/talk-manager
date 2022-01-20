const tokenGenerator = require('../utils/tokenGenerator');

module.exports = async (req, res) => {
  const token = tokenGenerator(16);
  return res.status(200).send({
    token,
  });
};
