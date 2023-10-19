const express = require('express')
const app = express()
const PORT = 3500

const loginRouter = require('./routes/loginRoute')
const signupRouter = require('./routes/signupRoute')


const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/',(request,response)=>{
    response.send(`<h1>Welcome to express</h1>`)
})

app.use('/api/v1/login',loginRouter)
app.use('/api/v1/signup',signupRouter)

app.listen(PORT,console.log(`Server running at http://localhost:${PORT}/`))