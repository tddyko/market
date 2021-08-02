<template>
  <v-container
    id="dashboard-view"
    fluid
    p-10
    tag="section"
  >
    <v-card
      class="mx-12"
      elevation="1"
      outlined
    >
      <!-- 상단 row -->
      <v-row>
        <v-col>
          <v-list-item three-line>
            <v-list-item-content class="my-10">
              <v-list-item-title class="text-h5 mb-5">
                Earnings
              </v-list-item-title>
              <div class="text-h3 text-center mb-4">
                <span class="light-blue--text lighten-4 font-weight-medium">
                  $2723
                </span>
              </div>
              <v-list-item-subtitle>*Lorem Ipsum</v-list-item-subtitle>
              <!-- 하단 그래프 -->
              <v-sheet color="transparent">
                <v-sparkline
                  :key="String(avg)"
                  :smooth="16"
                  :gradient="['#f72047', '#ffd200', '#1feaea']"
                  :line-width="3"
                  :value="heartbeats"
                  auto-draw
                  stroke-linecap="round"
                />
              </v-sheet>
            </v-list-item-content>
            
            <v-list-item-content class="my-10">
              <v-list-item-title class="text-h5 mb-5">
                Downloads
              </v-list-item-title>
              <div class="text-h3 text-center mb-4">
                <span class="amber--text font-weight-medium">
                  2,142,950
                </span>
              </div>
              <v-list-item-subtitle>*Lorem Ipsum</v-list-item-subtitle>
              <!-- 하단 그래프 -->
              <v-sheet color="transparent">
                <v-sparkline
                  :key="String(avg)"
                  :smooth="16"
                  :gradient="['#f72047', '#ffd200', '#1feaea']"
                  :line-width="3"
                  :value="heartbeats"
                  auto-draw
                  stroke-linecap="round"
                />
              </v-sheet>
            </v-list-item-content>
            
            <v-list-item-content class="my-10">
              <v-list-item-title class="text-h5 mb-5">
                Favorites
              </v-list-item-title>
              <div class="text-h3 text-center mb-4">
                <span class="teal--text text--accent-3 font-weight-medium">
                  232,000
                </span>
              </div>
              <v-list-item-subtitle>*Lorem Ipsum</v-list-item-subtitle>
              <!-- 하단 그래프 -->
              <v-sheet color="transparent">
                <v-sparkline
                  :key="String(avg)"
                  :smooth="16"
                  :gradient="['#f72047', '#ffd200', '#1feaea']"
                  :line-width="3"
                  :value="heartbeats"
                  auto-draw
                  stroke-linecap="round"
                />
              </v-sheet>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
      <!-- 하단 row -->
      <v-row>
        <v-col>
          <v-list-item three-line>
            <v-list-item-content class="my-10">
              <v-list-item-title class="text-h5 mb-5">
                Earnings
              </v-list-item-title>
              <v-sheet color="transparent">
                <v-sparkline
                  :key="String(avg)"
                  :smooth="16"
                  :gradient="ffd200"
                  :line-width="3"
                  :value="heartbeats"
                  auto-draw
                  stroke-linecap="round"
                />
              </v-sheet>
              <v-list-item-subtitle>*Lorem Ipsum</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content class="my-10">
              <v-list-item-title class="text-h5 mb-5">
                Earnings
              </v-list-item-title>
              <v-sheet color="transparent">
                <v-sparkline
                  :key="String(avg)"
                  :smooth="16"
                  :color="ffd200"
                  :line-width="3"
                  :value="heartbeats"
                  auto-draw
                  stroke-linecap="round"
                />
              </v-sheet>
              <v-list-item-subtitle>*Lorem Ipsum</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  const exhale = ms =>
    new Promise(resolve => setTimeout(resolve, ms))
  export default {
    data: () => ({
      checking: false,
      heartbeats: [],
    }),
    computed: {
      avg () {
        const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0)
        const length = this.heartbeats.length
        if (!sum && !length) return 0
        return Math.ceil(sum / length)
      },
    },
    created () {
      this.takePulse(false)
    },
    methods: {
      heartbeat () {
        return Math.ceil(Math.random() * (120 - 80) + 80)
      },
      async takePulse (inhale = true) {
        this.checking = true
        inhale && await exhale(1000)
        this.heartbeats = Array.from({ length: 20 }, this.heartbeat)
        this.checking = false
      },
    }, 
  }
</script>
