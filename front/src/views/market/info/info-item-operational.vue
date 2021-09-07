<template>
  <v-form>
    <v-container>
      <v-row
        align="center"
        justify="between"
      >
        <v-col
          cols="4"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          align="center"
        >
          스토어 이미지
        </v-col>
        <v-col
          cols="4"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          align="center"
        >
          <v-avatar size="100">
            <img
              alt="John"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
            >
          </v-avatar>
        </v-col>
        <v-col
          cols="4"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          align="center"
        >
          <input
            ref="imageInput"
            hidden
            multiple
            type="file"
            @change="uploadProfileImg"
          >
          <v-btn
            color="success"
            outlined
            rounded
            type="button"
            @click="onClickImgUpload"
          >
            사진
            <v-icon right>
              mdi-camera
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col
          cols="4"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          align="center"
        >
          매장소개
        </v-col>
        <v-col lg="5">
          <v-textarea
            dense
            hide-details
            no-resize
            outlined
            @input="informationInput($event)"
          />
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col
          cols="4"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          align="center"
        >
          매장 사진
        </v-col>
        <v-col
          cols="auto"
          sm="auto"
          md="auto"
          lg="auto"
          xl="auto"
        >
          <input
            ref="marketImageInput"
            hidden
            multiple
            type="file"
            @change="uploadInforImg"
          >
          <v-btn
            id="image-box"
            color="success"
            outlined
            class="rounded-xl d-inline"
            type="button"
            width="60"
            height="60"
            @click="onClickMarketImgUpload"
          >
            <v-icon bottom>
              mdi-camera
            </v-icon>
          </v-btn>
        </v-col>
        <!--프리뷰 이미지-->
        <v-col
          v-for="(imageInput,index) in previewImg"
          v-show="Get_Image != null"
          :key="index"
          cols="auto"
          sm="auto"
          md="auto"
          lg="auto"
          xl="auto"
        >
          <v-img
            :src="imageInput"
            max-width="35"
          />
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="start"
      >
        <v-col
          cols="4"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          align="center"
        >
          매장 전화번호
        </v-col>
        <v-col
          cols="5"
          sm="4"
          md="3"
          lg="3"
          xl="2"
          align="center"
        >
          <v-text-field
            dense
            hide-details
            outlined
             @input="phonnumberInput($event)"
          />
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col
          cols="4"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          align="center"
        >
          영업시작 시간
        </v-col>
        <v-col
          cols="5"
          sm="4"
          md="2"
          lg="2"
          xl="2"
          align="center"
        >
          <v-menu
            v-model="Open_Time_Menu"
            :close-on-content-click="false"
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
            offset-y
            transition="fade-transition"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="Open_Time"
                dense
                hide-details
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                @click="Open_Time_AMPM"
                v-on="on"
              />
            </template>
            <v-time-picker
              v-model="Open_Time"
              ampm-in-title
              format="ampm"
              full-width
              @click:minute="Update_Open_Time_Menu"
            />
          </v-menu>
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col
          cols="4"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          align="center"
        >
          영업종료 시간
        </v-col>
        <v-col
          cols="5"
          sm="4"
          md="2"
          lg="2"
          xl="2"
          align="center"
        >
          <v-menu
            v-model="Close_Time_Menu"
            :close-on-content-click="false"
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
            offset-y
            transition="fade-transition"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="Close_Time"
                dense
                hide-details
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                @click="Close_Time_AMPM"
                v-on="on"
              />
            </template>
            <v-time-picker
              v-model="Close_Time"
              ampm-in-title
              format="ampm"
              full-width
              @click:minute="Update_Close_Time_Menu"
            />
          </v-menu>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row
        align="center"
      >
        <v-col
          cols="4"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          align="center"
        >
          휴무일
        </v-col>
        <v-col
          cols="4"
          sm="4"
          md="2"
          lg="2"
          xl="2"
          align="center"
        >
          <v-select
            :items="Get_Week"
            dense
            hide-details
            label="주"
            solo
            @change="setWeek"
          />
        </v-col>
        <v-col
          cols="4"
          sm="4"
          md="2"
          lg="2"
          xl="2"
          align="center"
        >
          <v-select
            :items="Get_Day"
            dense
            hide-details
            label="일"
            solo
            @change="setDay"
          />
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn
          class="mt-10 rounded-lg text-center"
          color="primary"
          height="40"
          type="submit"
          width="80"
          @click="sendInfo"
        >
          저장
        </v-btn>
        {{ $vuetify.breakpoint.name }}
      </div>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "InfoItemOperational",
  data(){
    return{
      informfiles :[],
      previewImg :[],
    }
  },
  computed: {
    Get_Image(){
      return this.$store.getters["info/Get_Info_Operrational_img"]
    },
    Get_Week() {
      return this.$store.getters["info/Get_Week"]
    },
    Get_Day(){
      return this.$store.getters["info/Get_Day"]
    },
    Open_Time:{
      set(value){
          this.$store.dispatch("info/Info_Set_Open_Time_Actions", value)
      },
      get(){
        return this.$store.getters["info/Get_Open_Time"]
      },
  },
    Close_Time:{
      set(value){
        this.$store.dispatch("info/Info_Set_Close_Time_Actions", value)
      },
      get(){
        return this.$store.getters["info/Get_Close_Time"]
      }
    },
    Open_Time_Menu: {
      set(value){
      this.$store.dispatch("info/Info_Set_Open_Time_Menu", value)
      },
      get(){
        return this.$store.getters["info/Get_Open_Time_Menu"]
      }
    },
    Close_Time_Menu: {
      set(value){
        this.$store.dispatch("info/Info_Set_Close_Time_Menu", value)
      },
      get(){
        return this.$store.getters["info/Get_Close_Time_Menu"]
      }
    },
  },
  methods: {
    setDay(e){
      console.log(e)
      this.$store.commit("info/Set_day_holiday",e)
      },
    setWeek(e){
      console.log(e)
      this.$store.commit("info/Set_week_holiday",e)
      },
    onClickImgUpload () {
      this.$refs.imageInput.click();
    },
    onClickMarketImgUpload () {
      this.$refs.marketImageInput.click();
    },
    uploadInforImg(){
      for (let i = 0; i <this.$refs.marketImageInput.files.length; i++) {
          this.informfiles = [ ...this.informfiles,this.$refs.marketImageInput.files[i]];
          this.previewImg = [...this.previewImg, URL.createObjectURL(this.$refs.marketImageInput.files[i])]
      }
      console.log(this.informfiles)
      this.$store.commit('info/Set_Info_Image',this.informfiles);
    },
    uploadProfileImg(){
      console.log(this.$refs.imageInput.files[0])
      this.$store.commit('info/Set_Profile_Image', this.$refs.imageInput.files[0]);
    },
    Update_Open_Time_Menu(){
      this.$store.commit("info/Update_Open_Time_Menu")
    },
    Update_Close_Time_Menu(){
      this.$store.commit("info/Update_Close_Time_Menu")
    },
    Close_Time_AMPM(){
        this.$store.dispatch("info/Info_Set_Close_Time_Actions", null)
    },
    Open_Time_AMPM(){
        this.$store.dispatch("info/Info_Set_Open_Time_Actions", null)
    },
    sendInfo(){
      console.log("sendInfo button")
      this.$store.dispatch("info/send_infor_values")
    },
    phonnumberInput(event){
      console.log("phonnumber input : " + event)
      this.$store.dispatch("info/Info_Set_phonenumber",event)
    },
    informationInput(event2){
      console.log("information input : " + event2)
      this.$store.dispatch("info/Info_Set_information",event2)
    }
  },


 }
</script>

<style scoped>
#image-box{
  display: inline;
}
</style>
