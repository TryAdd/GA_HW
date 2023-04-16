const mongoose = require('mongoose')
const dbURI = process.env.DATABASE_URI

mongoose.connect(dbURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', function(){
console.log(`Connected to MongoDB at: ${db.host} : ${db.port}`)
})