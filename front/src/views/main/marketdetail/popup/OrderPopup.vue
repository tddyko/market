<template>
  <v-row justify="center">
    <v-dialog
      v-model="floating.dialog"
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
          주문
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-toolbar-title>결제창</v-toolbar-title>
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
        <v-row>
          <v-col>
            <div class="text-h3">
              허니콤보
            </div>
            <div class="text-subtitle-1 text--secondary my-4">
              메뉴 소개
            </div>
          </v-col>
        </v-row>

        <v-divider />

        <v-row
          justify="space-between"
          class="my-5"
        >
          <v-col>
            <div class="text-h6 font-weight-bold">
              가격
            </div>
          </v-col>
          <v-col>
            <div class="text-h6 font-weight-bold">
              29,000원
            </div>
          </v-col>
        </v-row>

        <v-divider />

        <v-row
          justify="center"
          class="my-5"
        >
          <v-col
            xl="7"
            
          >
            <v-radio-group v-model="floating.radioGroup">
              <v-radio
                v-for="n in 3"
                :key="n"
                :label="`메뉴 ${n}`"
                :value="n"
              />
            </v-radio-group>
          
          </v-col>
          <v-col
            xl="7"
          >
            <v-radio-group v-model="floating.radioGroup">
              <v-radio
                v-for="n in 3"
                :key="n"
                :label="`메뉴 ${n}`"
                :value="n"
              />
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="text-h6 font-weight-bold my-5">
              총 합계
            </div>
          </v-col>
          <v-col>
            <div class="text-h6 font-weight-bold my-5">
              29,000원
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              depressed
              color="primary"
            >
              결제하기
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'OrderPopup',
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      }
    }
  }
}
</script>
