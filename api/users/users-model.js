const db = require("../data/db-config")

function find() {
    return db("users")
}

function findBy(filter) {
    return db("users").where(filter).first()
}

async function add(user) {
    const [userId] = await db("users").insert(user, "userId")
    return db("users").where({ userId }).first()
}

module.exports = {
    find,
    findBy,
    add,
}