const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('Travel Blog!'))

router.get('/locations', controllers.getAllLocations)


module.exports = router;