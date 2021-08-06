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
        <template
          v-for="(item, index) in items"
        >
          <v-list-group 
            v-if="item.items"
            :key="index"
            link
            items="item.items"
          > 
            <template #activator>
              <v-list-item-content>
                <v-list-item-title>예약관리2</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, icon], index) in item.items"
              :key="index"
              link
              :to="item.to"
            >
              <v-list-item-title v-text="title" />

              <v-list-item-icon>
                <v-icon v-text="icon" />
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        
          <v-list-item
            v-else
            :key="index"
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
        </template>
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
      {title: '기본정보2', icon: 'mdi-account-multiple-outline', to: '/market/basic2'},
      {title: '주문내역2', icon: 'mdi-account-multiple-outline', to: '/market/order2'},
      {title: '로그인', icon: 'mdi-account-multiple-outline', to: '/market/login'},
      {title: '예약관리2', icon: 'mdi-account-multiple-outline', items: [
        {title: '리뷰관리', icon: 'mdi-account-multiple-outline', to: '/reservate/예약내역'},
        {title: '예약내역', icon: 'mdi-account-multiple-outline', to: '/reservate/리뷰관리'},

      ]},
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
