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
        <!--전체 데이터-->
        <v-tabs-items
          v-for="(item, index) in items"
          :key="index"
          v-model="tab"
        >
          <!--답변 미답변 답변완료-->
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
                      @click="showRecomentSwitch(index)"
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
                        
                          <!--멤버 프로필 사진-->
                          <v-col
                            md="1"
                            lg="1"
                          > 
                            <v-avatar>
                              <v-img  
                                :src="imgSrc(item.Member.profile_img)"
                                alt="UserProfileImg"
                              ></v-img>
                            </v-avatar>
                          </v-col>
                          <!--닉네임-->
                          <v-col
                            lg="1"
                            md="1"
                            class="font-weight-bold"
                            :class="`text-${fontsize}`"
                          >
                            {{item.Member.nickname}}
                          </v-col>
                          <!--리뷰작성일(날짜)-->
                          <v-col
                            lg="9"
                            md="9"
                            class="font-weight-light ma-1"
                            :class="`text-${datesize}`"
                            align="start"
                          >
                            {{item.created_at}}
                          </v-col>
                          <!--리뷰 별점-->
                          <v-col
                            lg="2"
                            md="2"
                            offset-lg="1"
                            offset-md="1"
                            align-self="start"
                          >
                            <v-rating
                              v-model="item.rating"
                              background-color="warning lighten-1"
                              color="orange"
                              half-increments
                              dense
                              :size="`${ratingsize}`"
                            />
                          </v-col>
                          <span class="grey--text text--lighten-2 text-caption ml-7">
                            ({{ item.rating }})
                          </span>
                        </v-row>
                      </v-col>
                      <!--리뷰이미지-->
                      <v-col
                        lg="12"
                        md="12"
                        align="start"
                        class="mt-1"
                        v-if="item.Reserve_review_imgs.length>0"
                      >
                        <img
                          v-for="(iamges,index) in item.Reserve_review_imgs"
                          :key="index"
                          height="70"
                          width="70"
                          :src="imgSrc(iamges.reserve_review_img)"
                          alt="John"
                          class="rounded-lg ma-2"
                        >
                      </v-col>
                      <!--리뷰내용-->
                      <v-col
                        lg="8"
                        md="8"
                        class="ma-2"
                      >
                        <v-textarea
                          v-model="item.review" 
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
                      v-if="item.showRecoment"
                    >
                      <v-textarea
                        outlined  
                        :value="showValue(item.Reserve_review_answer)"
                        dense
                        placeholder="내용을 입력하세요."
                        no-resize
                        hide-details
                        rounded
                        @input="searchChangeFunc($event)"
                      />
                    </v-col>
                  </v-container>
                  <v-card-actions v-if="item.showRecoment">
                    <v-spacer />
                    <v-btn
                      color="error"
                    >
                      취소
                    </v-btn>
                    <v-btn color="primary"
                    @click="recomentReviews(item.reserve_review_id)">
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
          rating: 4,
          tab: 0, //순서대로 0,1,2 값을 가짐
          dates: [null,null],
          items: [],
          recoment : "",
          showRecoment : false,
        }
    },
    computed: {
      
      dateRangeText () { 
        this.getReserveReviews();
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
    searchChangeFunc(event){
     this.recoment=event
    },
    showRecomentSwitch(index){
      console.log(index)
      this.items[index].showRecoment = !this.items[index].showRecoment 
      //보여줄지 말지 결정하는 변수를 각 컨테이너에 들어갈 각 배열에 요소를 추가하고 0 
      //index값을 받아서 해당 index를 가진 컨테이너만 보여줄지 말지를 결정하는 방향으로
    },
    showValue(findComent){ 
      console.log(findComent)
      if(findComent !=null){
         this.recoment = findComent.answer;
        return findComent.answer;
      }
      else{
        this.recoment = ""
        return ""
      }
    },
    getReserveReviews(){  
      if(this.dates.length > 1){ 
        this.$Axios({
          url : "http://localhost/reseve_review/reviews/list",
          method : "GET",
          withCredentials: true, //쿠키가 서로 저장
              params: {
                // This is the body part
                date1 : this.dates[0], date2: this.dates[1], tab : this.tab,
              }
        }).then(async(response)=>{
           await response.data.forEach(
             (data)=>{
                data.rating = parseFloat(data.rating)
                data.showRecoment = false
                })
            this.items = response.data
            console.log(response.data)
        }).catch((err)=>{
          console.log(err)
        })
      } 
    },
    recomentReviews(reserve_review_id){ 
      console.log(this.recoment); 
      this.$Axios({
         url : `http://localhost/reseve_review/recoment/${reserve_review_id}`,
          method : "GET",
          withCredentials: true, //쿠키가 서로 저장
          params: {
            // This is the body part
              answer : this.recoment
          }
      }).then(async(response)=>{
        console.log(response)
      }).catch((err)=>console.log(err))
    },
    imgSrc(name){ 
      name = name.replaceAll("\\", "/"); 
      return require(`../../../../../back/${name}`);
    }
  },
  created(){ 
    console.log("tab : " + this.tab);
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
