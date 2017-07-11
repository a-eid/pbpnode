import mongoose from 'mongoose'

const catSchema = new mongoose.Schema({
  name: String , 
  age: Number,
  type: String 
})

export default mongoose.model('Cat' , catSchema)