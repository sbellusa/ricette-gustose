import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('USERS: respond with a resource');
});

export default router;