const mongoose=require('mongoose')
var testSchema=new mongoose.Schema({
    test_name:{
        type:'String'
    },
    price:{
        type:'String'
    },
    status:{
        type:Boolean,
        default:true
    }
})
var testModel=mongoose.model('test',testSchema)
module.exports=testModel