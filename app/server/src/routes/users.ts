import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('USERS: respond with a resource');
});

module.exports = router;
