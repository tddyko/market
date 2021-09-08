<template>
  <v-speed-dial
    v-model="fab"
    bottom
    right
    fixed
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
    class="floating-btn"
  >
    <template #activator>
      <v-btn
        v-model="fab"
        color="blue darken-2"
        dark
        fab
      >
        <v-icon v-if="fab">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-pencil
        </v-icon>
      </v-btn>
    </template>
    <v-btn
      v-show="getTab === 2"
      fab
      dark
      small
      color="green"
      @click="setItem"
    >
      <v-icon>mdi-check-all</v-icon>
    </v-btn>
    <v-btn
      v-show="getTab === 3"
      fab
      dark
      small
      color="green"
      @click="setOptionItem"
    >
      <v-icon>mdi-check-all</v-icon>
    </v-btn>
    <v-btn
      v-show="getTab === 4"
      fab
      dark
      small
      color="green"
      @click="setItem"
    >
      <v-icon>mdi-check-all</v-icon>
    </v-btn>

    <!-- 추가버튼    -->
    <v-btn
      v-show="getTab === 2"
      fab
      dark
      small
      color="indigo"
      @click="setInsert_Menu"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn
      v-show="getTab === 3"
      fab
      dark
      small
      color="indigo"
      @click="setInsert_OptionGroup"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn
      v-show="getTab === 4"
      fab
      dark
      small
      color="indigo"
      @click="setInsert_Room"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <!-- 삭제버튼    -->
    <v-btn
      v-show="getTab === 2"
      fab
      dark
      small
      color="red"
      @click="setMenu_Dialog"
    >
      <v-icon>mdi-delete-forever</v-icon>
    </v-btn>
    <v-btn
      v-show="getTab === 3"
      fab
      dark
      small
      color="red"
      @click="setOption_Dialog"
    >
      <v-icon>mdi-delete-forever</v-icon>
    </v-btn>
    <v-btn
      v-show="getTab === 4"
      fab
      dark
      small
      color="red"
      @click="setRoom_Dialog"
    >
      <v-icon>mdi-delete-forever</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  name: "OptionButton",
  data: () => ({
    direction: 'top',
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    transition: 'slide-y-reverse-transition',
  }),
  computed: {
    getTab() {
      return this.$store.getters['info/Get_Tab']
    }
  },
  watch: {
    top(val) {
      this.bottom = !val
    },
    right(val) {
      this.left = !val
    },
    bottom(val) {
      this.top = !val
    },
    left(val) {
      this.right = !val
    },
  },
  methods: {
    setInsert_Menu() {
      this.$store.commit("menu/setNew_Menu")
    },
    updateMenu() {
      this.$store.commit("menu/updateMenu")
    },
    setDeleteMenu() {
      this.$store.commit("menu/setDelete")
    },
    setItem(){
      this.$store.commit("menu/updateMenu")
    },
    setMenu_Dialog(){
      this.$store.commit("menu/setMenu_Dialog")
    },
    setRoom_Dialog(){
      this.$store.commit("menu/setRoom_Dialog")
    },
    setOption_Dialog(){
      this.$store.commit("menu/setOption_Dialog")
    },
    setInsert_OptionGroup(){
      this.$store.commit("menu/setNewGroup")
    },
    setInsert_Room(){
    },
    setOptionItem(){
      this.$store.dispatch("menu/actOptionGroup")
    }
  },
}
</script>
