module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      order_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(16),
        allowNull: false,
        comment: "받을 사람 이름",
      },
      phonenumber: {
        type: DataTypes.STRING(13),
        allowNull: false,
        comment: "받을 사람 전화번호",
      },
      address: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: "받을 사람 주소",
      },
      dt_address: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: "받을 사람 상세주소",
      },
      requirements: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: "요청사항",
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "가격",
      },
      current_state: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "제품상태",
      },
      order_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "주문개수",
      },
    },
    {
      sequelize,
      timestamps: true, // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
      paranoid: true, // delete_at 컬럼 삭제된 시간 자동적용
      underscored: true, // 컬럼에 자동으로 "_"적용
      modelName: "Order", // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
      tableName: "Orders", // 실제 데이터베이스에 적용되는 테이블이름
      charset: "utf8mb4", // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
      collate: "utf8mb4_general_ci", // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
      hooks: {
        afterDestroy: (instance, options) => {
          instance.getOrder_reviews().then((user) => {
            user.forEach((element) => {
              element.destroy();
            });
          });
        },
      },
    }
  );
  Order.associate = (models) => {
    Order.hasMany(models.Order_review, {
      foreignKey: "order_id",
      sourceKey: "order_id",
      onDelete: "cascade",
      hooks: true,
    });
    Order.belongsTo(models.Market, {
      foreignKey: "market_id",
      targetKey: "market_id",
    });
    Order.belongsTo(models.Member, {
      foreignKey: "member_id",
      targetKey: "member_id",
    });
    Order.belongsToMany(models.Product, { through: "order_product" });
  };
  return Order;
};
