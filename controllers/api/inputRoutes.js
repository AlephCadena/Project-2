const router = require('express').Router();
const { Allergy } = require('../../models');
const withAuth = require('../../utils/auth');
function setAllergy(){
    var allergy ={ 'name': getElementById('name')};
}
// storing data
//localStorage.setItem('allergy',JSON.stringify(allergy));
//post route
router.post('/', async (req, res) => {
    try {
      const allergy = await Allergy.create(
        req.body);
      res.status(200).json(allergy);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;