/* eslint-disable no-undef */
const Router = require('express')
// const{} = require('../middlewares/auth/auth.middleware');
const  candidateController = require('../controller/candidateController');
const router = Router();
router.use(Router.json());
router.get("/id/:id", candidateController.getCandidate);
router.post("/filter/candidates", candidateController.getFilteredCandidates);
router.post("/sort/candidates", candidateController.getSortedCandidates);
router.post("/search/candidates", candidateController.getCandidatesBySearch);
router.post("/form/candidates", candidateController.getCandidates);
router.post('/add/candidates',candidateController.addCandidates);
router.post('/searchbar/candidates',candidateController.getcandidateSearchBar);
router.post('/location/candidates',candidateController.getLocationSearchBar);
router.put('/update/candidates/:id',candidateController.updateCandidates);
router.get('/deletedrecords/candidates',candidateController.deletedCandidates);
router.post('/count/candidates',candidateController.getTotalCount);
router.get('/allskills/candidates',candidateController.getSCLCandidtates);
router.get('/certification/candidates',candidateController.getCertification);
router.post('/linkedin/candidates',candidateController.getLinkedin);
module.exports = router;