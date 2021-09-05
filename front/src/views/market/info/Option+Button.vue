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
      fab
      dark
      small
      color="green"
      @click="updateMenu"
    >
      <v-icon>mdi-check-all</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="indigo"
      @click="setNewItem"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="red"
      @click="setDeleteMenu"
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
  computed: {},
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
    setNewItem() {
      this.$store.commit("menu/setNew_Menu")
    },
    updateMenu() {
      this.$store.commit("menu/updateMenu")
    },
    setDeleteMenu() {
      this.$store.commit("menu/setDelete")
    }
  },
}
</script>
