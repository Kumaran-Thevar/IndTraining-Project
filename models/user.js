// // Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// // sometimes causes errors on Windows machines
// var bcrypt = require("bcrypt-nodejs");
// // Creating our User model
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  User.associate = function(models) {
    User.hasMany(models.Member, {
      foreignKey: {
        allowNull: true
      }
    });
  };

// Dont need bcrypt and passport

  return User;

};
