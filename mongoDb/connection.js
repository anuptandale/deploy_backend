const mongoose=require('mongoose');
const {MONGO_CLOUD_URI} = require("../utils/constants/constants.js");
const {setSharedObj} = require('../shared.js');
const {schema}=require("./schema.js");
const connection=()=>{
    return new Promise(async(resolve,reject)=>{
        try{
            await mongoose.connect(MONGO_CLOUD_URI);
            schema(mongoose);
            resolve('Mongodb connected !');
        }catch(err){
            reject('Mongodb Not connected !');
        }
    })
}

module.exports={connection};



