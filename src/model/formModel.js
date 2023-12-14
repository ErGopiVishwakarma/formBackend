const mongoose = require('mongoose')

const formSchema = mongoose.Schema({
    formName:{type:String, default:''},
    headerImage:{type:String,default:''},
    question:[]
},{
    timestamps:true
})

const FormModel = mongoose.model('form',formSchema)

module.exports = FormModel