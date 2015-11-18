var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('categories', { title: 'Categories Available', categories:{
    1:{name:"Content Management",url:"https://wordpress.org/about/"},
    2:{name:"Content Management",url:"https://www.drupal.org"},
    }
    });
});

module.exports = router;
