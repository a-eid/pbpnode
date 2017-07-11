import express from 'express' 
import r from 'request-promise-native'
const Router = express.Router() 

// get all dogs and cats 
Router.get('/' , async (req ,res) => {
  try{
    let result = await Promise.all([
      r('http://localhost:3001/cat') , r('http://localhost:3002/dog')
    ]) 
    res.json({
      cats : result[0], 
      dogs : result[1] 
    })
  }catch(e){
    res.status(500).json({message: "server error"})
  }
})

Router.get('/cat' , async (req , res) => {
  try{
    let cats = await r('http://localhost:3001/cat') 
    res.json({
      cats
    })
  }catch(e){
    res.status(500).json({message: "server error"})
  }
})

Router.get('/dog' , async (req , res) => {
  try{
    let dogs= await r('http://localhost:3002/dog') 
    res.json({
      dogs
    })
  }catch(e){
    res.status(500).json({message: "server error"})
  }
})

// ping end point 
Router.get('/ping' , (req , res) => {
  res.json({
    pong: Date.now()
  })
})

// ... and so on ( depends on the needs for this aggregation layer ?? )
export default Router 