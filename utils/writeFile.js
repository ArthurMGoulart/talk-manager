const fs = require('fs').promises;

module.exports = async (filePath, file) => {
  await fs.writeFile(filePath, file);
};
