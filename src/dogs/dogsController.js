import mongoose from 'mongoose'
import Dog from './dogsModel'

export const create = async (req, res) => {
  try {
    const newDog = await new Dog(req.body)
    await newDog.save()
    res.json({
      newDog,
      message: "a new dog was successfully created"
    })
  } catch (e) {
    res.status(500).json({ message: "server error" })
  }
}

export const all = async (req, res) => {
  try {
    const dogs = await Dog.find({})
    res.json(dogs)
  } catch (e) {
    res.status(500).json({ message: "server error" })
  }
}

export const one = async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id)
    dog && res.json({ dog }) || res.status(404).json({ message: `no dog found with id ${req.params.id}` })
  } catch (e) {
    res.status(500).json({ message: "server error" })
  }
}

export const update = async (req, res) => {
  try {
    const oldDog = await Dog.findById(req.params.id)
    const newDog = await Dog.findByIdAndUpdate(rq.params.id, req.body, { new: true })
    oldDog && res.json({ oldDog, newDog, message: "updated successfully" }) ||
      res.status(404).json({ message: `no dog found with id ${req.params.id}` })
  } catch (e) {
    res.status(500).json({ message: "server error" })
  }
}

export const remove = async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id)
    const oldDog = await Dog.findByIdAndRemove(req.params.id)
    dog && res.json({ dog , message: "removed successfully" }) ||
      res.status(404).json({ message: `can't find dog with id ${req.params.id}` })
  } catch (e) {
    res.status(500).json({ message: "server error" })
  }
}

// whatever you are doing do it well or don't do it at all 