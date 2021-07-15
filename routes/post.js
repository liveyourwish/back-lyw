const express = require('express');
const router = express.Router();

//import controller method
const {create, list, read} = require('../controllers/post');

router.post('/post', create);
router.get('/posts', list);
router.get('/post/:slug', read);
router.get('/posts?title=[]', list);


//import controller method

// const {suggestion} = require('../controllers/static');
// router.post('/suggestion', suggestion);





module.exports = router;