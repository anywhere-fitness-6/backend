const express = require("express")
const Users = require("./users-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const users = await Users.find()
        return res.status(200).json(users)
    } catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    const { id } = req.params

    try {
        const user = await Users.findBy({ id })

        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(400).json(`The user with id ${id} could not be found`)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router