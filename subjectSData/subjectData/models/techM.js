const mongoose = require('mongoose')

const Schema = mongoose.Schema

const techSchema = new Schema({
    name: {
        type:String,
        require:true
    },
    releaseYear: {
        type:Number,
         default:function(){
            return new Date().getFullYear()
         }
        },
    type: String,
    mark: String,
    new: Boolean,
    goodBad: Boolean,
},
{
    timestamps: true
})


module.exports = mongoose.model('Tech', techSchema)
