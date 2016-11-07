var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
app.get('/', function (req, res) { res.status(200).send('Model N Chat Bot Welcomes You !'); });
 
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/Contracts', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hey userName ! You Don\'t have any contracts to review now.'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

app.get('/Contracts', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hey '+userName+' ! You Don\'t have any contracts to review now.'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

app.post('/QuotesCount', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'You have 23 Quotes to review and approve'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

app.get('/QuotesCount', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'You have 23 Quotes to review and approve'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});