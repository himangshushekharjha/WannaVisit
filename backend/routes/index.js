const router = require("express").Router();

const crawlerController = require('../controllers/crawlerController');

router.post('/find-path', crawlerController.urlPathFind);
router.post('/malicious-url-find', crawlerController.maliciousUrlFind);

module.exports = router;