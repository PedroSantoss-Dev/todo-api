const express = require('express');
const router = require('./routes/router');
const conn =  require('./conn/conn')
const PORT = 3000;

conn()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/auth', router)





app.listen(PORT, () => console.log(`server rodando na porata : ${PORT}`))