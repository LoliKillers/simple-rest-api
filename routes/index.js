const express = require('express');
const MainController = require('../controllers/main');
const ImageController = require('../controllers/image');

const router = express.Router();

router.get('/', MainController.home);
router.get('/image/pinterest/:query', ImageController.pinterest);
router.get('/image/wallpaperflare/:query', ImageController.wallpaperflare);

module.exports = router;