<template>
  <v-card>
    <v-toolbar
      color="primary"
      dark
    >
      <v-toolbar-title>결제창</v-toolbar-title>
    </v-toolbar>
    <v-row class="ma-1">
      <v-col
        cols="12"
      >
        <div class="text-h5 mb-5">
          치킨러버
        </div>
        <div class="text-subtitle-1">
          경기도 김포시 장기동 000-000
        </div>
        <div class="text-subtitle-1">
          010-0000-0000
        </div>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="ma-1">
      <v-col
        cols="12"
      >
        <div class="text-h5">
          주문 상세 요청
        </div>
      </v-col>
      <v-col cols="10">
        <v-text-field
          hide-details
          label="주문 상세 요청 기입"
          outlined
        />
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="ma-1">
      <v-col cols="12">
        <div class="text-h5">
          장바구니 메뉴
        </div>
      </v-col>
      <v-col
        cols="12"
      >
        <v-card
          class="mx-auto my-10"
          flat
          outlined
        >
          <v-row
            align="center"
            class="mx-1"
            justify="center"
          >
            <v-col
              class="pa-0 ma-0"
              cols="2"
            >
              <v-img
                class="rounded-lg ma-2"
                :height="`${Img_size}`"
                lazy-src="https://picsum.photos"
                src="https://picsum.photos/150"
                :width="`${Img_size}`"
              />
            </v-col>
            <v-col
              cols="5"
            >
              <v-card-title :class="`text-${menuFont1} pa-0 my-3`">
                허니콤보
              </v-card-title>
              <v-card-text :class="`text-${menuFont2} text-left text--secondary pa-0 my-3`">
                메뉴 설명
              </v-card-text>
              <v-card-text :class="`text-${menuFont1} text-left font-weight-bold price pa-0 my-3`">
                9,900원
              </v-card-text>
            </v-col>
            <v-col
              cols="5"
              align="end"
            >
              <v-btn
                v-if="reservations_Number === 0"
                :min-height="`${btn_Height_Size}`"
                :min-width="`${btn_Width_Size}`"
                class="btn-people pa-0 mr-4 ml-0"
                disabled
                outlined
                @click="setReservations_number_minus"
              >
                <label
                  :class="`text-${countSize}`"
                >-</label>
              </v-btn>
              <v-btn
                v-else
                :min-height="`${btn_Height_Size}`"
                :min-width="`${btn_Width_Size}`"
                class="btn-people pa-0 mr-4 ml-0"
                outlined
                @click="setReservations_number_minus"
              >
                <label
                  :class="`text-${countSize}`"
                >-</label>
              </v-btn>
              <label
                :class="`text-${countSize}`"
              >{{ reservations_Number }}</label>
              <v-btn
                :min-height="`${btn_Height_Size}`"
                :min-width="`${btn_Width_Size}`"
                class="btn-people pa-0 ml-4 mr-0"
                outlined
                @click="setReservations_number_plus"
              >
                <label
                  :class="`text-${countSize}`"
                >+</label>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      class="ma-1"
      justify="center"
    >
      <v-col cols="auto">
        <v-btn
          color="grey"
          depressed
          @click="floating.orderDialog = false"
        >
          취소하기
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          color="primary"
          depressed
        >
          결제하기
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "OrderCart",
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      }
    },
    reservations_Number:{
      get() {
        return this.$store.getters["marketDetail/getReservations_number"]
      }
    },
    btn_Width_Size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return '44'
        case 'md':
          return '44'
        case 'lg':
          return '44'
        case 'xl':
          return '50'
        default :
          return '23'
        }
      },
    btn_Height_Size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return '16'
        case 'md':
          return '26'
        case 'lg':
          return '36'
        case 'xl':
          return '36'
        default :
          return '16'
      }
    },
    countSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return 'sm-body-2'
        default :
          return 'caption'
      }
    },
    menuFont1() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return 'sm-body-1'
        case 'md':
          return 'md-h6'
        case 'lg':
          return 'lh-h6'
        case 'xl':
          return 'xl-h6'
        default :
          return 'body-1'
      }
    },
    menuFont2() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return 'sm-caption'
        case 'md':
          return 'md-body-1'
        case 'lg':
          return 'lg-body-1'
        case 'xl':
          return 'xl-body-1'
        default :
          return 'caption'
      }
    },
    Img_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '90'
        case 'md' : return '100'
        case 'lg' : return '110'
        case 'xl' : return '120'
        default : return '60'
      }
    },
  },
  methods: {
    setReservations_number_plus(){
      this.$store.dispatch('marketDetail/actReservations_number_plus')
    },
    setReservations_number_minus(){
      this.$store.dispatch('marketDetail/actReservations_number_minus')
    },
  }
}
</script>
