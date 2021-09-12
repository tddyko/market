<template>
  <form>
    <v-container>
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
          {{ userInfo.market_name }}
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
            :value="changeData.nickname"
            color="primary"
            dense
            hide-details
            outlined
          />
        </v-col>
        <v-col cols="3">
          <v-btn color="primary"
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
          v-model="changeData.password"
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
    <div class="text-center">
      <v-btn
        class="pa-0 ma-10"
        color="primary"
        type="submit"
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
  computed: {
    userInfo: {
      get() {
        return this.$store.getters["authentiCation/getMarketInfo"]
      },
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
    checkNickName(){
      console.log('asads')
      this.$store.dispatch("mypage/checkMarketName",
        this.$store.getters["mypage/getChangeData"].nickname)
    },
    submitChange(){
      console.log('버튼')
      console.log(this.$store.getters["mypage/getChangeData"])
      this.$store.dispatch("mypage/actChangeMarketInfo",this.$store.getters["mypage/getChangeData"])
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
