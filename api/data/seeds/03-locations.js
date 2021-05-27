
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          name: "Mike's Garage",
          address: "123 Any Street"
        },
        {
          name: "Anna's Studio",
          address: "456 Other Street"
        },
        {
          name: "City Park",
          address: "789 Park Parkway"
        }
      ]);
    });
};
