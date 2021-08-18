<template>
  <v-row justify="center">
    <v-col
      lg="10"
      xl="8"
      md="12"
    >
      <v-card class="rounded-xl">
        <v-toolbar
          color="blue"
          height="80px"
          class="rounded-t-xl"
        >
          <v-row
            align="center"
            justify="space-between"
          >
            <v-col
              md="5"
              lg="5"
              xl="4"
            >
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    id="center-input"
                    v-model="dateRangeText"
                    hide-details
                    filled
                    class="rounded-xl font-weight-medium"
                    color="white"
                    prepend-icon="mdi-calendar"
                    dense
                    outlined
                    readonly
                    v-bind="attrs"
                    :class="`text-${fontsize}`"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="dates"
                  range
                  @input="menu = false"
                />
              </v-menu>
            </v-col>
            <v-col
              md="6"
              lg="6"
            >
              <v-tabs
                v-model="tab"
                hide-slider
                background-color="blue"
                centered
                grow
              >
                <v-tab
                  id="back-white"
                  color="white"
                  class="font-weight-light"
                  :class="`text-${tapsize}`"
                  min-width="1"
                >
                  전체(00)
                </v-tab>

                <v-tab

                  id="back-white"
                  color="white"
                  class="font-weight-light"
                  :class="`text-${tapsize}`"
                  min-width="auto"
                >
                  미답변(00)
                </v-tab>
                <v-tab
                  id="back-white"
                  color="white"
                  class="font-weight-light"
                  :class="`text-${tapsize}`"
                  min-width="auto"
                >
                  답변완료(00)
                </v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </v-toolbar>
        <v-tabs-items
          v-for="n in 3"
          :key="n"
          v-model="tab"
        >
          <v-tab-item
            v-for="a in 3"
            :key="a"
          >
            <v-row
              justify="center"
              class="mt-4"
            >
              <v-col
                lg="10"
                md="10"
              >
                <v-card outlined>
                  <v-container>
                    <v-row
                      justify="start"
                      no-gutters
                      align="center"
                    >
                      <v-col
                        md="12"
                        lg="12"
                      >
                        <v-row
                          justify="start"
                          no-gutters
                          align="center"
                        >
                          <v-col
                            md="1"
                            lg="1"
                          >
                            <v-avatar>
                              <img
                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                                alt="John"
                              >
                            </v-avatar>
                          </v-col>
                          <v-col
                            lg="1"
                            md="1"
                            class="font-weight-bold"
                            :class="`text-${fontsize}`"
                          >
                            닉네임
                          </v-col>
                          <v-col
                            lg="9"
                            md="9"
                            class="font-weight-light ma-1"
                            :class="`text-${datesize}`"
                            align="start"
                          >
                            0000년 00월 00일
                          </v-col>
                          <v-col
                            lg="2"
                            md="2"
                            offset-lg="1"
                            offset-md="1"
                            align-self="start"
                          >
                            <v-rating
                              v-model="rating"
                              background-color="warning lighten-1"
                              color="orange"
                              half-increments
                              dense
                              :size="`${ratingsize}`"
                            />
                          </v-col>
                          <span class="grey--text text--lighten-2 text-caption ml-7">
                            ({{ rating }})
                          </span>
                        </v-row>
                      </v-col>
                      <v-col
                        lg="12"
                        md="12"
                        align="start"
                        class="mt-1"
                      >
                        <img
                          height="70"
                          width="70"
                          src="https://cdn.vuetifyjs.com/images/john.jpg"
                          alt="John"
                          class="rounded-lg ma-2"
                        >
                      </v-col>
                      <v-col
                        lg="8"
                        md="8"
                        class="ma-2"
                      >
                        <v-textarea
                          value="맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요"
                          placeholder="내용을 입력하세요."
                          no-resize
                          hide-details
                          readonly
                          rounded
                        />
                      </v-col>
                    </v-row>
                    <v-col
                      lg="10"
                      md="10"
                    >
                      <v-textarea
                        outlined
                        value="감사합니다 더욱더 발전하는 저희 교촌치킨이 되겠습니다."
                        dense
                        placeholder="내용을 입력하세요."
                        no-resize
                        hide-details
                        rounded
                      />
                    </v-col>
                  </v-container>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="error"
                    >
                      취소
                    </v-btn>
                    <v-btn color="primary">
                      확인
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
      menu: false,
      modal: false,
      data(){
        return{
          rating: '4',
          tab: null,
        dates: ["",""],
        }
    },
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
      fontsize () {
         switch (this.$vuetify.breakpoint.name) {
           case 'md': return 'md-subtitle-1'
           case 'lg': return 'lg-h6'
           default : return ''
      }
    },
          tapsize () {
         switch (this.$vuetify.breakpoint.name) {
           case 'md': return 'md-h6'
           case 'lg': return 'lg-h6'
           default : return ''
      }

    },
              datesize () {
         switch (this.$vuetify.breakpoint.name) {
           case 'md': return 'md-caption'
           case 'lg': return 'lg-caption'
           default : return ''
      }

    },
    ratingsize(){
      switch (this.$vuetify.breakpoint.name){
        case 'md' : return '25'
        case 'lg' : return '27'
        default : return ''
      }
    }
  },
}
</script>

<style>
#back-white{
  background-color: white;
  border-radius: 25px;
}
#center-input{
  text-align: center
}

</style>
