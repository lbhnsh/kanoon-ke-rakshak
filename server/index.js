const connectToMongo=require('./db')
const express = require('express')
const morgan=require('morgan')
const cors=require('cors')
const app = express()
const port = 5000
app.use(morgan('combined'))
app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/examination',require('./routes/examination'))




app.get('/', (req, res) => { 
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
connectToMongo();
