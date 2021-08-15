const express = require('express')
const Router= express.Router();

const model = require('../Models/mognooseModels');

Router.get('/getAssets', async (req,res)=>{
    const data = await model.find({})
    .then((data)=>{
    res.json(data)
        console.log(' Models Distributed ');
        console.log(data)
    })
    .catch(err=>{
        console.log(err);
    })
   
})

Router.post('/postAssetSelect',async (req,res)=>{
    if(req.body.User=='')
    return res.sendStatus(400).send( "Enter a valid Email id that is not empty" )

    if(req.body.assetId==null)
    return res.sendStatus(400).send(" Choose atleast one asset" )

    const assetPt = new model({
        User: req.body.User,
        assetId : req.body.assetId
    });
    
        const save = await assetPt.save()
        .then(()=>{
            console.log(' Saved to DB ');
        })
        .catch((Error)=>{
            console.log(Error)
        })
        

    res.send(' Saved to DB ')
}
)
module.exports =Router;