const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CandidatSchema=new Schema({
    niveau:{
        type:String,
    },
    profil:{
        type:String,
        lowercase:true 
    },
    
    email:{
        type:String,
    },
    linkedIn:{
        type:String,
    },
    ecole_de_licence:{
        type:String,
    },
    ecole_ingenieur:{
        type:String,
    },
    ecole_master:{
        type:String,
    },
    competence:{
        type:String,  lowercase:true 
    },
    grade:{
        type:String,
    },
    file:{
        type:String,
    },
    nom:{
        type:String,
    },
  

})


const candidat =mongoose.model('Candidat',CandidatSchema)

module.exports=candidat