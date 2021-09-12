<template>
  <v-menu
    v-model="menu2"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        id="center-input"
        v-model="Date_center_join"
        hide-details
        filled
        class="rounded-xl font-weight-medium"
        color="white"
        prepend-icon="mdi-calendar"
        dense
        outlined
        readonly
        v-bind="attrs"
        :class="`text-${Font_Size}`"
        v-on="on"
      />
    </template>
    <v-date-picker
      v-model="dates"
      range
      @input="update"
    />
  </v-menu>
</template>

<script>
export default {
  name: "OrderReviewDatepicker",
  data() {
    return{
    }
  },
  computed: {
    menu2: {
      set(value){
       this.$store.dispatch("market_modules/Order_Set_Menu2_Actions", value)
      },
      get(){
       return this.$store.getters['market_modules/Order_Get_Menu2'];
      }
    },
    dates: {
      set(value) {
        this.$store.dispatch("market_modules/Order_Set_Dates_Actions", value)
      },
      get(){
        return this.$store.getters["market_modules/Order_Get_Dates"]
      },
    },
    Date_center_join () {
      return this.dates.join(' ~ ')
    },
    Font_Size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return 'sm-subtitle-1'
        case 'md':
          return 'md-subtitle-1'
        case 'lg':
          return 'lg-subtitle-1'
        case 'xl':
          return 'xl-subtitle-1'
        default :
          return 'h5'
      }
    }
  },
  methods: {
    update(){
      this.$store.commit('market_modules/Order_Update_Menu2')
    },
  }
}
</script>

<style>
#center-input{
  text-align: center
}
</style>
