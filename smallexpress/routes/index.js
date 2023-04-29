var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addS',function(req, res){
  res.render('add-skill',{title: 'Add skill'})
})

module.exports = router;
