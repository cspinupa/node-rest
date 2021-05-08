const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

//Getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

//Getting one
router.get('/:id', getSubscriber, (req, res) => {
    res.send(res.subscriber.name)
})


//Creating one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch(error) {
        res.status(400).json({ message: error.message })
    }
})


//Updating one
router.patch('/', (req, res) => {
    
})


//Deleting one
router.delete('/:id',getSubscriber, async (req, res) => {

})

async function getSubscriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.param.id)
        if(subscriber == null) {
            res.status(400).json({ message: 'Cannot find the subsciber'})
        }
    }catch (error) {
        res.status(500).json({ message: error.message })
    }
    res.subscriber = subscriber
};

module.exports = router