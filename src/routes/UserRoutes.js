const {route} = require('express');
const {listUsers} = require('../controllers/user');

const router = route();

router.get('/users', listUsers);

module.exports = router;