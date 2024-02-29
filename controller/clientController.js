const { 
    successResponse,
    errorResponse,
} = require('../utils/response/response.handler');
const clientService=require('../services/clientService')

const addClient=async(req,res)=>{
    try{
        const successResponse=await clientService.addClientsData(req,res);
        return successResponse;
    }catch(error){
        return errorResponse({res,error});
    }
}

const addClientCandidates=async(req,res)=>{
    try{
        console.log('A');
        const successResponse=await clientService.addClientCandidatesData(req,res);
        return successResponse;
    }
    catch(error){
        return errorResponse({res,error});
    }
}
module.exports={addClient,addClientCandidates}