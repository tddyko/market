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
        <v-continer>
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
                        Earnings
                      </v-list-item-title>
                      <v-sparkline
                        class="py-16"
                        :value="value"
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
                      />
                    </v-sheet>
                  </v-list-item-content>
                  <v-list-item-content class="mt-16 mx-3">
                    <v-sheet
                      outlined
                    >
                      <v-list-item-title class="text-h4 mt-16">
                        Downloads
                      </v-list-item-title>
                      <v-sparkline
                        class="py-16"
                        :value="value"
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
                      />
                    </v-sheet>
                  </v-list-item-content>

                  <v-list-item-content class="mt-16 mx-3">
                    <v-sheet
                      outlined
                    >
                      <v-list-item-title class="text-h4 mt-16">
                        Favorites
                      </v-list-item-title>
                      <v-sparkline
                        class="py-16"
                        :value="value"
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
                      />
                    </v-sheet>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row>
              <v-list-item two>
                <v-col
                  cols="4"
                >
                  <v-list-item-content class="mb-16">
                    <v-sheet
                      class="py-13"
                      outlined
                    >
                      <v-list-item-title class="text-h4 my-16">
                        Profile Strength
                      </v-list-item-title>
                      <v-sparkline
                        :value="value"
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
                      />
                    </v-sheet>
                  </v-list-item-content>
                </v-col>


                <v-col
                  cols="8"
                >
                  <v-list-item-content class="mb-16 mx-2">
                    <v-sheet
                      outlined
                    >
                      <v-list-item-title class="text-h4 mt-11 mb-6 pt-16">
                        Detailed chart02
                      </v-list-item-title>
                      <v-sparkline
                        :value="value"
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
                      />
                    </v-sheet>
                  </v-list-item-content>
                </v-col>
              </v-list-item>
            </v-row>
          </div>
        </v-continer>
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
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
  }
</script>
