const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "MOBILE",
            price: 10000
        },
        {
            name: "TELEVISION",
            price: 20000
        }
    ])
});

module.exports = router;