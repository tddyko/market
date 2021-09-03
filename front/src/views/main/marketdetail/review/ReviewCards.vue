<template>
  <v-card
    class="my-10 mx-auto pa-3"
  >
    <!-- <v-card-text> -->
    <v-container>
      <v-row justify="end">
        <v-col cols="3">
          <v-select
            :items="['주문 리뷰', '예약 리뷰']"
            class="select-width pa-5 mt-5"
            dense
            label="주문 리뷰"
          >
            <template #item="{ item, attrs, on }">
              <v-list-item
                v-bind="attrs"
                v-on="on"
              >
                <v-list-item-title
                  :id="attrs['aria-labelledby']"
                  v-text="item"
                />
              </v-list-item>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="start"
        no-gutters
      >
        <v-col
          lg="1"
          md="1"
          xl="1"
        >
          <v-avatar>
            <img
              alt="John"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
            >
          </v-avatar>
        </v-col>
        <v-col
          class="font-weight-bold"
          lg="1"
          md="1"
          xl="1"
        >
          닉네임
        </v-col>
        <v-col
          :class="`text-${Font_size}`"
          align="start"
          lg="9"
          md="9"
          xl="9"
        >
          0000년 00월 00일
          <v-rating
            :size="`${Rating_size}`"
            background-color="warning lighten-1"
            color="orange"
            dense
            half-increments
          />
        </v-col>
        <v-col
          align="left"
          class="mt-1"
          cols="12"
          lg="12"
          md="12"
          sm="12"
          xl="12"
        >
          <img
            :height="`${Img_size}`"
            :width="`${Img_size}`"
            alt="John"
            class="rounded-lg ma-2"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
          >
        </v-col>
        <v-col
          class="ma-2"
          lg="10"
          md="10"
          xl="10"
        >
          <v-textarea
            :class="`text-${Font_size}`"
            dense
            height="200"
            hide-details
            no-resize
            outlined
            placeholder="내용을 입력하세요."
            readonly
            rounded
            value="맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요"
          />
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="start"
      >
        <v-col
          cols="10"
        >
          <v-card
            color="#f5f5dc"
            elevation="0"
            shaped
          >
            <v-row
              align-center
              class="ma-1"
            >
              <v-col
                lg="1"
                md="2"
                sm="3"
                xl="1"
              >
                <v-avatar>
                  <img
                    alt="John"
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                  >
                </v-avatar>
              </v-col>
              <v-col
                class="font-weight-bold"
                lg="1"
                md="2"
                sm="3"
                xl="1"
              >
                사장님
              </v-col>
              <v-col
                :class="`text-${Font_size}`"
                align="start"
                lg="9"
                md="7"
                sm="6"
                xl="9"
              >
                0000년 00월 00일
              </v-col>
              <v-col
                cols="12"
              >
                <v-textarea
                  :class="`text-${Font_size}`"
                  dense
                  height="auto"
                  hide-details
                  no-resize
                  placeholder="내용을 입력하세요."
                  readonly
                  rounded
                  value="감사합니다"
                />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-card-text> -->
  </v-card>
</template>

<script>
export default {
  name: "ReviewCards",
  computed: {
    Rating_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '20'
        case 'md' : return '25'
        case 'lg' : return '30'
        case 'xl' : return '30'
        default : return '20'
      }
    },
    Font_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return 'sm-body-2'
        case 'md' : return 'md-body-1'
        case 'lg' : return 'lg-body-1'
        case 'xl' : return 'xl-body-1'
        default : return 'body-2'
      }
    },
    Img_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '100'
        case 'md' : return '120'
        case 'lg' : return '140'
        case 'xl' : return '150'
        default : return '80'
      }
    }
  }
}
</script>

<style scoped>

</style>
