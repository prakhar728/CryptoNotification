const { json } = require('express')
const mongoose = require('mongoose')

const assetSchema =new mongoose.Schema({
    User:{
        type:String,
        required:true
    },
    assetId:{
        type:Array,
        required:true
    }
})

module.exports = mongoose.model('AssetPost',assetSchema);