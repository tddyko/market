<template>
  <v-row justify="center">
    <v-dialog
      v-model="menu_Dialog"
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
            @click="setMenu_Dialog"
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
  name: "Reservecarddialog",
  data () {
    return {
    }
  },
  computed: {
    menu_Dialog: {
      get () {
        return this.$store.getters["menu/getMenu_Dialog"]
      }
    },
    get_dialog_menu_count(){
      let count = 0;
      for (let i = 0; i < this.$store.getters["menu/getMenu_Checkbox"].length; i++) {
        for (let j = 0; j < this.$store.getters["menu/getMenu"].length; j++) {
          if (this.$store.getters["menu/getMenu"][j].menu_id === this.$store.getters["menu/getMenu_Checkbox"][i]) {
            count++;
          }
        }
      }
      return count-1;
    },
    get_dialog_menu_name(){
      for (let i = 0; i < this.$store.getters["menu/getMenu_Checkbox"].length; i++) {
        for (let j = 0; j < this.$store.getters["menu/getMenu"].length; j++) {
          if (this.$store.getters["menu/getMenu"][j].menu_id === this.$store.getters["menu/getMenu_Checkbox"][i]) {
            return this.$store.getters["menu/getMenu"][j].menu_name;
          }
        }
      }
      return "에러";
    }
  },
  methods: {
    setDeleteMenu() {
      this.$store.commit("menu/setDelete")
      this.setMenu_Dialog()
    },
    setMenu_Dialog() {
      this.$store.commit("menu/setMenu_Dialog")
    }
  }
}
</script>
