
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          classId: 1,
          trainerId: 1,
          className: "Weight lifting",
          type: "Resistance",
          startTime: "10:00 am",
          date: "6/1/21",
          duration: 30,
          intensityLevel: "High",
          location: 1,
          currentRegistered: 1,
          maxRegistered: 3
        },
        {
          classId: 2,
          trainerId: 1,
          className: "Boxing",
          type: "Impact",
          startTime: "10:00 am",
          date: "6/2/21",
          duration: 60,
          intensityLevel: "Medium",
          location: 1,
          currentRegistered: 0,
          maxRegistered: 1
        },
        {
          classId: 3,
          trainerId: 2,
          className: "Pilates",
          type: "Stretching",
          startTime: "8:00 am",
          date: "6/1/21",
          duration: 30,
          intensityLevel: "Low",
          location: 2,
          currentRegistered: 4,
          maxRegistered: 8
        },
        {
          classId: 4,
          trainerId: 2,
          className: "Jogging",
          type: "Aerobic",
          startTime: "8:00 am",
          date: "6/3/21",
          duration: 60,
          intensityLevel: "Medium",
          location: 3,
          currentRegistered: 12,
          maxRegistered: 20
        },
        {
          classId: 5,
          trainerId: 2,
          className: "Sprints",
          type: "Anaerobic",
          startTime: "8:00 am",
          date: "6/5/21",
          duration: 20,
          intensityLevel: "High",
          location: 3,
          currentRegistered: 4,
          maxRegistered: 10
        },
      ]);
    });
};
