const express = require("express")
const Classes = require("./class-model")

const router = express.Router()

const { valClassId, valClass, valTrainer } = require("../middleware")

router.get("/", async (req, res, next) => {
    try {
        const data = await Classes.find()
        return res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

router.get("/:id", valClassId, async (req, res, next) => {
    try {
        const data = await Classes.findBy({ classId: req.params.id })
        return res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

router.post("/", valClass, valTrainer, async (req,res, next) => {
    try {
        const data = await Classes.add(req.body)
        return res.status(201).json(data)
    } catch (err) {
        next(err)
    }
})

router.put("/:id", valClass, valClassId, async (req, res, next) => {
    try {
        const data = await Classes.update(req.body, req.params.id)
        return res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", valClassId, async (req,res, next)  => {
    try {
        await Classes.remove(req.params.id)
        res.status(204).end()
    } catch (err) {
        next(err)
    }
})

module.exports = router