const { 
    successResponse,
    errorResponse,
} = require('../utils/response/response.handler');
const {API_CLIENT}=require('../utils/constants/constants.js');
const {addClientsZoho,addClientCandidatesZoho}=require('../zohoDb/zohoClientApi');
const addClientsData=async(req,res)=>{
    try{
        const data=req.body;
        const successResponse=await addClientsZoho(res,data,API_CLIENT);
        return successResponse;
    }catch(err){
        return errorResponse({res,err});
    }
}

const addClientCandidatesData=async(req,res)=>{
    try{
        const obj={};
        const client=req.body.clientInfo;
        const clientCandidates=req.body.selectedId;
        obj.Client_Name=client.Name;
        obj.Email=client.Email;
        obj.Company=client.Company_Name;
        obj.Contact_Number=client.contact_number;
        obj.Work_Email=client.workEmail;
        obj.Call_Schedule=client.CallSchedule;
        obj.Work_Type=client.workType;
        obj.Experience=client.yearOfExp;
        obj.Current_Timezone=client.Current_Timezone
        obj.Skills=client.Skills.join(",");
        obj.Candidates=clientCandidates.join(',');
        console.log('B Reached',obj,API_CLIENT)
        const successResponse=await addClientCandidatesZoho(res,[obj],API_CLIENT);
        return successResponse;
    }catch(err){
        return errorResponse({res,err});
    }
}
module.exports={addClientsData,addClientCandidatesData}

//1000.4a11234254ca96f7823495e564562738.22bdb9fa1d180094e0d919585467c889
//1000.41a34d8edab5672d0081e39abb583de6.fbd17469124f7c5a215093d6b4e49d07