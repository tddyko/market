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
      @input="menu = false"
    />
  </v-menu>
</template>

<script>
export default {
  name: "OrderReviewDatepicker",
  data() {
    return{
      menu2: false,
      dates: ["",""]
    }
  },
  computed: {
    manu : {
      get () {
        return this.$store.getters["order/Get_manu"]
      },
      set(value) {
        this.$store.commit('order/setManu', value)
      }
    },
    Date_center_join () {
      return this.dates.join(' ~ ')
    },
    Font_Size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'md':
          return 'md-subtitle-1'
        case 'lg':
          return 'lg-h6'
        case 'xl':
          return 'xl-h6'
        default :
          return ''
      }
    }
  }
}
</script>

<style>
#center-input{
  text-align: center
}
</style>
