
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('client_classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('client_classes').insert([
        {
          clientId: 3,
          classId: 1,
          signUpDate: "5/25/21"
        },
        {
          clientId: 4,
          classId: 2,
          signUpDate: "5/26/21"
        },
        {
          clientId: 5,
          classId: 3,
          signUpDate: "5/27/21"
        },
        {
          clientId: 4,
          classId: 4,
          signUpDate: "5/28/21"
        },
        {
          clientId: 3,
          classId: 5,
          signUpDate: "5/29/21"
        }
      ]);
    });
};
