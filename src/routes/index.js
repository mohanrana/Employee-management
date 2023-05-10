const router = require('express')();

router.use('/api', require('./employee'));

module.exports = router;