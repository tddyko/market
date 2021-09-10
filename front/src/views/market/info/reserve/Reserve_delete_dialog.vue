<template>
  <v-row justify="center">
    <v-dialog
      v-model="room_Dialog"
      max-width="500"
      persistent
    >
      <v-card>
        <v-card-title class="text-h6">
          {{ get_dialog_menu_name }} 외 {{ get_dialog_menu_count }}건 정말로 삭제하시겠습니까?
        </v-card-title>
        <v-divider />
        <v-card-text
          class="text-body-1 error--text"
        >
          주의! 삭제시 복구할수 없습니다.
        </v-card-text>
        <v-card-actions>
          <v-spacer />

          <v-btn
            color="green darken-1"
            class="pa-0"
            text
            outlined
            min-width="70"
            @click="setRoom_Dialog"
          >
            아니요
          </v-btn>

          <v-btn
            color="error darken-1"
            class="pa-0"
            text
            outlined
            min-width="70"
            @click="setDeleteMenu"
          >
            네
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Roomcarddialog",
  data () {
    return {
    }
  },
  computed: {
    room_Dialog: {
      get () {
        return this.$store.getters["menu/getRoom_Dialog"]
      }
    },
    get_dialog_menu_count(){
      let count = 0;
      count = this.$store.getters["menu/getRoom_Checkbox"].length
      return count-1;
    },
    get_dialog_menu_name(){
      console.log(this.$store.getters["menu/getRoom_Checkbox"][0])
      try{
        let index = this.$store.getters["menu/getRoom_Checkbox"][0]
        let data =  this.$store.getters["menu/getRoom"][index].room_name
        return data
      }catch{
        return null
      }
    }
  },
  methods: {
    setDeleteMenu() {
      this.$store.dispatch("menu/actRoomDelete")
      this.setRoom_Dialog()
    },
    setRoom_Dialog() {
      this.$store.commit("menu/setRoom_Dialog")
    }
  }
}
</script>
