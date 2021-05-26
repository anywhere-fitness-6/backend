const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

const authRouter = require("./auth/auth-router")
const userRouter = require("./users/users-router")

const { restricted } = require("./auth/auth-middleware")

server.use("/api/auth", authRouter)
server.use("api/users", restricted, userRouter)

server.get("/", (req, res) => {
    res.json({
        message: "API is up"
    })

    server.use((err, req, res, next) => {
        return res.status(500).json({
            error: "There was a problem communicating with the server",
            message: err.message,
            stack: err.stack,
        })
    })
})

module.exports = server
