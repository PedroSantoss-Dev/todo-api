const mongoose = require('mongoose')
const Task = require ('../model/task');
let taskService = require('../service/task.service')
taskService = new taskService

class taskController{

    create = async (req, res) => {
        const body = req.body
        try {
            
            const task = await taskService.create(body)
            return res.send({ task })
        } catch (err) {
            return res.status(400).send({err:'Não  foi possivel criar a tarefa'});
            
        }    
    }
    readAll= async (req, res) => {
        const task = await taskService.readAll()
        return res.status(200).send(task) 
    }

    readById = async (req, res) => {
        const id =  req.params.id;

        if(!mongoose.Types.ObjectId.isValid(id)){
           res.status(403).send({error:'id não existe'})
           return;
        }

        try {
            const task = await taskService.readById(id)
            return res.status(200).send(task);

        } catch (err) {
            return res.status(404).send('não encontrado');
            
        }



      
    };
    update = async (req,res)=>{
        const id = req.params.id;
        const body = req.body
        if(req.body && req.body.titulo && req.body.descricao && req.body.prioridade && req.body.status && req.body.prazo){
            await taskService.update( id , body)
            .then(res.status(200).send('Editado com sucesso!')) 
        }else{
            res.status(404).send('Erro')
        }
    }
    delete = async (req, res) => {
        const id = req.params.id;
        await taskService.delete(id)
        .then(() => { 
            res.status(200).send({message:'Deletado com sucesso'})
        })
        
        
    }
    
}
 
module.exports = taskController