<template>
  <form>
    <v-container>
      <v-row
        justify="center"
        align="center"
        class="mb-5"
      >
        <v-col
          cols="2"
          align="center"
          align-self="center"
        >
          프로필 이미지
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          cols="2"
          align="center"
          align-self="center"
        >
          <v-avatar
            rounded="fill"
            color="grey"
            size="120"
          >
          </v-avatar>
        </v-col>
        <v-col
          cols="3"
          align-self="center"
          align="center"
        >
          <input
            ref="mypage_img_input"
            type="file"
            hidden
            @change="Mypage_img_privew"
          >
          <v-btn
            rounded
            outlined
            @click="Mypage_input_img_click"
          >
            바꾸기
            <v-icon
              right
              bottom
            >
              mdi-camera
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="2"
          align="center"
          align-self="center"
        >
          ID
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          cols="2"
          align="start"
          align-self="center"
        >
          {{ userInfo.id }}
        </v-col>
        <v-col cols="3" />
      </v-row>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="2"
          align="center"
          align-self="center"
        >
          e-mail
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          cols="2"
          align="start"
          align-self="center"
        >
          {{ userInfo.email }}
        </v-col>
        <v-col cols="3" />
      </v-row>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="2"
          align="center"
          align-self="center"
        >
          닉네임
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          cols="2"
          align="start"
          align-self="center"
        >
          <v-text-field
            v-model="userInfo.nickname"
            dense
            hide-details
            outlined
            color="primary"
            :value="userInfo.nickname"
          />
        </v-col>
        <v-col cols="3">
          <v-btn color="primary">
            중복확인
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="2"
          align="center"
          align-self="center"
        >
          비밀번호
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          cols="2"
          align="start"
          align-self="center"
        >
          <v-text-field
            dense
            hide-details
            outlined
            placeholder="최대 15자"
            color="primary"
          />
        </v-col>
        <v-col cols="3" />
      </v-row>
    </v-container>
    <!-- 수정버튼    -->
    <div class="text-center">
      <v-btn
        type="submit"
        class="pa-0 ma-10"
        color="primary"
      >
        수정
      </v-btn>
    </div>
  </form>
</template>

<script>
export default {
  name: "Mypageform",
  computed :{
    userInfo: {
      get(){
        return this.$store.getters["authentiCation/getUserInfo"]
      }
    },
  },
  methods:{
    Mypage_input_img_click(){
      this.$refs.mypage_img_input.click();
    },
    Mypage_img_privew(){
       return  URL.createObjectURL(this.$refs.mypage_img_input.files[0])
    },
    nickNameCheck(){

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
