const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnonceSchema = new Schema({

    experience:{
        type:String,

    },
    niveau:{
        type:String,

    },
    langue:{
        type:String,

    },

    titre:{
        type:String,

    },
    poste:{
        type:Number,

    },
    type_emploi:{
        type:String,
    },
    niveau:{
        type:String,
        
    },

    description:{
        type:String,
        
    },
    mots_cles:{
        type:String,
        lowercase:true
    },
  
    Candidats:
    
        [{type:Schema.Types.ObjectId,ref:'Candidat'}]
    

})
const annonce =mongoose.model('Annonce',AnnonceSchema)

module.exports = annonce;