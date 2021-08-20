<template>
  <v-row justify="center">
    <v-col
      lg="10"
      xl="8"
      md="12"
    >
      <v-card class="rounded-xl">
        <v-toolbar
          color="white"
          height="auto"
          class="rounded-t-xl"
        >
          <v-row justify="start">
            <v-col lg="5">
              <v-tabs
                v-model="tab"
                slider-color="light-blue"
                centered
                grow
              >
                <v-tab
                  class="font-weight-regular text--white"
                  :class="`text-${tapsize}`"
                  min-width="auto"
                >
                  운영정보
                </v-tab>
                <v-tab
                  id="back-white"
                  color="white"
                  class="font-weight-light"
                  :class="`text-${tapsize}`"
                  min-width="auto"
                >
                  공지사항
                </v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </v-toolbar>
        <v-divider />
        <v-tabs-items
          v-for="n in 1"
          :key="n"
          v-model="tab"
        >
          <v-tab-item>
            <v-row
              justify="center"
            >
              <v-col
                lg="10"
                md="10"
                xl="12"
              >
                <v-card elevation="5">
                  <v-container>
                    <v-form>
                      <v-row
                        justify="start"
                        align="center"
                      >
                        <v-col lg="2">
                          스토어 이미지
                        </v-col>
                        <v-col lg="2">
                          <v-avatar size="100">
                            <img
                              src="https://cdn.vuetifyjs.com/images/john.jpg"
                              alt="John"
                            >
                          </v-avatar>
                        </v-col>
                        <v-col lg="2">
                          <v-file-input
                            prepend-icon="mdi-cloud-upload"
                            hide-input
                            dense
                          />
                        </v-col>
                      </v-row>
                      <v-row
                        justify="start"
                        align="center"
                      >
                        <v-col
                          lg="2"
                        >
                          매장소개
                        </v-col>
                        <v-col lg="5">
                          <v-textarea
                            no-resize
                            outlined
                            dense
                            hide-details
                          />
                        </v-col>
                      </v-row>
                      <v-row
                        justify="start"
                        align="center"
                      >
                        <v-col lg="2">
                          매장 전화번호
                        </v-col>
                        <v-col lg="3">
                          <v-text-field
                            outlined
                            hide-details
                            dense
                          />
                        </v-col>
                      </v-row>
                      <v-row
                        justify="start"
                        align="center"
                      >
                        <v-col lg="2">
                          영업시작 시간
                        </v-col>
                        <v-col lg="2">
                          <v-menu
                            v-model="startmenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="fade-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                          >
                            <template #activator="{ on, attrs }">
                              <v-text-field
                                v-model="time"
                                prepend-icon="mdi-clock-time-four-outline"
                                readonly
                                v-bind="attrs"
                                dense
                                hide-details
                                v-on="on"
                              />
                            </template>
                            <v-time-picker
                              v-model="time"
                              full-width
                              @click:minute="startmenu = false"
                            />
                          </v-menu>
                        </v-col>
                      </v-row>
                      <v-row
                        justify="start"
                        align="center"
                      >
                        <v-col lg="2">
                          영업종료 시간
                        </v-col>
                        <v-col lg="2">
                          <v-menu
                            v-model="endmenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="fade-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                          >
                            <template #activator="{ on, attrs }">
                              <v-text-field
                                v-model="endtime"
                                prepend-icon="mdi-clock-time-four-outline"
                                readonly
                                v-bind="attrs"
                                hide-details
                                dense
                                v-on="on"
                              />
                            </template>
                            <v-time-picker
                              v-model="endtime"
                              full-width
                              @click:minute="endmenu = false"
                            />
                          </v-menu>
                        </v-col>
                      </v-row>
                      <v-row
                        justify="start"
                        align="center"
                      >
                        <v-col lg="2">
                          휴무일
                        </v-col>
                        <v-col lg="2">
                          <v-select
                            :items="week"
                            label="주"
                            dense
                            solo
                            hide-details
                          />
                        </v-col>
                        <v-col lg="2">
                          <v-select
                            :items="day"
                            label="일"
                            dense
                            solo
                            hide-details
                          />
                        </v-col>
                      </v-row>
                      <v-btn
                        class="mt-10 rounded-lg"
                        color="primary"
                        width="80"
                        height="40"
                      >
                        저장
                      </v-btn>
                    </v-form>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>

          <v-tab-item>
            <v-row
              justify="center"
            >
              <v-col
                lg="12"
                md="12"
                xl="12"
              >
                <v-card elevation="5">
                  <v-form>
                    <v-container>
                      <v-row
                        justify="center"
                        align="center"
                        class="mt-5"
                      >
                        <v-col
                          lg="9"
                          align="start"
                        >
                          공지사항
                        </v-col>
                      </v-row>
                      <v-row
                        justify="center"
                        align="center"
                      >
                        <v-col
                          lg="9"
                        >
                          <v-textarea
                            ref="test"
                            outlined
                            dense
                            hide-details
                            no-resize
                            rows="10"
                          />
                        </v-col>
                      </v-row>
                      <v-row
                        justify="start"
                        align="center"
                      >
                        <v-col
                          lg="4"
                        >
                          <input
                            ref="imageInput"
                            type="file"
                            multiple
                            hidden
                          >
                          <v-btn
                            class="rounded-xl"
                            type="button"
                            min-width="auto"
                            @click="onButtonClick"
                          >
                            <v-icon>
                              mdi-camera
                            </v-icon>
                            사진선택
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-btn
                        class="mt-10 rounded-lg"
                        color="primary"
                        width="80"
                        height="40"
                      >
                        저장
                      </v-btn>
                    </v-container>
                  </v-form>
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
  data(){
    return{
    tab:'',
    files: [],
    rules: [
        value => !value || value.size < 2000000 || '사진용량은 2mb(사이즈)를 초과할수 없습니다.',
      ],
    week: [
      "첫재 주", "둘째 주","셋째 주","넷째 주"
    ],
    day: [
      "월요일", "화요일","수요일","목요일","금요일","토요일","일요일"
    ],
    time: null,
    endtime: null,
    startmenu: false,
    endmenu: false,
    modal2: false
    }

  },

computed:{
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
  methods: {
    onButtonClick() {
      this.$refs.test.click();
    },
  }
}
</script>

<style>
#back-white{
  background-color: white;
  border-radius: 25px;

}
</style>
