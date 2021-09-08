<template>
  <v-row justify="center">
    <v-dialog
      v-model="option_Dialog"
      max-width="500"
      persistent
    >
      <v-card>
        <v-card-title class="text-h6">
           {{get_dialog_menu_name}} 외 {{get_dialog_menu_count}} 건 정말로 삭제하시겠습니까?
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
            @click="setOption_Dialog"
          >
            아니요
          </v-btn>

          <v-btn
            color="error darken-1"
            class="pa-0"
            text
            outlined
            min-width="70"
            @click="setDeleteOptionGroup"
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
  name: "Optioncarddialog",
  data () {
    return {
    }
  },
  computed: {
    option_Dialog: {
      get () {
        return this.$store.getters["menu/getOption_Dialog"]
      }
    },
    get_dialog_menu_count(){
      let count = 0;
      count = this.$store.getters["menu/getOption_Checkbox"].length
      return count-1;
    },
    get_dialog_menu_name(){
      try{
        let index = this.$store.getters["menu/getMenu_Checkbox"][0]
        let data =  this.$store.getters["menu/getMenu"][index].name
        return data
      }catch{
        return null
      }
    }
  },
  methods: {
    setDeleteOptionGroup(e) {
      this.$store.dispatch("menu/actDeleteOption")
      this.setOption_Dialog()
      alert('삭제 되었습니다')
    },

    setOption_Dialog() {
      this.$store.commit("menu/setOption_Dialog")
    }
  }
}
</script>
