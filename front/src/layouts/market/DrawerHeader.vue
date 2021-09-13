<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>
        <v-avatar
          class="mx-2 mb-2"
        >
          <img
            v-if="userInfo.profile_img"
            alt="마켓 로고"
            :src="imgSrc(userInfo.profile_img)"
          >
        </v-avatar>
      </v-list-item-title>
      <v-list-item-subtitle>
        <label class="text-h6">{{ userInfo.market_name }}</label>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "DrawerHeader",
  computed: {
    userInfo: {
      get() {
        return this.$store.getters["authentiCation/getMarketInfo"]
      },
    }
  },
  mounted() {
    console.log('정보를 가져오는 중...')
    this.$store.dispatch("authentiCation/actUserInfo")
  },
  methods : {
    imgSrc(name) {
      name = name.replaceAll("\\", "/");
      return this.$routerPort + name;
    }
  }
}
</script>

<style scoped>

</style>
