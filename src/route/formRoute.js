const FormModel = require('../model/formModel')
const formRouter = require('express').Router()

formRouter.post('/', async (req, res) => {
    const data = req.body
    console.log(data)
    try {
        const form = new FormModel(data)
        await form.save()
        res.status(200).send(form)
    } catch (error) {
        res.status(400).send(error)
    }
})

formRouter.get('/', async (req, res) => {
    try {
        const form = await FormModel.find()
        res.status(200).send(form)
    } catch (error) {
        res.status(400).send(error)
    }
})

formRouter.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const form = await FormModel.findById(id)
        res.status(200).send(form)
    } catch (error) {
        res.status(400).send(error)
    }
})

formRouter.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const form = await FormModel.findByIdAndDelete(id)
        res.status(200).send(form)
    } catch (error) {
        res.status(400).send(error)
    }
})

formRouter.patch('/:id',async(req,res)=>{
    const {id} = req.params 
    try {
        const data = await FormModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports =  formRouter