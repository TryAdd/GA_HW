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

function add(req, res){
    res.render('skillV/add',{
        
    })
}

function append(req, res){
    const skillname = req.body.skillN
    tryadd.addNew(skillname)
    index(req, res)
}

module.exports = {
    index,
    show,
    add,
    append
}