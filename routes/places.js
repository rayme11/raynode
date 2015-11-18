var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('places', { title: 'Places I Plan on Visiting', 
    places:
       {
         1:{name:"Japan",url:"http://www.google.com"},
         2:{name:"Chihuahua",url:"http://www.chihuahua.mx"},
         3:{name:"D.F",url:"http://www.df.mx"}
       }
     });
});

module.exports = router;
