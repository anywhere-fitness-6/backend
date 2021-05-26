exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          userId: 1,
          firstName: "Mike",
          lastName: "Muscles",
          email: "muscles@musclehead.com",
          password: "$2a$10$mLzg0iXebQ3xY1bik4kO4e/WXSRFltXWOWUfDPa6pDM/KML8XwWW2",
          isTrainer: true,
          created_at: "2021-05-25T17:10:49.115Z",
          updated_at: "2021-05-25T17:10:49.115Z"
        },
        {
          userId: 2,
          firstName: "Anna",
          lastName: "Roebic",
          email: "aroebic@breathefit.com",
          password: "$2a$10$2sUgz0OHG7cp2SRJX41I1OdlpLKMglF.2zjq60hSTRxPrUGNp7jHG",
          isTrainer: true,
          created_at: "2021-05-25T17:49:27.794Z",
          updated_at: "2021-05-25T17:49:27.794Z"
        },
        {
          userId: 3,
          firstName: "Elizabeth",
          lastName: "Allen",
          email: "eallen@gmail.com",
          password: "$2a$10$XQpZGXTjnMFovysXKqfrx.oEfxZWCH9jz0Q5VK7GJq3s7GxSJG9UG",
          isTrainer: false,
          created_at: "2021-05-25T17:55:45.119Z",
          updated_at: "2021-05-25T17:55:45.119Z"
        },
        {
          userId: 4,
          firstName: "Dylan",
          lastName: "Heart",
          email: "dheart@gmail.com",
          password: "$2a$10$q9xV4W0sB26GhqOsQFGbP.S1vD2.K2WFcwftLifBAETWXPwdNkRsm",
          isTrainer: false,
          created_at: "2021-05-25T17:58:07.172Z",
          updated_at: "2021-05-25T17:58:07.172Z"
        },
        {
          userId: 5,
          firstName: "Mike",
          lastName: "Flores",
          email: "mflores@gmail.com",
          password: "$2a$10$7QqwcHjVWPpiBYJtIr31eOlCYOQl9nCKNgznMk6jz2UY1yaaLutfq",
          isTrainer: false,
          created_at: "2021-05-25T18:20:40.438Z",
          updated_at: "2021-05-25T18:20:40.438Z"
        }
      ]);
    });
};
