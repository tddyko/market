<template>
  <v-card>
    <OrderPopupToolbar />
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
          29,000123원
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
        <v-radio-group v-model="radioGroup">
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
        <v-radio-group v-model="radioGroup">
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
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "OrderPopupCard",
  components: {
    OrderPopupToolbar: () => import('@/views/main/Popup/orderPopup/OrderPopup_toolbar'),
  },
  computed: {
    radioGroup:{
      ...mapGetters[{
        get:'getradioGroup'
      }],
      ...mapActions[{
        set :'setRadioGroup',
      }],
    }
  }
}
</script>

<style scoped>

</style>
