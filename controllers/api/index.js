const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const inputRoutes = require('./inputRoutes');

router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/input', inputRoutes)

module.exports = router;