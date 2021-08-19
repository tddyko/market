<template>
  <v-row justify="center">
    <v-col
      lg="10"
      md="12"
      xl="8"
    >
      <v-card class="rounded-xl">
        <v-toolbar
          class="rounded-t-xl"
          color="blue"
          height="80px"
        >
          <v-row
            align="center"
            justify="space-between"
          >
            <v-col
              lg="5"
              md="5"
              xl="4"
            >
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                min-width="auto"
                offset-y
                transition="scale-transition"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    id="center-input"
                    v-model="dateRangeText"
                    v-bind="attrs"
                    :class="`text-${fontsize}`"
                    class="rounded-xl font-weight-medium"
                    color="white"
                    dense
                    filled
                    hide-details
                    outlined
                    prepend-icon="mdi-calendar"
                    readonly
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
              lg="6"
              md="6"
            >
              <v-tabs
                v-model="tab"
                background-color="blue"
                centered
                grow
                hide-slider
              >
                <v-tab
                  id="back-white"
                  :class="`text-${tapsize}`"
                  class="font-weight-light"
                  color="white"
                  min-width="1"
                >
                  전체(00)
                </v-tab>

                <v-tab

                  id="back-white"
                  :class="`text-${tapsize}`"
                  class="font-weight-light"
                  color="white"
                  min-width="auto"
                >
                  미답변(00)
                </v-tab>
                <v-tab
                  id="back-white"
                  :class="`text-${tapsize}`"
                  class="font-weight-light"
                  color="white"
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
              class="mt-4"
              justify="center"
            >
              <v-col
                lg="10"
                md="10"
              >
                <v-card outlined>
                  <v-container>
                    <v-row
                      align="center"
                      justify="start"
                      no-gutters
                    >
                      <v-col
                        lg="12"
                        md="12"
                      >
                        <v-row
                          align="center"
                          justify="start"
                          no-gutters
                        >
                          <v-col
                            lg="1"
                            md="1"
                          >
                            <v-avatar>
                              <img
                                alt="John"
                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                              >
                            </v-avatar>
                          </v-col>
                          <v-col
                            :class="`text-${fontsize}`"
                            class="font-weight-bold"
                            lg="1"
                            md="1"
                          >
                            닉네임
                          </v-col>
                          <v-col
                            :class="`text-${datesize}`"
                            align="start"
                            class="font-weight-light ma-1"
                            lg="9"
                            md="9"
                          >
                            0000년 00월 00일
                          </v-col>
                          <v-col
                            align-self="start"
                            lg="2"
                            md="2"
                            offset-lg="1"
                            offset-md="1"
                          >
                            <v-rating
                              v-model="rating"
                              :size="`${ratingsize}`"
                              background-color="warning lighten-1"
                              color="orange"
                              dense
                              half-increments
                            />
                          </v-col>
                          <span class="grey--text text--lighten-2 text-caption ml-7">
                            ({{ rating }})
                          </span>
                        </v-row>
                      </v-col>
                      <v-col
                        align="start"
                        class="mt-1"
                        lg="12"
                        md="12"
                      >
                        <img
                          alt="John"
                          class="rounded-lg ma-2"
                          height="70"
                          src="https://cdn.vuetifyjs.com/images/john.jpg"
                          width="70"
                        >
                      </v-col>
                      <v-col
                        class="ma-2"
                        lg="8"
                        md="8"
                      >
                        <v-textarea
                          hide-details
                          no-resize
                          placeholder="내용을 입력하세요."
                          readonly
                          rounded
                          value="맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요"
                        />
                      </v-col>
                    </v-row>
                    <v-col
                      lg="10"
                      md="10"
                    >
                      <v-textarea
                        dense
                        hide-details
                        no-resize
                        outlined
                        placeholder="내용을 입력하세요."
                        rounded
                        value="감사합니다 더욱더 발전하는 저희 교촌치킨이 되겠습니다."
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
import { mapState } from 'vuex';
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
      ...mapState(['order/tabheader']),
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
