var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


const SkillControl = require('../controllers/skillC')

router.get('/', SkillControl.index)
router.get('/add', SkillControl.add)
router.post('/', SkillControl.append)
router.get('/:id', SkillControl.show)


module.exports = router;
