module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      reservation_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      reserve_date: {
        type: DataTypes.DATEONLY,
        comment: "예약 시간",
        allowNull: false,
      },
      reserve_time: {
        type: DataTypes.TIME,
        comment: "예약 시간",
        allowNull: false,
      },
      current_state: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "예약상태",
      },
      order_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "예약개수",
      },
      reserve_seat: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: "좌석구분"
      }
    },
    {
      sequelize,
      timestamps: true, // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
      paranoid: true, // delete_at 컬럼 삭제된 시간 자동적용
      underscored: true, // 컬럼에 자동으로 "_"적용
      modelName: "Reservation", // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
      tableName: "Reservations", // 실제 데이터베이스에 적용되는 테이블이름
      charset: "utf8mb4", // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
      collate: "utf8mb4_general_ci", // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
      hooks: {
        afterDestroy: (instance, options) => {
          instance.getReserve_reviews().then((user) => {
            user.forEach((element) => {
              element.destroy();
            });
          });
        },
      },
    }
  );
  Reservation.associate = (models) => {
    Reservation.hasMany(models.Reserve_review, {
      foreignKey: "reservation_id",
      sourceKey: "reservation_id",
      onDelete: "cascade",
      hooks: true,
    });
    Reservation.belongsTo(models.Market, {
      foreignKey: "market_id",
      targetKey: "market_id",
    });
    Reservation.belongsTo(models.Member, {
      foreignKey: "member_id",
      targetKey: "member_id",
    });
  };
  return Reservation;
};
