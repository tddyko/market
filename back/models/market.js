module.exports = (sequelize, DataTypes) => {
    const Market = sequelize.define("Market", {
        market_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true,
            comment: "고유 아이디값",
        },
        profile_img: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: "마켓 로고 이미지",
        },
        id: {
            type: DataTypes.STRING(20),
            allowNull: false,
            comment: "마켓 로그인 아이디",
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: "마켓 로그인 비밀번호",
        },
        name: {
            type: DataTypes.STRING(16),
            allowNull: false,
            comment: "마켓 가입자 이름",
        },
        birthday: {
            type: DataTypes.STRING(14),
            allowNull: false,
            comment: "마켓 가입자 생년월일",
        },
        email: {
            type: DataTypes.STRING(20),
            allowNull: false,
            comment: "마켓 가입자 이메일",
        },
        market_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            comment: "마켓이름",
        },
        phonenumber: {
            type: DataTypes.STRING(13),
            allowNull: false,
            comment: "가입자 전화번호",
        },
        market_phone : {
            type: DataTypes.STRING(13),
            allowNull: false,
            comment: "마켓 전화번호",
        },
        zipcode: {
            type: DataTypes.STRING(6),
            allowNull: false,
            comment: "마켓 우편번호",
        },
        address: {
            type: DataTypes.STRING(30),
            allowNull: false,
            comment: "마켓 주소",
        },
        dt_address: {
            type: DataTypes.STRING(30),
            allowNull: false,
            comment: "마켓 상세주소",
        },
    }, {
        sequelize,
        timestamps: true,               // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
        paranoid: true,                 // delete_at 컬럼 삭제된 시간 자동적용
        underscored: true,              // 컬럼에 자동으로 "_"적용
        modelName: 'Market',          // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
        tableName: 'Markets',         // 실제 데이터베이스에 적용되는 테이블이름
        charset: 'utf8mb4',             // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
        collate: 'utf8mb4_general_ci',  // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
        hooks : {
            afterDestroy : (instance, options) => {
                instance.getOrders().then((user)=> {
                    user.forEach(element => {
                        element.destroy();
                    });
                    }),
                    instance.getOrder_reviews().then((user) => {
                        user.forEach(element => {
                            element.destroy();
                        });
                    }),
                    instance.getOrder_review_answers().then((user) => {
                        user.forEach(element => {
                            element.destroy();
                        });
                    }),
                    instance.getReserve_reviews().then((user) => {
                        user.forEach(element => {
                            element.destroy();
                        });
                    }),
                    instance.getReserve_review_answers().then((user) => {
                        user.forEach(element => {
                            element.destroy();
                        });
                    }),
                    instance.getMarket_inform().then((user) => {
                        user.forEach(element => {
                            element.destroy();
                        });
                    });
          }}
    });
    Market.associate = models => {
        Market.hasMany(models.Order, {foreignKey: 'market_id', sourceKey: 'market_id',onDelete :'cascade', hooks : true});
        Market.hasMany(models.Order_review, {foreignKey: 'market_id', sourceKey: 'market_id',onDelete :'cascade', hooks : true});
        Market.hasMany(models.Order_review_answer, {foreignKey: 'market_id', sourceKey: 'market_id',onDelete :'cascade', hooks : true});
        Market.hasMany(models.Reservation, {foreignKey: 'market_id', sourceKey: 'market_id',onDelete :'cascade', hooks : true});
        Market.hasMany(models.Reserve_review, {foreignKey: 'market_id', sourceKey: 'market_id',onDelete :'cascade', hooks : true});
        Market.hasMany(models.Reserve_review_answer, {foreignKey: 'market_id', sourceKey: 'market_id',onDelete :'cascade', hooks : true});
        Market.hasOne(models.Market_inform, {foreignKey: 'market_id', sourceKey: 'market_id',onDelete :'cascade', hooks : true});
        Market.belongsToMany(models.Category, {through: 'market_category'});
    };
    return Market;
}