const { Comment } = require(`../models`);

const commentData = [
    {
        content: "For context, I purchased my current Mac which came with macOS Catalina out of the box. The big under the hood change was that it no longer supported 32-bit applications. On top of the $3,000 laptop, I spent another $500 upgrading my required applications. The M1 will someday have the same level of support as Intel, but until that day, I will not make any sort of significant change to my OS and certainly not my chip architecture.",
        blog_id: 1,
        user_id: 1,
        date_created: "2022-04-22"
    },
    {
        content: "Like most things in Linux, the setup is the hardest part. However, once you've installed all of the proper packages, it is a great system to work with. You are able to customize your system to work exactly the way you need it to without all the baked in frills of other OS's. Support for testing with Safari is doable, but not as accessible as Chrome or Firefox.",
        blog_id: 2,
        user_id: 3,
        date_created: "2021-08-22"
    },
    {
        content: "You're on your own with this one. I hate printers.",
        blog_id: 3,
        user_id: 1,
        date_created: "2021-02-22"
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;