<template>
  <v-container
    id="dashboard-view"
    p-10
    tag="section"
  >
    <v-row
      justify="center"
    >
      <v-card
        justify="center"
        width="1300"
        height="970"
        elevation="3"
        outlined
        class="rounded-xl"
      >
        <v-container>
          <div

            class="mt-16 mx-6"
          >
            <v-row>
              <v-col>
                <v-list-item
                  three
                >
                  <v-list-item-content class="mt-16 mx-3">
                    <v-sheet
                      outlined
                    >
                      <v-list-item-title class="text-h4 mt-16">
                        주문건수
                      </v-list-item-title>
                      <v-sparkline
                        class="py-16"
                        :value="value.ordertotalCount"
                        :gradient="gradient"
                        :smooth="radius || false"
                        :padding="padding"
                        :line-width="width"
                        :stroke-linecap="lineCap"
                        :gradient-direction="gradientDirection"
                        :fill="fill"
                        :type="type"
                        :auto-line-width="autoLineWidth"
                        :labels="labels"
                        auto-draw
                      />
                    </v-sheet>
                  </v-list-item-content>
                  <v-list-item-content class="mt-16 mx-3">
                    <v-sheet
                      outlined
                    >
                      <v-list-item-title class="text-h4 mt-16">
                        주문완료
                      </v-list-item-title>
                      <v-sparkline
                        class="py-16"
                        :value="value.ordercompletedCount"
                        :gradient="gradient"
                        :smooth="radius || false"
                        :padding="padding"
                        :line-width="width"
                        :stroke-linecap="lineCap"
                        :gradient-direction="gradientDirection"
                        :fill="fill"
                        :type="type"
                        :auto-line-width="autoLineWidth"
                        :labels="labels"
                        auto-draw
                      />
                    </v-sheet>
                  </v-list-item-content>

                  <v-list-item-content class="mt-16 mx-3">
                    <v-sheet
                      outlined
                    >
                      <v-list-item-title class="text-h4 mt-16">
                        주문취소
                      </v-list-item-title>
                      <v-sparkline
                        class="py-16"
                        :value="value.ordercancelCount"
                        :gradient="gradient"
                        :smooth="radius || false"
                        :padding="padding"
                        :line-width="width"
                        :stroke-linecap="lineCap"
                        :gradient-direction="gradientDirection"
                        :fill="fill"
                        :type="type"
                        :auto-line-width="autoLineWidth"
                        auto-draw
                        :labels="labels"
                      />
                    </v-sheet>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-list-item
                  three
                >
                  <v-list-item-content class="mt-16 mx-3">
                    <v-sheet
                      outlined
                    >
                      <v-list-item-title class="text-h4 mt-16">
                        예약건수
                      </v-list-item-title>
                      <v-sparkline
                        class="py-16"
                        :value="value.reservetotalCount"
                        :gradient="gradient"
                        :smooth="radius || false"
                        :padding="padding"
                        :line-width="width"
                        :stroke-linecap="lineCap"
                        :gradient-direction="gradientDirection"
                        :fill="fill"
                        :type="type"
                        :auto-line-width="autoLineWidth"
                        auto-draw
                        :labels="labels"
                      />
                    </v-sheet>
                  </v-list-item-content>
                  <v-list-item-content class="mt-16 mx-3">
                    <v-sheet
                      outlined
                    >
                      <v-list-item-title class="text-h4 mt-16">
                        예약완료
                      </v-list-item-title>
                      <v-sparkline
                        class="py-16"
                        :value="value.reservecompletedCount"
                        :gradient="gradient"
                        :smooth="radius || false"
                        :padding="padding"
                        :line-width="width"
                        :stroke-linecap="lineCap"
                        :gradient-direction="gradientDirection"
                        :fill="fill"
                        :type="type"
                        :auto-line-width="autoLineWidth"
                        auto-draw
                        :labels="labels"
                      />
                    </v-sheet>
                  </v-list-item-content>

                  <v-list-item-content class="mt-16 mx-3">
                    <v-sheet
                      outlined
                    >
                      <v-list-item-title class="text-h4 mt-16">
                        예약취소
                      </v-list-item-title>
                      <v-sparkline
                        class="py-16"
                        :value="value.reservecancelCount"
                        :gradient="gradient"
                        :smooth="radius || false"
                        :padding="padding"
                        :line-width="width"
                        :stroke-linecap="lineCap"
                        :gradient-direction="gradientDirection"
                        :fill="fill"
                        :type="type"
                        :auto-line-width="autoLineWidth"
                        auto-draw
                        :labels="labels"
                      />
                    </v-sheet>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
 const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
  export default {
     data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value:{}, //값
      labels:[], //밑에 시간
      b:[1,2,3],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
   mounted() {
    this.$Axios({
        url : "http://localhost/dashboard",
        method : "GET",
        withCredentials : true,
        }).then((res) => {
            console.log(res)
            this.value.ordertotalCount = res.data.ordertotalCount;
            this.value.ordercompletedCount = res.data.ordercompletedCount;
            this.value.ordercancelCount = res.data.ordercancelCount;
            this.value.reservetotalCount = res.data.reservetotalCount;
            this.value.reservecompletedCount = res.data.reservecompletedCount;
            this.value.reservecancelCount = res.data.reservecancelCount;
            res.data.times.forEach(element=>{
              element = element.substring(11)
              this.labels.push(element)
            })
            console.log(this.value)
        }).catch((err) => {
          console.log(err);
        })
  }
  }
</script>
