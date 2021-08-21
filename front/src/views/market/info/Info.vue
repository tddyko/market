<template>
  <v-row justify="center">
    <v-col
      lg="12"
      md="12"
    >
      <v-card class="rounded-xl">
        <v-toolbar
          color="blue"
          height="80px"
          class="rounded-t-xl"
        >
          <v-row justify="start">
            <v-col lg="5">
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

        <!--입력받는 부분-->
        <v-tabs-items
          v-for="n in 1"
          :key="n"
          v-model="tab"
        >
          <v-tab-item>
            <v-row
              justify="center"
              class="mt-4"
            >
              <v-col
                lg="10"
                md="10"
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
                        <!--현재 스토어 이미지-->
                        <v-col lg="2">
                          <v-avatar size="100">
                            <img
                              src="https://cdn.vuetifyjs.com/images/john.jpg"
                              alt="John"
                            >
                          </v-avatar>
                        </v-col>
                        <!--메장 업로드-->
                        <v-col lg="2">
                          <v-file-input
                            prepend-icon="mdi-cloud-upload"
                            hide-input
                            dense
                            id="profile_img"
                            ref="profile_img"
                            v-on:change="selectFile()"
                            :rules="rules"
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
                            v-model="comment"
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
                            v-model="phonenumber"
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
                            transition="scale-transition"
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
                            transition="scale-transition"
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
                            v-model="week_holiday"
                            :items="week"
                            label="주"
                            dense
                            solo
                            hide-details 
                          />
                        </v-col>
                        <v-col lg="2">
                          <v-select
                            v-model="day_holiday"
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
                         v-on:click="submitInform"
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
              class="mt-4"
            >
              <v-col
                lg="10"
                md="10"
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
                          v-model="noti"
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
                        <!--스토어 이미지-->
                          <div class="ml-15">
                            <v-btn
                              class="rounded-xl"
                              height="90"
                              min-width="auto"
                              @click="uploder"
                              :rules="rules"
                            >
                              <div class="d-block">
                                <v-icon>mdi-camera</v-icon>
                              </div>
                              <div class="d-block">
                                사진선택
                              </div>
                            </v-btn>
                          </div>
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
    tab:0,
    profile_Img : "",
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
    modal2: false,
    comment :'',
    noti : '',
    phonenumber : '',
    week_holiday : null,
    day_holiday : null,
    uploder:() => {
            this.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
      }, { once: true })

      this.$refs.uploader.click()
    }
    }

  },
methods:{
  //운영정보 업로드
  submitInform : function(){
    const fd = new FormData(); //반드시 필요 
    fd.append('profile_img', this.profile_img); //4번
    this.$Axios({
      methods : 'POST',
      url : 'https://localhost/update/inform',
      withCredentials: true, //쿠키가 서로 저장
      data: { 
       market_phone : this.phonenumber,
       start_time : this.time,
       end_time : this.endtime,
       market_coment : this.inform, 
       market_inform_week_holiday : this.week_holiday,
       market_inform_day_holiday : this.day_holiday,  
       fd
      },
      headers : {
        "Content-Type": "multiple/form-data"
      }
    }).then(async(response)=>console.log(response)).catch((err)=>console.log(err))
  
    console.log("datas")
    console.log("phonenumber : " + this.phonenumber); 
    console.log("comment : " + this.comment); 
    console.log("noti : " + this.noti); 
    console.log("time : " + this.time)
    console.log("endtime : " + this.endtime) 
    console.log("files : " + this.files)
  },
  //이미지 업로드용 메소드
  selectFile : function(){ 
    console.log(this.$refs.profile_img); 
 
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
  }
}
</script>

<style>
#back-white{
  background-color: white;
  border-radius: 25px;
  
}
</style>