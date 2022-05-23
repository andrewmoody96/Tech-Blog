const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PostComment extends Model { }

PostComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blog',
                key: 'id',
            },
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'comment',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'postcomment',
    }
);

module.exports = PostComment;