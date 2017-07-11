import mongoose from 'mongoose'
import Cat from './catsModel'

export const create = async (req, res) => {
  try {
    const newCat = await new Cat(req.body)
    await newCat.save()
    res.json({
      newCat,
      message: "a new cat was successfully created"
    })
  } catch (e) {
    res.status(500).json({ message: "server error" })
  }
}

export const all = async (req, res) => {
  try {
    const cats = await Cat.find({})
    res.json(cats)
  } catch (e) {
    res.status(500).json({ message: "server error" })
  }
}

export const one = async (req, res) => {
  try {
    const cat = await Cat.findById(req.params.id)
    cat && res.json({ cat }) || res.status(404).json({ message: `no cat found with id ${req.params.id}` })
  } catch (e) {
    res.status(500).json({ message: "server error" })
  }
}

export const update = async (req, res) => {
  try {
    const oldCat = await Cat.findById(req.params.id)
    const newCat = await Cat.findByIdAndUpdate(rq.params.id, req.body, { new: true })
    oldCat && res.json({ oldCat, newCat, message: "updated successfully" }) ||
      res.status(404).json({ message: `no cat found with id ${req.params.id}` })
  } catch (e) {
    res.status(500).json({ message: "server error" })
  }
}

export const remove = async (req, res) => {
  try {
    const cat = await Cat.findById(req.params.id)
    const oldCat = await Cat.findByIdAndRemove(req.params.id)
    cat && res.json({ cat, message: "removed successfully" }) ||
      res.status(404).json({ message: `can't find cat with id ${req.params.id}` })
  } catch (e) {
    res.status(500).json({ message: "server error" })
  }
}

// whatever you are doing do it well or don't do it at all 