exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('userId')
      users.string('firstName').notNullable()
      users.string('lastName').notNullable()
      users.string('email').notNullable()
      users.string('password').notNullable()
      users.boolean('isTrainer').notNullable().defaultTo(false)
      users.timestamps(false, true)
    })

  await knex.schema
    .createTable('locations', (locations) => {
      locations.increments('locationId')
      locations.string('name').notNullable()
      locations.string('address').notNullable()
    })

  await knex.schema
    .createTable('classes', (classes) => {
      classes.increments('classId')
      classes.integer('trainerId')
        .notNullable()
        .references('userId')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      classes.string("className").notNullable()
      classes.string('type').notNullable()
      classes.time('startTime').notNullable()
      classes.date('date').notNullable()
      classes.integer('duration').notNullable()
      classes.string('intensityLevel').notNullable()
      classes.integer('location')
        .notNullable()
        .references('locationId')
        .inTable('locations')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
      classes.integer('currentRegistered').notNullable().defaultTo(0)
      classes.integer('maxRegistered').notNullable()
    })

  await knex.schema
    .createTable('client_classes', (c_c) => {
      c_c.integer('clientId')
        .notNullable()
        .references('userId')
        .inTable('users')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
      c_c.integer('classId')
        .notNullable()
        .references('classId')
        .inTable('classes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      c_c.date('signUpDate').notNullable().defaultTo(knex.raw('current_timestamp'))
      c_c.primary(['clientId', "classId"])
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('client_classes')
  await knex.schema.dropTableIfExists('classes')
  await knex.schema.dropTableIfExists('locations')
  await knex.schema.dropTableIfExists('users')
}
