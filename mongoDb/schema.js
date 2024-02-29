const {setSharedObj}=require("../shared.js");
const schema=(mongoose)=>{
    const schema=mongoose.Schema({
        Skill:{
            type:String,
            required:true
        },
        Requirements:{
            type:Array,
            required:true
        },
        Roles:{
            type:Array,
            required:true
        },
        Preferred_Skills:{
            type:Array,
            required:true
        },
        Description:{
            type:String,
            required:true
        }
    });
    const certification=mongoose.Schema({
        Certification_Summary:{
            type:String,
        }
    })
    const SAP=mongoose.model('SAPModel',schema,'SAP');
    const Legacy=mongoose.model('LegacyModel',schema,'Legacy');
    const Cloud=mongoose.model('CloudModel',schema,'Cloud');
    const cert=mongoose.model('cert',certification,'Certification');
    obj={SAP,Legacy,Cloud,cert};
    setSharedObj(obj);
}
module.exports={schema};