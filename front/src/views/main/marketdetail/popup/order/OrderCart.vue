<template>
  <v-card>
    <v-toolbar
      color="white"
    >
      <v-toolbar-title>결제창</v-toolbar-title>
    </v-toolbar>
    <v-row class="ma-1">
      <v-col
        cols="12"
      >
        <v-col cols="10">
          <v-text-field
            hide-details
            label="주소"
            outlined
            placeholder="주소를 입력해주세요"
          />
        </v-col>
      </v-col>
      <v-col
        cols="12"
      >
        <v-col cols="10">
          <v-text-field
            hide-details
            label="상세주소"
            outlined
            placeholder="상세주소를 입력해주세요"
          />
        </v-col>
      </v-col>
      <v-col
        cols="12"
      >
        <v-col cols="10">
          <v-text-field
            hide-details
            label="전화번호"
            outlined
            placeholder="전화번호를 입력해주세요"
          />
        </v-col>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="ma-1">
      <v-col
        cols="12"
      >
        <v-col cols="10">
          <v-text-field
            hide-details
            label="주문 상세요청"
            outlined
            placeholder="상세요청을 입력해주세요"
          />
        </v-col>
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
            v-for="(order,index) in orderItems"
            :key="index"
          >
            <v-col
              class="pa-0 ma-0"
              cols="2"
            >
              <v-img
                :height="`${Img_size}`"
                :width="`${Img_size}`"
                class="rounded-lg ma-2"
                lazy-src="https://picsum.photos"
                src="https://picsum.photos/150"
              />
            </v-col>
            <v-col
              cols="5"
            >
              <v-card-title :class="`text-${menuFont1} pa-0 my-3`">
                {{order.name}}
              </v-card-title>
              <v-card-text :class="`text-${menuFont2} text-left text--secondary pa-0 my-3`">
                {{order.product_info}}
              </v-card-text>
              <v-card-text :class="`text-${menuFont1} text-left font-weight-bold price pa-0 my-3`">
                {{order.totalprice}}
              </v-card-text>
            </v-col>
            <v-col
              align="end"
              cols="5"
            >
              <v-btn
                v-if="order.quantity == 0"
                :min-height="`${btn_Height_Size}`"
                :min-width="`${btn_Width_Size}`"
                class="btn-people pa-0 mr-4 ml-0"
                disabled
                outlined
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
                @click="decrementItemQuantity(order)"
              >
                <label
                  :class="`text-${countSize}`"
                >-</label>
              </v-btn>
              <label
                :class="`text-${countSize}`"
              >{{ order.quantity }}</label>
              <v-btn
                :min-height="`${btn_Height_Size}`"
                :min-width="`${btn_Width_Size}`"
                class="btn-people pa-0 ml-4 mr-0"
                outlined
                @click="incrementItemQuantity(order)"
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
          @click="floating.orderCartDialog = false"
        >
          취소하기
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          color="primary"
          depressed
          @click="submit(orderItems)"
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
    orderItems :{
      cache: false,
      get() {
        console.log(this.$store.getters["marketDetail/getSelectmenu"])
        return this.$store.getters["marketDetail/getSelectmenu"]
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
    submit(order){
      this.$store.dispatch("marketDetail/actOrder",
        {'orderItem' : order, 'marketName' : this.$session.get('market_name')})
    },
    incrementItemQuantity(cartItem) {
      console.log('수량을 늘립니다 ')
      console.log(cartItem.name + " : "  + cartItem.quantity)
      this.$store.dispatch("marketDetail/actIncrementItemQuantity",cartItem)
    },
    //쇼핑 카트의 아이템 수량 감소
    decrementItemQuantity(cartItem) {
      console.log('수량을 줄입니다')
      console.log(cartItem.name + " : "  + cartItem.quantity)
      this.$store.dispatch("marketDetail/actDecrementItemQuantity",cartItem)
    },
  }
}
</script>
