module.exports = function(sequelize, Datatypes) {
	var Transaction = sequelize.define("Transaction", {
	});

	Transaction.associate = function(models) {
		Transaction.belongsTo(models.Member, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	Transaction.associate = function(models) {
		Transaction.belongsTo(models.Goat, {
			foreignKey: {
				allowNull: false
			}
		});
	};



	return Transaction;
};