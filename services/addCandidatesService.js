const { 
    successResponse,
    errorResponse,
} = require('../utils/response/response.handler')
const { addCandidatesZoho,updateCandidatesZoho } =require('../zohoDb/zohoCandidateApis');
const {API_URL_GET}=require("../utils/constants/constants");
const addCandidatesData = async (req,res) => {
    try {
        const dataFromrequest = req.body;//JSON array[{},{},{},...]
        console.log('Reached here!2',req.body);
        let dataTobeAdded={};
        dataTobeAdded.data=req.body;//req.body is a simple object
        console.log(dataTobeAdded)  
        const successResponse = await addCandidatesZoho(res,dataTobeAdded,API_URL_GET);//function ending with zoho would make API calls
        return successResponse
    } catch (error) {
        return errorResponse ({res, error})
    }
}
const updateCandidatesData = async (req, res) => {
    try {
      console.log('B');
      let obj=req.body;
      obj.id=req.params.id;
      //Skill_Set and Additional_Skills from front end should be in array
      if(obj.Skill_Set){
        let skill=obj.Skill_Set;
        let str=''
        skill.forEach((ele)=>{
            str+=ele+','
        })
        obj.Skill_Set=str.substring(0,str.length-1);
      }
      if(obj.Additional_Skills){
        let skill=obj.Additional_Skills;
        let str=''
        skill.forEach((ele)=>{
            str+=ele+','
        })
        obj.Additional_Skills=str.substring(0,str.length-1);
      }
      //Add id to all tabular fields
      if(obj.Technical_Skills){//Technical Skills
        let arr=[];
        let temp={}
        obj.Technical_Skills.forEach((ele)=>{
            temp={}
            temp=ele;
            temp.id=req.params.id;
            arr.push(temp)
        })
        obj.Technical_Skills=arr;
      }
      if(obj.Experience_Details){//Experience Details
        let arr=[];
        let temp={}
        obj.Experience_Details.forEach((ele)=>{
            temp={}
            temp=ele;
            temp.id=req.params.id;
            arr.push(temp)
        })
        obj.Experience_Details=arr;
      }
      if(obj.Educational_Details){//Educational_Details
        let arr=[];
        let temp={}
        obj.Educational_Details.forEach((ele)=>{
            temp={}
            temp=ele;
            temp.id=req.params.id;
            arr.push(temp)
        })
        obj.Educational_Details=arr;
      }
      if(obj.Certification_Details){//Certification Details
        let arr=[];
        let temp={}
        obj.Certification_Details.forEach((ele)=>{
            temp={}
            temp=ele;
            temp.id=req.params.id;
            arr.push(temp)
        })
        obj.Certification_Details=arr;
      }
      if(obj.Project_Details){//Project Details
        let arr=[];
        let temp={}
        obj.Project_Details.forEach((ele)=>{
            temp={}
            temp=ele;
            temp.id=req.params.id;
            arr.push(temp)
        })
        obj.Project_Details=arr;
      }
      console.log(obj.Technical_Skills,obj.Certification_Details)
      let url=`${API_URL_GET}/${req.params.id}`;
      const successResponse = await updateCandidatesZoho(res,[obj],url); //function ending with zoho would make API calls
      return successResponse;
    } catch (error) {
      return errorResponse({ res, error });
    }
  };
module.exports={addCandidatesData,updateCandidatesData}