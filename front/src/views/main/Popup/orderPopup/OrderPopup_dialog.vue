<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          주문하기
        </v-btn>
      </template>
      <OrderPopupCard />
    </v-dialog>
  </v-row>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name : 'OrderPopupdialog' ,

  components: {
    OrderPopupCard : () => import('@/views/main/Popup/orderPopup/OrderPopup_card'),
  },
  data () {
    return {
      dialog: false,
    }
  },
/*  computed: {
    dialog:{
      ...mapGetters[{
        get : 'getdialog',
      }],
    },
  }*/
}
</script>
