const express = require('express');
const router = express.Router();
const controllers = require('../../../controllers');
const upload = require('../../../middlewares/upload/upload');
const validator = require('../../../middlewares/validators/superheroValidator');

router
	.get('/', controllers.getHeroesController)
	.get('/:id', controllers.getSuperheroeController)
	.post('/', upload.any('images'), validator, controllers.addHeroesController)
	.delete('/:id', controllers.delHeroesController)
	.patch('/update', upload.any('images'), controllers.updatePhotoCoontroller)
	.patch('/updateHeroe', controllers.updateHeroeController);

module.exports = router;
