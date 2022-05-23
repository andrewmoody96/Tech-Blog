const { Comment } = require(`../models`);

const commentData = [
    {
        comment: "Love this post, and Happy Valentine's Day!",
        date_created: '2022-02-14'
    },
    {
        comment: "Investigate 3/11.",
        date_created: '2022-03-11'
    },
    {
        comment: "Far out! Thanks for sharing.",
        date_created: '2022-04-20'
    },
    {
        comment: "Happy New Year! Any good resolutions?",
        date_created: '2022-01-01'
    },
    {
        comment: "Happy to hear this. Thanks for sharing.",
        date_created: '2022-02-11'
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;