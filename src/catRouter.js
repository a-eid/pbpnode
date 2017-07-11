import { all, one, update, remove, create } from './catsController'
import express from 'express'
const Router = express.Router()

Router.get('/', all)
Router.post('/', create)
Router.get('/:id', one)
Router.delete('/:id', remove)
Router.put('/:id', update)

export default Router 