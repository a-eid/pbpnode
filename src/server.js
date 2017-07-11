import express from 'express' 
import bodyParser from 'body-parser' 
const app = express() 

import petRouter from './pets/petsRouter'

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: true}))

app.get('/' , (req , res) => {
  res.json({message: "this is the homepage for the api"})
})

app.use('/pet' , petRouter) 


app.listen(3000 , () => console.log('running on port 3000'))