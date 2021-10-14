const mongoose = require('mongoose')

const conn = () => {
  mongoose.connect('mongodb+srv://USER:USER@cluster0.c2tri.mongodb.net/todo?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('conectado')) 
  .catch(() => console.log('falhou'))
  
}

module.exports = conn