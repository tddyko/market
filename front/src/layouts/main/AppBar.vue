<template>
  <v-container>
    <v-app-bar
      app
      color="white"
    >
      <v-toolbar-title>
        <router-link to="/">
          <v-img
            src="@/assets/logo.png"
            max-width="165"
            max-height="30"
            contain
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="expand = !expand"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-expand-x-transition>
        <v-card
          v-show="expand"
          class="pa-2"
          color="transparent"
          elevation="0"
          width="600px"
        >
          <v-text-field
            clearable
            dense
            filled
            hide-details
            rounded
          />
        </v-card>
      </v-expand-x-transition>
      <v-btn
        icon
        to="/login"
      >
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
      <template
        v-if="$route.name === 'Main'"
        #extension
      >
        <main-tab-bar />
      </template>
    </v-app-bar>
  </v-container>
</template>
<script>
export default {
  name: "MainAppBar",
  components: {
    MainTabBar: () => import('@/layouts/main/Tab')
  },
  data: () => ({
    expand: false,
  }),
}
</script>

<style scoped>

</style>
