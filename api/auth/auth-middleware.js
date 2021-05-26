const jwt = require("jsonwebtoken")

function restricted(req, res, next)  {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, process.env.SECRET, err => {
            if (err) {
                res.status(401).json({
                    message: "Invalid credentials"
                })
            } else {
                next()
            }
        })
    } else {
        res.status(400).json({
            message: "No token provided"
        })
    }
}

function restrict(role) {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization

            if (!token)  {
                return res.status(401).json({
                    message: "Invalid credentials",
                })
            }

            jwt.verify(token, process.env.SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).json({
                        message: "Invalid credentials"
                    })
                }

                req.token = decoded
            })
            next()
        } catch (err) {
            next(err)
        }
    }
}

function validateUserContent(req, res, next)  {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({
            message: "Email and password are required"
        })
    } else {
        next()
    }
}

module.exports = {
    restricted,
    restrict,
    validateUserContent,
}