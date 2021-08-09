<template>
  <v-row
    absolute
    justify="center"
  >
    <v-col cols="8">
      <v-card class="overflow-hidden">
        <v-app-bar color="primary">
          <v-app-bar-title>Title</v-app-bar-title>
          <template #extension>
            <v-tabs align-with-title>
              <v-tab>운영정보</v-tab>
              <v-tab>공지사항</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"
          max-height="600"
        >
          <v-container style="height: 600px">
            <v-row>
              <v-col>
                <v-card
                  class="ma-6"
                  height="500"
                >
                  ffff
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
</style>