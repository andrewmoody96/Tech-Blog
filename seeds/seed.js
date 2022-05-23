const sequelize = require('../config/connection');
const seedUser = require(`./userData`);
const seedBlog = require(`./libraryData`);
const seedComment = require(`./commentData`);
const seedPostComment = require(`./libraryBookData`);

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  
  await seedBlog();
  
  await seedComment();
  
  await seedPostComment();


  process.exit(0);
};

seedDatabase();
