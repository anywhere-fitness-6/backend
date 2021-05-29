const db = require("../data")

function find() {
    return db("client_classes").orderBy("classId").orderBy("userId")
}

function findBy(filter) {
    return db("client_classes as cc").where(filter)
        .join("users as u", "cc.clientId", "u.userId")
        .join("classes as c", "cc.classId", "c.classId")
        .join("locations as l", "c.locationId", "l.locationId")
        .select("u.firstName", "u.lastName", "c.className", "c.type", "c.startTime", "c.date", "c.duration", "c.intensityLevel", "l.name", "l.address", "c.currentRegistered", "c.maxRegistered")
}

function findByClassId(id) {
    return db("client_classes as cc").where("cc.classId", id)
    .join("users as u", "cc.clientId", "u.userId")
    .join("classes as c", "cc.classId", "c.classId")
    .join("locations as l", "c.locationId", "l.locationId")
    .select("u.firstName", "u.lastName", "c.className", "c.type", "c.startTime", "c.date", "c.duration", "c.intensityLevel", "l.name", "l.address", "c.currentRegistered", "c.maxRegistered")
    .orderBy("c.classId").orderBy("u.userId")
}

async function findPair(userId, classId) {
    return db("client_classes")
        .where("userId", userId).where("classId", classId).first()
}

async function add(data) {
    const [id] = await db("client_classes").insert(data, "cc.clientId")
    return findBy({ cc_id: id })
}

function remove(data) {
    const { userId, classId } = data
    return db("client_classes")
    .where({ userId }).where({ classId }).del()
}


module.exports = {
    find,
    findBy,
    findByClassId,
    findPair,
    add,
    remove,
}