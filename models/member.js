module.exports = function(sequelize, DataTypes) {
	var Member = sequelize.define("Member", {
     member_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    credit_card: {
      type: DataTypes.INTEGER,
      validate: {
        isDecimal: true
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }    
  });

  Member.associate = function(models) {
      Member.belongsTo(models.User, {
        foreignKey: {
        allowNull: true
      }
      });
  };

  Member.associate = function(models) {
    Member.hasMany(models.Transaction, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Member;
};