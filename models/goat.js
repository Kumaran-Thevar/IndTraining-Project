module.exports = function(sequelize, DataTypes) {
	var Goat = sequelize.define("Goat", {
		goat_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		goat_color: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		goat_sex: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		goat_price: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isDecimal: true
			}
		},
	    picture_url: {
	      	type: DataTypes.STRING,
	      	allowNull: false,
	      	validate: {
	        	len: [1]
	      	}
		},
		goat_sold: {
	      	type: DataTypes.BOOLEAN,
	      	defaultValue:false,
	      	validate: {
	        	len: [1]
	      	}
	    }
	});

	Goat.associate = function(models) {
		Goat.hasMany(models.Transaction, {
			foreignKey: {
				allowNull: true
			}
		});
	};

	return Goat;
};