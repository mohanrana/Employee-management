const router = require('express')();

router.use('/api/employee', require('./employee'));
router.use('/api/department', require('./department'));

module.exports = router;