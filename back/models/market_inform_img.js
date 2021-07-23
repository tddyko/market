module.exports = (sequelize, DataTypes) => {
    const Market_inform_img = sequelize.define("Market_inform_img", {
        market_infrom_img_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true,
            comment: "공지사항 이미지 고유아이디값",
        },
        market_inform_img: {
            type: DataTypes.BLOB('long'),
            comment: "이미지",
        },
    }, {
        sequelize,
        timestamps: true,               // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
        paranoid: true,                 // delete_at 컬럼 삭제된 시간 자동적용
        underscored: true,              // 컬럼에 자동으로 "_"적용
        modelName: 'Market_inform_img',          // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
        tableName: 'Market_inform_imgs',         // 실제 데이터베이스에 적용되는 테이블이름
        charset: 'utf8mb4',             // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
        collate: 'utf8mb4_general_ci',  // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
    });
    Market_inform_img.associate = models => {
        Market_inform_img.belongsTo(models.Market_inform, {foreignKey: 'market_inform_id', targetKey: 'market_inform_id'});
    };
    return Market_inform_img;
};