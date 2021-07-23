module.exports = (sequelize, DataTypes) => {
    const Market_inform = sequelize.define("Market_inform", {
        market_inform_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true,
            comment: "마켓정보 이름",
        },
        market_phone: {
            type: DataTypes.STRING(20),
            comment: "마켓 매장 전화번호",
        },
        start_time: {
            type: DataTypes.TIME,
            comment: "영업 시작시간",
        },
        end_time: {
            type: DataTypes.TIME,
            comment: "영업 종료시간",
        },
        week_holiday: {
            type: DataTypes.INTEGER.UNSIGNED,
            comment: "휴무일",
        },
       market_coment: {
            type: DataTypes.STRING(50),
           comment: "소개문구",
        },
        market_noti: {
            type: DataTypes.STRING(45),
            comment: "공지사항",
        },
    }, {
        sequelize,
        timestamps: true,               // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
        paranoid: true,                 // delete_at 컬럼 삭제된 시간 자동적용
        underscored: true,              // 컬럼에 자동으로 "_"적용
        modelName: 'Category',          // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
        tableName: 'Categorys',         // 실제 데이터베이스에 적용되는 테이블이름
        charset: 'utf8mb4',             // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
        collate: 'utf8mb4_general_ci',  // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
    });
    Market_inform.associate = models => {
        Market_inform.hasMany(models.Market_inform_img, {foreignKey: 'market_inform_id', sourceKey: 'market_inform_id'});
        Market_inform.belongsTo(models.Market, {foreignKey: 'market_id', targetKey: 'market_id'});
    };
    return Market_inform;
};