const router = require('express').Router();

const database = require('./database');
const posts = require('./posts');

router.use('/api/database', database);
router.use('/api/posts', posts);

module.exports = router;