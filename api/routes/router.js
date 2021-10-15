const express = require('express')
let taskController = require('../controllers/task.controllers')
const router = express.Router()
taskController = new taskController();

router.post('/register', taskController.create)
router.get('/',taskController.readAll)
router.get('/:id', taskController.readById)
router.delete('/:id' , taskController.delete)
router.put('/:id', taskController.update)


module.exports = router