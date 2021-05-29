const Users = require("../users/users-model")
const Classes = require("../classes/class-model")
const C_C = require("../client-classes/client-class-model")

async function valClassId(req, res, next) {
    const { id } = req.params

    try {
        const valIdMatch = await Classes.findBy({ classId: id })

        if (valIdMatch) {
            next()
        } else {
            res.status(400).json(`The class with id ${id} could not be found`)
        }
    } catch (err) {
        next(err)
    }
}

async function valUserId(req, res, next) {
    const { id } = req.params

    try {
        const valIdMatch = await Users.findBy({ id })

        if (valIdMatch) {
            next()
        } else {
            res.status(400).json(`The user with id ${id} could not be found`)
        }
    } catch (err) {
        next(err)
    }
}

function valClass(req, res, next) {
    const { name, type, startTime, date, duration, intensityLevel, location, currentRegistered, maxRegistered } = req.body

    if (name && type && startTime && date && duration && intensityLevel && location && currentRegistered && maxRegistered) {
        next()
    } else {
        res.status(400).json({
        message: "Missing required field"
        })
    }
}

async function valPairOnPost(req, res, next) {
    const { userId, classId } =req.body

    try {
        const pair = await C_C.findPair(userId, classId)

        if (!pair) {
            next()
        } else {
            res.status(400).json(`User ${userId} is already in class ${classId}`)
        }
    } catch (err) {
        next(err)
    }
}

async function valPairOnDelete(req, res, next) {
    const { userId, classId } = req.body

    try {
        const pair = await C_C.findPair(userId, classId)
        
        if (pair) {
            next()
        } else {
            res.status(400).json(`User ${userId} in class ${classId} could not be found`)
        }
    } catch (err) {
        next(err)
    }
}

async function valTrainer(req, res, next) {
    const { trainerId } = req.body

    try {
        const instructor = await Users.findBy({ userId: trainerId })

        if (instructor.isTrainer) {
            next()
        } else {
            res.status(400).json({
                message: "Nat a trainer"
            })
        }
    } catch (err) {
        next(err)
    }
}


module.exports = {
    valClassId,
    valUserId,
    valClass,
    valPairOnPost,
    valPairOnDelete,
    valTrainer,
}