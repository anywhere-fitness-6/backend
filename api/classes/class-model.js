const db = require("../data")

function find() {
    return db("classes")
}

function findBy(filter) {
    return db("classes").where(filter).first()
}

async function add(data) {
    const[id] = await db("classes").insert(data, "classId")
    return db("classes").where("classId", id).first()
}

async function update(changes, id) {
    await db("classes").where("classId", id).update(changes)
    return db("classes").where("classId", id).first()
}

async function remove(id) {
    return db("classes").where({ classId: id}).del()
}

module.exports = {
    find,
    findBy,
    add,
    update,
    remove,
}