<template>
  <v-app>
    <!-- nav -->
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            마켓로고
          </v-list-item-title>
          <v-list-item-subtitle>
            마켓 이름
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>No Wait</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: true,
    items: [
      {title: '대시보드', icon: 'mdi-view-dashboard', to: '/market'},
      {title: '주문관리', icon: 'mdi-clipboard-text', to: '/market/order'},
      {title: '예약관리', icon: 'mdi-account-multiple-outline', to: '/market/reservation'},
      {title: '기본정보', icon: 'mdi-account-multiple-outline', to: '/market/basic'},
      {title: '기본정보2', icon: 'mdi-account-multiple-outline', to: '/market/marketinform'}, // App.vue에 기본정보2에관한 내용추가
    ],
  }),
};
</script>
<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42a5f5;
  margin-top: 60px;
}
</style>
