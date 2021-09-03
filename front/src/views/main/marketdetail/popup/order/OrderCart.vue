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
          hint="소스 많이 부어주세요, 6시 전까지 배달해주세요"
          label="주문 상세 요청 기입"
          outlined
          persistent-hint
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
              align="center"
              cols="3"
            >
              <v-img
                class="rounded-lg"
                height="110"
                lazy-src="https://picsum.photos"
                src="https://picsum.photos/150"
                width="110"
              />
            </v-col>
            <v-col
              cols="5"
            >
              <v-card-title>허니콤보</v-card-title>
              <v-card-text class="text-left text--secondary">
                메뉴 설명
              </v-card-text>
              <v-card-text class="text-left font-weight-bold price">
                9,900원
              </v-card-text>
            </v-col>
            <v-col
              cols="4"
            >
              <v-btn
                v-if="reservations_Number === 0"
                :min-height="`${btn_Height_Size}`"
                :min-width="`${btn_Width_Size}`"
                class="btn-people pa-0"
                disabled
                outlined
                @click="setReservations_number_minus"
              >
                -
              </v-btn>
              <v-btn
                v-else
                :min-height="`${btn_Height_Size}`"
                :min-width="`${btn_Width_Size}`"
                class="btn-people pa-0"
                outlined
                @click="setReservations_number_minus"
              >
                -
              </v-btn>
              <span>{{ reservations_Number }}</span>
              <v-btn
                :min-height="`${btn_Height_Size}`"
                :min-width="`${btn_Width_Size}`"
                class="btn-people pa-0"
                outlined
                @click="setReservations_number_plus"
              >
                +
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
          return '24'
        case 'md':
          return '64'
        case 'lg':
          return '64'
        case 'xl':
          return '64'
        default :
          return '20'
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
          return '36  '
        default :
          return '5'
      }
    }
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
