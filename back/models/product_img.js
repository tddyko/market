module.exports = (sequelize, DataTypes) => {
  const Product_img = sequelize.define(
    "Product_img",
    {
      product_img_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
        comment: "제품 이미지 고유 아이디값",
      },
      product_img: {
        type: DataTypes.STRING(100),
        comment: "이미지",
      },
    },
    {
      sequelize,
      timestamps: true, // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
      paranoid: true, // delete_at 컬럼 삭제된 시간 자동적용
      underscored: true, // 컬럼에 자동으로 "_"적용
      modelName: "Product_img", // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
      tableName: "Product_imgs", // 실제 데이터베이스에 적용되는 테이블이름
      charset: "utf8mb4", // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
      collate: "utf8mb4_general_ci", // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
    }
  );
  Product_img.associate = (models) => {
    Product_img.belongsTo(models.Product, {
      foreignKey: "product_id",
      targetKey: "product_id",
    });
  };
  return Product_img;
};
