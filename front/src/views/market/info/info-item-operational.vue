<template>
  <v-row
    justify="center"
  >
    <v-col
      lg="10"
      md="10"
      xl="12"
    >
      <v-form>
        <v-container>
          <v-row
            align="center"
            justify="start"
          >
            <v-col lg="2">
              스토어 이미지
            </v-col>
            <v-col lg="2">
              <v-avatar size="100">
                <img
                  alt="John"
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
              </v-avatar>
            </v-col>
            <v-col lg="2">
              <input
                ref="imageInput"
                hidden
                multiple
                type="file"
              >
              <v-btn
                color="primary"
                outlined
                rounded
                type="button"
                @click="onClickImgUpload"
              >
                사진 업로드
                <v-icon right>
                  mdi-camera
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="start"
          >
            <v-col
              lg="2"
            >
              매장소개
            </v-col>
            <v-col lg="5">
              <v-textarea
                dense
                hide-details
                no-resize
                outlined
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="start"
          >
            <v-col lg="2">
              매장 전화번호
            </v-col>
            <v-col lg="3">
              <v-text-field
                dense
                hide-details
                outlined
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="start"
          >
            <v-col lg="2">
              영업시작 시간
            </v-col>
            <v-col lg="2">
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
            justify="start"
          >
            <v-col lg="2">
              영업종료 시간
            </v-col>
            <v-col lg="2">
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
          </v-row>
          <v-row
            align="center"
            justify="start"
          >
            <v-col lg="2">
              휴무일
            </v-col>
            <v-col lg="2">
              <v-select
                :items="Get_Week"
                dense
                hide-details
                label="주"
                solo
              />
            </v-col>
            <v-col lg="2">
              <v-select
                :items="Get_Day"
                dense
                hide-details
                label="일"
                solo
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
            >
              저장
            </v-btn>
          </div>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "InfoItemOperational",

  computed: {
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
    onClickImgUpload () {
      this.$refs.imageInput.click();
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
    }
  },
 }
</script>

<style scoped>

</style>
