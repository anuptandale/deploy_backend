const { 
    successResponse,
    errorResponse,
} = require('../utils/response/response.handler');
const {API_CLIENT}=require('../utils/constants/constants.js');
const {getDeveloperDb}=require('../mongoDb/dynamicDb.js');

const getDeveloperdata=async(req,res)=>{
    try{
        console.log(req.params.developer);//it should be (Skill)-developer from front end
        const search_word=req.params.developer.replace(/-/g,' ').trim();
        const successResponse=await getDeveloperDb(res,search_word);
        return successResponse;
    }catch(err){
        return errorResponse({res,err});
    }
}


module.exports={getDeveloperdata}