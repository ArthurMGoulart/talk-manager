const fs = require('fs/promises');

module.exports = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
};
