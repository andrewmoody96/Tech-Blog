const { User } = require(`../models`);
const bcrypt = require("bcrypt");

const userData = [
    {
        username: "amoody",
        email: "amoody@email.com",
        password: "password",
    },
    {
        username: "drausch",
        email: "drausch@email.com",
        password: "password",
    },
    {
        username: "jdaley",
        email: "jdaley@email.com",
        password: "password",
    },
];

User.beforeBulkCreate(async (users) => {
    for (const user of users) {
        user.password = await bcrypt.hash(user.password, 10);
    }
})

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;