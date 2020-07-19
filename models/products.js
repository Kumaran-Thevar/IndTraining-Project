module.exports = function(sequelize, DataTypes) {
	var Product = sequelize.define("Product", {
		product_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		product_color: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		product_sex: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		product_price: {
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
		product_sold: {
	      	type: DataTypes.BOOLEAN,
	      	defaultValue:false,
	      	validate: {
	        	len: [1]
	      	}
	    }
	});

	Product.associate = function(models) {
		Product.hasMany(models.Transaction, {
			foreignKey: {
				allowNull: true
			}
		});
	};

	return Product;
};