const router = require('express').Router();
const { Allergy } = require('../../models');
const withAuth = require('../../utils/helpers');

router.post('/', withAuth, async (req, res) => {
  try {
    const newAllergy = await Allergy.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newAllergy);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const AllergyData = await Allergy.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!AllergyData) {
        res.status(404).json({ message: 'No Allergy found with this id!' });
        return;
      }
  
      res.status(200).json(AllergyData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;