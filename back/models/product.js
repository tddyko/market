module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      product_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
        comment: "제품 고유 아이디값",
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "제품이름",
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "제품가격",
      },
      product_info: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "제품설명",
      },
    },
    {
      sequelize,
      timestamps: true, // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
      paranoid: true, // delete_at 컬럼 삭제된 시간 자동적용
      underscored: true, // 컬럼에 자동으로 "_"적용
      modelName: "Product", // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
      tableName: "Products", // 실제 데이터베이스에 적용되는 테이블이름
      charset: "utf8mb4", // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
      collate: "utf8mb4_general_ci", // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
      hooks: {
        afterDestroy: (instance, options) => {
          instance.getPd_option_groups().then((user) => {
            user.forEach((element) => {
              element.destroy();
            });
          }),
            instance.getProduct_imgs().then((user) => {
              user.forEach((element) => {
                element.destroy();
              });
            });
        },
      },
    }
  );
  Product.associate = (models) => {
    Product.hasMany(models.Pd_option_group, {
      foreignKey: "product_id",
      sourceKey: "product_id",
      onDelete: "cascade",
      hooks: true,
    });
    Product.hasMany(models.Product_img, {
      foreignKey: "product_id",
      sourceKey: "product_id",
      onDelete: "cascade",
      hooks: true,
    });
    Product.belongsTo(models.Market, {
      foreignKey: "market_id",
      targetKey: "market_id",
    });
    Product.belongsToMany(models.Order, { through: "order_product" });
    Product.belongsToMany(models.Category, { through: "product_category" });
  };

  return Product;
};
