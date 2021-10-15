const task = require('../model/task')

class taskService {
    create = async (body) => {

        return await task.create(body)
    }
    readAll = async() =>  await task.find()
    
    readById = async (id) => {
        return await task.findById(id);
    }
    update = async (id,body) => {
        return await task.updateOne({ _id:id }, body)
    }
    delete = async (id) => {
        return await task.findOneAndDelete({ _id:id })
    }

}

module.exports = taskService