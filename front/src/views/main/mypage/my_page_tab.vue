<template>
  <v-tabs
    v-model="tab"
  >
    <v-tabs-slider color="blue" />
    <v-tab
      v-for="title in tabTitle"
      :key="title.tab_title"
      class="font-weight-light text-h5 mx-4"
    >
      {{ title.tab_title }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "Mypagetab",
  computed: {
    tab: {
      get (){
        return this.$store.getters["mypage/getTab"]
      },
      set(value){
        this.$store.dispatch("mypage/actTab",value)
      }
    },
    tabTitle: {
      get (){
        return this.$store.getters["mypage/getTab_Title"]
      }
    }
  }
}
</script>

<style scoped>
</style>
