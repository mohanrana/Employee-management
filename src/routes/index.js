const router = require('express')();

router.use('/api', require('./employee'));
router.use('/api', require('./department'));

module.exports = router;