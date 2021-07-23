module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        category_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            allowNull: false,
            primaryKey: true,
            comment: "카테고리 고유 아이디",
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            comment: "카테고리 이름",
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
    Category.associate = models => {
        Category.belongsToMany(models.Market, {through: 'market_category'});
        Category.belongsToMany(models.Product, {through: 'product_category'})
    };
    return Category;
};