module.exports = (sequelize, DataTypes) => {
    const Pd_option_group = sequelize.define("Pd_option_group", {
        pd_option_group_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true,
            comment: "옵션그룹 고유 아이디값",
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            comment: "옵션그룹 이름",
        },
    }, {
        sequelize,
        timestamps: true,               // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
        paranoid: true,                 // delete_at 컬럼 삭제된 시간 자동적용
        underscored: true,              // 컬럼에 자동으로 "_"적용
        modelName: 'Pd_option_group',          // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
        tableName: 'Pd_option_groups',         // 실제 데이터베이스에 적용되는 테이블이름
        charset: 'utf8mb4',             // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
        collate: 'utf8mb4_general_ci',  // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
    });
    Pd_option_group.associate = models => {
        Pd_option_group.hasMany(models.Pd_option, {foreignKey: 'pd_option_group_id', sourceKey: 'pd_option_group_id'});
    };
    return Pd_option_group;
};