const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// TO-DO: Change this path.
const { bookApi, bulkApi } = require('../utils/bookApi.js');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(),
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        date_created: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    // {
    //     hooks: {
    //         async beforeBulkCreate(newCommentData) {
    //             return await bulkApi(newCommentData);
    //         },
    //         async beforeCreate(newBookData) {
    //             console.log("WE HIT BEFORE CREATE:", '\n', newBookData);
    //             return await bookApi(newBookData);
    //         },
    //     },
    //     sequelize,
    //     timestamps: false,
    //     freezeTableName: true,
    //     underscored: true,
    //     modelName: 'book',
    // }
);

module.exports = Comment;