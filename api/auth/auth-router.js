const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Users = require("../users/users-model")
const {  validateUserContent } = require("./auth-middleware")

const router = express.Router()

router.post("/register", validateUserContent, async (req, res, next) => {
    try {
        let user = req.body
        const hash = await bcrypt.hash(user.password, 10)
        user.password = hash

        const newUser = await Users.add(user)
            const token = generateToken(newUser)
           // delete newUser.password
            res.status(201).json({ newUser, token})
    } catch (err) {
        next(err)
    }
})

router.post("/login", validateUserContent, async (req, res, next) => {
    try {
        let { email, password } = req.body

        const user = await Users.findBy({ email })
        if (user && bcrypt.compare(password, user.password)) {
            const token = generateToken(user)
            res.status(400).json({
                user,
                token
            })
        } else {
            res.status(401).json({
                message: "Invalid email or password"
            })
         }

    } catch (err) {
        next(err)
    }
})

function generateToken(user) {
    const payload = {
        id:user.id,
        email: user.email
    }
    const options = {
        expiresIn: "7d"
    }
    const token = jwt.sign(payload, process.env.SECRET || "test token", options)
    return token
}

module.exports = router