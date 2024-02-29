/* eslint-disable no-undef */
const Router = require('express')
// const{} = require('../middlewares/auth/auth.middleware');
const dynamicController = require('../controller/dynamicController');
const router = Router();
router.use(Router.json());
router.get('/:developer',dynamicController.getDevelopers);
module.exports = router;