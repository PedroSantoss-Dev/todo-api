const express = require('express')
let taskController = require('../controllers/task.controllers')
const router = express.Router()
taskController = new taskController();

router.post('/register', taskController.create)
router.get('/',taskController.read)
router.get('/:id', taskController.readAll)

module.exports = router