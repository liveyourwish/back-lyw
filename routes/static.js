const express = require('express');
const router = express.Router();

//import controller method
const {create, list} = require('../controllers/static');

router.post('/static', create);
router.get('/statics', list);
// router.get('/post/:slug', read);
router.get('/statics?title=[]', list);


//import controller method

// const {suggestion} = require('../controllers/static');
// router.post('/suggestion', suggestion);





module.exports = router;