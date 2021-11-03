const router = require('express').Router();

router.get('/', async (req, res) => {
 res.render('Homepage');
  });
  
  module.exports = router;

  //fixing route to hoempage