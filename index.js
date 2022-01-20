const express = require('express');
const bodyParser = require('body-parser');
// Req 1
const getTalkers = require('./middlewares/getTalkers');
// Req 2
const getTalkerById = require('./middlewares/getTalkerById');
// Req 3
const authEmail = require('./autenticators/authEmail');
const authPassword = require('./autenticators/authPassword');
const postLogin = require('./middlewares/postLogin');
// Req 4
const authToken = require('./autenticators/authToken');
const authTalk = require('./autenticators/authTalk');
const authName = require('./autenticators/authName');
const authAge = require('./autenticators/authAge');
const authDate = require('./autenticators/authDate');
const authRate = require('./autenticators/authRate');
const postTalker = require('./middlewares/postTalker');
// Req 5
const putTalkerId = require('./middlewares/putTalkerId');
// Req 6
const deleteTalkerId = require('./middlewares/deleteTalkerId');
// Req 7
const getTalkersBySearch = require('./middlewares/getTalkersBySearch');

const app = express();
app.use(bodyParser.json());

// Req 1
app.get('/talker', getTalkers);
// Req 7
app.get('/talker/search', authToken, getTalkersBySearch);
// Req 2
app.get('/talker/:id', getTalkerById);
// Req 3
app.post('/login', authEmail, authPassword, postLogin);
// Req 4
app.post('/talker', authToken, authTalk, authName, authAge, authDate, authRate, postTalker);
// Req 5
app.put('/talker/:id', authToken, authTalk, authName, authAge, authDate, authRate, putTalkerId);
// Req 6
app.delete('/talker/:id', authToken, deleteTalkerId);
 
const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
