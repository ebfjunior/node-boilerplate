const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
  res.json('Everything is fine');
});

module.exports = router;
