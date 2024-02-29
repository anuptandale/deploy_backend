/* eslint-disable no-undef */
const Router = require('express')
// const{} = require('../middlewares/auth/auth.middleware');
const clientController = require('../controller/clientController');
const router = Router();
router.use(Router.json());
router.post('/call',clientController.addClientCandidates);
module.exports = router;