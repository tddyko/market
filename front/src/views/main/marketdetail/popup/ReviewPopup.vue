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
          fab
          fixed
          bottom
          right
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          리뷰
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-toolbar-title>리뷰 작성</v-toolbar-title>
          <v-spacer />
          <v-btn
            icon
            dark
            @click="floating.dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-row>
          <v-col>
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col xl="12">
            <div class="text-h4">
              명륜진사갈비 반포점
            </div>
          </v-col>
          <v-col xl="12">
            <v-rating
              background-color="grey"
              color="warning"
              dense
              half-increments
              hover
              length="5"
              size="64"
              value="3"
            />
          </v-col>
          <v-col
            xl="10"
          >
            <v-textarea
              placeholder="리뷰를 입력하세요."
              auto-grow
              outlined
              rows="10"
              row-height="25"
              rounded
              class="p"
            />
          </v-col>
        </v-row>
        <v-row
          justify="center"
          dense
        >
          <v-col xl="1">
            <v-file-input
              hide-input
              prepend-icon="mdi-camera"
              height="40px"
            />
          </v-col>
          <v-col xl="1">
            <v-img
              class="white--text align-end"
              max-height="80"
              max-width="80"
              src="https://picsum.photos/80"
            />
          </v-col>
        </v-row>
        <v-row class="my-12">
          <v-col>
            <v-btn
              depressed
              color="primary"
            >
              리뷰 완료
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'ReviewPopup',
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      }
    }
  }
}
</script>
