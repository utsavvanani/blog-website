var express = require('express');
var router = express.Router();

var usercontroller = require('../controller/usercontroller');
var blogcontroller = require('../controller/blogvcontroller');


/* login/signup data routers. */
router.post('/sineup', usercontroller.signupcreate);
router.post('/login', usercontroller.Login);



// blog data router 
router.post('/blog/create',usercontroller.secure, blogcontroller.blogcreate);
router.get('/blog/find', blogcontroller.blogfind);
router.get('/blog/findone', blogcontroller.blogfindone);
router.get('/blog/search',blogcontroller.blogsearch);
router.get('/blogdata',usercontroller.secure,blogcontroller.myblog);
router.get('/blog/sort',blogcontroller.shorting);


module.exports = router;
