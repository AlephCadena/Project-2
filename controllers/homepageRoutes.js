const router = require('express').Router();
const { Allergy, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all allergies and JOIN with user data
    const allergyData = await Allergy.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
     const allergies = allergyData.map((allergy) => allergy.get({ plain: true }));

    // Pass serialized data and session flag into template
    //  res.render('homepage', { 
    //    allergies, 
    //    logged_in: req.session.logged_in 
    //  });
    res.render('homepage')
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/allergy/:id', async (req, res) => {
  try {
    const allergyData = await Allergy.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const allergy = allergyData.get({ plain: true });

    res.render('allergy', {
      allergy,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Allergy }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
