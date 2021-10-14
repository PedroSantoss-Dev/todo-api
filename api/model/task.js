const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    titulo: {
        type:String ,
        require: true,
    },
    descricao:{
        type:String,
        required: true,
        lowercase: true,
    },
    prioridade:{
        type:String,
        required: true,
        
    },
    status:{
        type:String,

    },
    prazo : {
        type: String,
    },

    createdAt:{
         type:Date,
         default: Date.now,
    }

});

const task = mongoose.model('task', taskSchema);

module.exports = task