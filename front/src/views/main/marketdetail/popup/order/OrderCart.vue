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
          flat
          height="160px"
          outlined
        >
          <v-row
            align="center"
            class="mx-1"
            justify="space-between"
          >
            <v-col
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
              <v-card-actions>
                <v-btn
                  color="indigo"
                  disabled
                  outlined
                  width="1em"
                >
                  -
                </v-btn>
                <span class="ma-5">1</span>
                <v-btn
                  color="indigo"
                  outlined
                >
                  +
                </v-btn>
              </v-card-actions>
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
    }
  }
}
</script>
