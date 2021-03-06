import express from 'express' 
import bodyParser from 'body-parser' 
import mongoose from 'mongoose'
const app = express() 
mongoose.connect('mongodb://localhost/api');
mongoose.Promise = global.Promise 
const db = mongoose.connection
db.on('error', e => console.error('connection error: ' + e ));

import catRouter from './cats/catRouter'

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: true}))

app.get('/' , (req , res) => {
  res.json({message: "this is the homepage for the catsapi"})
})

app.use('/cat' , catRouter) 


app.listen(3001 , () => console.log('running on port 3001'))