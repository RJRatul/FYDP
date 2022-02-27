const router = require('express').Router();


const{blogList,blogPost} = require('../controller/blogController');

router.post('/post', blogPost);
router.get('/list',  blogList);


module.exports = router;