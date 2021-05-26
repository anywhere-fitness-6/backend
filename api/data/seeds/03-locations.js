
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          locationId: 1,
          name: "Mike's Garage",
          address: "123 Any Street"
        },
        {
          locationId: 2,
          name: "Anna's Studio",
          address: "456 Other Street"
        },
        {
          locationId: 3,
          name: "City Park",
          address: "789 Park Parkway"
        }
      ]);
    });
};
