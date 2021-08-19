module.exports = (sequelize, DataTypes) => {
  const Order_review_img = sequelize.define(
    "Order_review_img",
    {
      Order_review_img_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
        comment: "고유 아이디값",
      },
      Order_review_img: {
        type: DataTypes.STRING(100),
        comment: "리뷰이미지",
      },
    },
    {
      sequelize,
      timestamps: true, // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
      paranoid: true, // delete_at 컬럼 삭제된 시간 자동적용
      underscored: true, // 컬럼에 자동으로 "_"적용
      modelName: "Order_review_img", // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
      tableName: "Order_review_imgs", // 실제 데이터베이스에 적용되는 테이블이름
      charset: "utf8mb4", // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
      collate: "utf8mb4_general_ci", // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
    }
  );
  Order_review_img.associate = (models) => {
    Order_review_img.belongsTo(models.Order_review, {
      foreignKey: "order_review_id",
      targetKey: "order_review_id",
    });
  };
  return Order_review_img;
};
