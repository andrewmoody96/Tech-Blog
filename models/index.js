const User = require('./User');
const Blog = require('./Blog');
const PostComment = require('./PostComment');
const Comment = require('./Comment');

User.hasMany(Blog, {
    foreignKey: `user_id`,
    onDelete: `SET NULL`,
});

Blog.belongsTo(User, {
    foreignKey: `user_id`,
});

User.hasMany(PostComment, {
    foreignKey: `user_id`,
    onDelete: `SET NULL`,
});

PostComment.belongsTo(User, {
    foreignKey: `user_id`,
});

Comment.belongsToMany(Blog, {
    through: {
        model: PostComment,
        unique: false
    },
    as: `comments`
});

Blog.belongsToMany(Comment, {
    through: {
        model: PostComment,
        unique: false
    },
    as: `blogs`
});

module.exports = { User, Blog, Comment, PostComment };
