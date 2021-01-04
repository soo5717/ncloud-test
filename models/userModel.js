module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        pwd: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        tableName: 'users',
        underscored: true,
        timestamps: false,
        indexes: [{unique: true, fields: ['email']}]
    });
};