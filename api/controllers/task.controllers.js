const mongoose = require('mongoose')
const Task = require ('../model/task');

class taskController{

    create = async (req, res) => {
        try {
            
            const task = await Task.create(req.body)
            return res.send({ task })
        } catch (err) {
            return res.status(400).send({error:'registraition falid'});
            
        }    
    }
    read = async (req, res) => {
        const task = await Task.find();
        res.send(task)
    }
    readAll = async (req, res) => {
        const id =  req.params.id;

        if(!mongoose.Types.ObjectId.isValid(id)){
           return res.status(403).send({error:'id não existe'})
        }
       const task = await Task.findById(id)
       res.send(task)
    }
}
 
module.exports = taskController