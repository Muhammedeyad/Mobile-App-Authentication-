const mongoose = require('mongoose')
async function connectToDb(){
    try{
        await mongoose.connect("mongodb://localhost:27017/authentication1")
        console.log('db connected')
    }catch(err){
        console.log(err.message)
        res.status(400).json({error: err.message})
    }
}

module.exports={connectToDb}