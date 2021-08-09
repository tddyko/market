<template>
  <v-app>
    <!-- nav -->
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              마켓로고
            </v-list-item-title>
            <v-list-item-subtitle class="text-h6 ">
              마켓 이름 점
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item
          :to="itemtest.to"
        >
          <v-list-item-icon>
            <v-icon v-text="itemtest.icon" />
          </v-list-item-icon>
          <v-list-item-content class="mr-16">
            <v-list-item-title v-text="itemtest.title" />
          </v-list-item-content>
        </v-list-item>


        <v-list-group
          v-for="items in item"
          :key="items.title"
          v-model="items.active"
          :prepend-icon="items.icon"
        >
          <template
            #activator
          >
            <v-list-item-content>
              <v-list-item-title v-text="items.title" />
            </v-list-item-content>
          </template>


          <v-list-item
            v-for="child in items.items"
            :key="child.title"
            :to="child.to"
          >
            <v-list-item-content>
              <v-list-item-title
                v-text="child.title"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
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

    <v-main id="main">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: null,
    itemtest:{title: '대시보드', icon: 'mdi-view-dashboard', to: '/market'},

    item: [
      {title: '주문관리', icon: 'mdi-clipboard-text', to: '/market/order', items: [
        {title: '주문내역',  to: '/market/주문내역.vue'},
        {title: '주문관리',  to: '/reservate/리뷰관리'},
      ]
      },
      {title: '예약관리', icon: 'mdi-account-multiple-outline', items: [
        {title: '예약내역',  to: '/reservate/예약내역'},
        {title: '예약관리',  to: '/reservate/리뷰관리'},

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
#main{
  background-color: #fbfcfd;
}
</style>
