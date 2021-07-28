module.exports = (sequelize, DataTypes) => {
    const Order_review_answer = sequelize.define("Order_review_answer", {
        Order_review_answer_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true,
            comment: "고유 아이디값",
        },
        answer: {
            type: DataTypes.STRING(1000),
            comment: "답변내용",
        },
    }, {
        sequelize,
        timestamps: true,               // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
        paranoid: true,                 // delete_at 컬럼 삭제된 시간 자동적용
        underscored: true,              // 컬럼에 자동으로 "_"적용
        modelName: 'Order_review_answer',          // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
        tableName: 'Order_review_answers',         // 실제 데이터베이스에 적용되는 테이블이름
        charset: 'utf8mb4',             // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
        collate: 'utf8mb4_general_ci',  // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
    });
    Order_review_answer.associate = models => {
        Order_review_answer.belongsTo(models.Market, {foreignKey: 'market_id', targetKey: 'market_id'});
        Order_review_answer.belongsTo(models.Member, {foreignKey: 'member_id', targetKey: 'member_id'});
        Order_review_answer.belongsTo(models.Order_review, {foreignKey: 'order_review_id', targetKey: 'order_review_id'});
    };
    return Order_review_answer;
}