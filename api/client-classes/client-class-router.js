const express = require("express")
const C_C = require("./client-class-model")

const router = express.Router()

const { valUserId, valClassId, valPairOnPost, valPairOnDelete } = require("../middleware")

router.get("/classesByClient", async (req, res, next) => {
    try {
        const data = await C_C.find()
        return res.status(200).json(data)
    } catch (err) {
        next()
    }
})

router.get("/user/:id", valUserId, async (req, res, next) => {
    try {
        const data = await C_C.findBy({ userId: req.params.id})
        return res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

router.get("/class/:id", valClassId, async (req, res, next) => {
    try {
        const data = await C_C.findByClass(req.params.id)
        return res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

router.post("/", valPairOnPost, async (req, res, next) => {
    try {
        let data = await C_C.add(req.body)
        return res.status(201).jason(data)
    } catch (err) {
        next(err)
    }
})

router.delete("/", valPairOnDelete, async (req, res, next) => {
    try {
        let data = await C_C.remove(req.body)
        data = data[0]
        return res.status(204).end()
    } catch (err) {
        next(err)
    }
})

module.exports = router