<template>
  <div>
    <v-tabs-items
      v-model="get"
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
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "InfoTabsItems",
  computed: {
    get() {
      return this.$store.getters["info/getTab"]
    }
  }
}
</script>

<style scoped>

</style>
