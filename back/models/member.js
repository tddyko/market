module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define("Member", {
        member_id: {
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
            comment: "멤버 로고 이미지",
        },
        id: {
            type: DataTypes.STRING(20),
            allowNull: false,
            comment: "멤버 로그인 아이디",
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: "멤버 로그인 비밀번호",
        },
        name: {
            type: DataTypes.STRING(16),
            allowNull: false,
            comment: "멤버 가입자 이름",
        },
        birthday: {
            type: DataTypes.STRING(14),
            allowNull: false,
            comment: "멤버 가입자 생년월일",
        },
        email: {
            type: DataTypes.STRING(20),
            allowNull: false,
            comment: "멤버 가입자 이메일",
        },
        nickname: {
            type: DataTypes.STRING(20),
            allowNull: false,
            comment: "멤버이름",
        },
        phonenumber: {
            type: DataTypes.STRING(13),
            allowNull: false,
            comment: "멤버 전화번호",
        },
        zipcode: {
            type: DataTypes.STRING(6),
            allowNull: false,
            comment: "멤버 우편번호",
        },
        address: {
            type: DataTypes.STRING(30),
            allowNull: false,
            comment: "멤버 주소",
        },
        dt_address: {
            type: DataTypes.STRING(30),
            allowNull: false,
            comment: "멤버 상세주소",
        },
    }, {
        sequelize,
        timestamps: true,               // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
        paranoid: true,                 // delete_at 컬럼 삭제된 시간 자동적용
        underscored: true,              // 컬럼에 자동으로 "_"적용
        modelName: 'Member',          // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
        tableName: 'Members',         // 실제 데이터베이스에 적용되는 테이블이름
        charset: 'utf8mb4',             // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
        collate: 'utf8mb4_general_ci',  // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
        hooks : {
            afterDestroy : (instance, options) => {
                instance.getOrders().then((user)=> {
                    user.forEach(element => {
                        element.destroy();
                    });
                    }),
                    instance.getReservations().then((user) => {
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
                    });
          }}
    });
    Member.associate = models => {
        Member.hasMany(models.Order, {foreignKey: 'member_id', sourceKey: 'member_id',onDelete :'cascade', hooks : true});
        Member.hasMany(models.Reservation, {foreignKey: 'member_id', sourceKey: 'member_id',onDelete :'cascade', hooks : true});
        Member.hasMany(models.Order_review, {foreignKey: 'member_id', sourceKey: 'member_id',onDelete :'cascade', hooks : true});
        Member.hasMany(models.Order_review_answer, {foreignKey: 'member_id', sourceKey: 'member_id',onDelete :'cascade', hooks : true});
        Member.hasMany(models.Reserve_review, {foreignKey: 'member_id', sourceKey: 'member_id',onDelete :'cascade', hooks : true});
        Member.hasMany(models.Reserve_review_answer, {foreignKey: 'member_id', sourceKey: 'member_id',onDelete :'cascade', hooks : true});
    };
    return Member;
}