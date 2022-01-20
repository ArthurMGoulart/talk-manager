// função retirada de https://stackoverflow.com/questions/10194464/javascript-dd-mm-yyyy-date-check
module.exports = (date) => {
  const reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  if (date.match(reg)) {
    return true;
  }
  return false;
};
