const tryadd = require('../models/skillM')



function index(req, res){
    res.render('skillV/index', {
        skills: tryadd.getAll()
    })
}

function show(req, res){
    res.render('skillV/show',{
        skill: tryadd.getOne(req.params.id)
    })
}

module.exports = {
    index,
    show
}