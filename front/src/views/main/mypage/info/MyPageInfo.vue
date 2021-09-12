<template>
  <form>
    <v-container>
      <v-row
        align="center"
        class="mb-5"
        justify="center"
      >
        <v-col
          align="center"
          align-self="center"
          cols="2"
        >
          프로필 이미지
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          align="center"
          align-self="center"
          cols="2"
        >
          <v-avatar
            color="grey"
            rounded="fill"
            size="120"
          >
            <v-img
              v-if="imgPreview!==null"
              :src="imgPreview"
            />
          </v-avatar>
        </v-col>
        <v-col
          align="center"
          align-self="center"
          cols="3"
        >
          <input
            ref="mypage_img_input"
            hidden
            type="file"
            @change="Mypage_img_privew"
          >
          <v-btn
            outlined
            rounded
            @click="Mypage_input_img_click"
          >
            바꾸기
            <v-icon
              bottom
              right
            >
              mdi-camera
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          align="center"
          align-self="center"
          cols="2"
        >
          ID
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          align="start"
          align-self="center"
          cols="2"
        >
          {{ userInfo.id }}
        </v-col>
        <v-col cols="3" />
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          align="center"
          align-self="center"
          cols="2"
        >
          e-mail
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          align="start"
          align-self="center"
          cols="2"
        >
          {{ userInfo.email }}
        </v-col>
        <v-col cols="3" />
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          align="center"
          align-self="center"
          cols="2"
        >
          닉네임
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          align="start"
          align-self="center"
          cols="2"
        >
          <v-text-field
            v-model="changeData.nickname"
            color="primary"
            dense
            hide-details
            outlined
            placeholder="닉네임을 입력 해 주세요"
          />
        </v-col>
        <v-col cols="3">
          <v-btn
            color="primary"
            @click="checkNickName"
          >
            중복확인
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          align="center"
          align-self="center"
          cols="2"
        >
          비밀번호
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          align="start"
          align-self="center"
          cols="2"
        >
          <v-text-field
            v-model="changeData.password"
            :value="changeData.password"
            color="primary"
            dense
            hide-details
            outlined
            placeholder="최대 15자"
          />
        </v-col>
        <v-col cols="3" />
      </v-row>
    </v-container>
    <!-- 수정버튼    -->
    <div class="text-center">
      <v-btn
        class="pa-0 ma-10"
        color="primary"
        @click="submitChange"
      >
        수정
      </v-btn>
    </div>
  </form>
</template>

<script>
export default {
  name: "MyPageInfo",
  data(){
    return{
      imgPreview : null
    }
  },
  computed :{
    userInfo: {
      get(){
        return this.$store.getters["authentiCation/getUserInfo"]
      }
    },
    changeData:{
      get(){
        return this.$store.getters["mypage/getChangeData"]
      },
      set(v){
        this.$store.commit("mypage/setChangeData",v)
      }
    }
  },
  created() {
    this.$store.dispatch("authentiCation/actUserInfo")
  },
  methods:{
    Mypage_input_img_click(){
      this.$refs.mypage_img_input.click();
    },
    Mypage_img_privew(){
      // URL.createObjectURL(this.$refs.mypage_img_input.files[0])
      this.$store.getters["mypage/getChangeData"].profile_img =this.$refs.mypage_img_input.files[0]
      this.imgPreview = URL.createObjectURL(this.$refs.mypage_img_input.files[0])
    },
    checkNickName(){
      this.$store.dispatch("mypage/checkNickName",
        this.$store.getters["mypage/getChangeData"].nickName)
    },
    submitChange(){
      console.log('버튼')
      console.log(this.$store.getters["mypage/getChangeData"])
      this.$store.dispatch("mypage/actChangeMemberInfo",this.$store.getters["mypage/getChangeData"])
      location.reload()
    }
  }
}
</script>

<style scoped>
.test{
  border-right: 0.1em solid rgba(0, 0, 0, 0.12);
  height: 40px;
  max-width: 0;
}
</style>
