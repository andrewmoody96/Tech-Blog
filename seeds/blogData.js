const { Blog } = require(`../models`);

const blogData = [
    {
        title: "Intel or M1?",
        content: "I understand the move to proprietary designs, but until my 2019 MBP dies, I will be an Intel stan.",
        user_id: 1,
        date_created: "2022-04-20"
        
    },
    {
        title: "Linux for web development?",
        content: "My understanding and confidence in the command line has increased greatly. If anybody has any experience working exclusively in Linux for web development, I would love to hear your opinions.",
        user_id: 3,
        date_created: "2021-06-09"
    },
    {
        title: "Good Printers?",
        content: "Printers are useful, but often give the most issues of all of my technological devices. Are there any recommendations for reasonably priced printer that is known to be very reliable?",
        user_id: 2,
        date_created: "2021-10-20"
    },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;