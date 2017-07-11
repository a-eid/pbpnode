import {getAll , getOne , update , deleteOne , create } from './cats'
import express from 'express' 
const Router = express.Router() 

// get all 
Router.get('/' , (req , res) => {
  res.json(getAll())
})

// getone
Router.get('/:id' , (req ,res) => {
  const cat = getOne(req.params.id)
  if(cat){
    res.json(cat)
  }else{
    res.json({
      message: `couldn't find cat with id ${req.params.id}`
    })
  }
})

// delete
Router.delete('/:id' , (req ,res) => {
  const cat = DeleteOne(req.params.id)
  if(cat){
    res.json({
      deletedCat: cat , 
      message: "cat deleted successfully"
    })
  }else{
    res.json({
      message: `couldn't find cat with id ${req.params.id}`
    })
  }
})
// create
Router.post('/' , (req , res) => {
  res.json(create(req.body)) 
})

//update
Router.put('/:id' , (req , res) => {
  const oldCat = getOne(req.params.id)
  const newCat = update(req.params.id , req.body) 
  if(!newCat){
    res.json({
      oldCat,
      newCat , 
      message: "updated successfully"
    })
  }else{
    res.json({
      message: `couldn't find cat with id ${req.params.id}`
    })
  }
})

export default Router 