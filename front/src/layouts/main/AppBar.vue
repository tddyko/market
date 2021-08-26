<template>
  <v-container>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>No Wait</v-toolbar-title>
      <v-spacer />
      <v-btn
        dark
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
          dark
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
