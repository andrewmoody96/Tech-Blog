const { User } = require(`../models`);

const userData = [
    {
        username: "rbobby96",
        email: "ricky@email.com",
        password: "password",
    },
    {
        username: "xena96",
        email: "xena@email.com",
        password: "password",
    },
    {
        username: "vferdinand96",
        email: "vincent@email.com",
        password: "password",
    },
    {
        username: "jjocat1",
        email: "john@email.com",
        password: "password",

    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;