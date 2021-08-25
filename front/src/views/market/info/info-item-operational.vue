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
                v-model="Open_Time_Menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="fade-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="Open_Time"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    dense
                    hide-details
                    v-on="on"
                  />
                </template>
                <v-time-picker
                  v-model="Open_Time"
                  full-width
                  ampm-in-title
                  @click:minute="Update_Open_Time_Menu"
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
                v-model="Close_Time_Menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="fade-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="Close_Time"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    hide-details
                    dense
                    v-on="on"
                  />
                </template>
                <v-time-picker
                  v-model="Close_Time"
                  full-width
                  ampm-in-title
                  @click:minute="Update_Close_Time_Menu"
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
                :items="Get_Week"
                label="주"
                dense
                solo
                hide-details
              />
            </v-col>
            <v-col lg="2">
              <v-select
                :items="Get_Day"
                label="일"
                dense
                solo
                hide-details
              />
            </v-col>
          </v-row>
          <div class="text-center">
            <v-btn
              class="mt-10 rounded-lg text-center"
              color="primary"
              width="80"
              height="40"
              type="submit"
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
    }
  },
  methods: {
    Update_Open_Time_Menu(){
      this.$store.commit("info/Update_Open_Time_Menu")
    },
    Update_Close_Time_Menu(){
      this.$store.commit("info/Update_Close_Time_Menu")
    }
  },
 }
</script>

<style scoped>

</style>
