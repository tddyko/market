module.exports = (sequelize, DataTypes) => {
    const Market_inform_holiday = sequelize.define("Market_inform_holiday", {
        market_infrom_holiday_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true,
            comment: "휴무일 고유 아이디값",
        },
        market_inform_week_holiday: {
            type: DataTypes.STRING(20),
            comment: "몇째주인지",
        },
        market_inform_day_holiday: {
            type: DataTypes.STRING(20),
            comment: "무슨요일인지",
        },
    }, {
        sequelize,
        timestamps: true,               // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
        paranoid: true,                 // delete_at 컬럼 삭제된 시간 자동적용
        underscored: true,              // 컬럼에 자동으로 "_"적용
        modelName: 'Market_inform_holiday',          // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
        tableName: 'Market_inform_holidays',         // 실제 데이터베이스에 적용되는 테이블이름
        charset: 'utf8mb4',             // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
        collate: 'utf8mb4_general_ci',  // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
    });
    Market_inform_holiday.associate = models => {
        Market_inform_holiday.belongsTo(models.Market_inform, {foreignKey: 'market_inform_id', targetKey: 'market_inform_id'});
    };
    return Market_inform_holiday;
};