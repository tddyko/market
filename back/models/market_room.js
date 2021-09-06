module.exports = (sequelize, DataTypes) => {
    const Market_room = sequelize.define("Market_room", {
        room_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true,
            comment: "룸 아이디값",
        },
        room_name: {
            type: DataTypes.STRING(20),
            comment: "룸 이름",
        },
        room_comment: {
            type: DataTypes.STRING(45),
            comment: "룸 설명",
        },
        room_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "가격",
        },
       room_images: {
            type: DataTypes.STRING(100),
            comment: "룸 이미지",
        },
    }, {
        sequelize,
        timestamps: true,               // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
        paranoid: true,                 // delete_at 컬럼 삭제된 시간 자동적용
        underscored: true,              // 컬럼에 자동으로 "_"적용
        modelName: 'Market_room',          // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
        tableName: 'Market_rooms',         // 실제 데이터베이스에 적용되는 테이블이름
        charset: 'utf8mb4',             // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
        collate: 'utf8mb4_general_ci',  // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
    });
    Market_room.associate = models => {
        Market_room.belongsTo(models.Market, {foreignKey: 'market_id', targetKey: 'market_id'});
    };
    return Market_room;
};