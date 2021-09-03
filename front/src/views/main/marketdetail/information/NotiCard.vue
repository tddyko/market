<template>
  <v-card
    class="mx-auto my-10"
  >
    <v-row>
      <v-col>
        <div class="text-h4 mt-10 text-center">
          매장 공지
        </div>
      </v-col>
    </v-row>
    <v-row
      dense
      justify="center"
    >
      <v-col
        v-for="n in 6"
        :key="n"
        align="center"
        cols="2"
      >
        <v-img
          :height="`${Img_size}`"
          :width="`${Img_size}`"
          class="my-10 rounded-xl"
          lazy-src="https://picsum.photos"
          src="https://picsum.photos/150"
        />
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col>
        <v-textarea
          class="ma-1"
          dense
          height="200"
          hide-details
          outlined
          readonly
          rounded
          value="매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "NotiCard",
  computed: {
    Img_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '90'
        case 'md' : return '120'
        case 'lg' : return '150'
        case 'xl' : return '150'
        default : return '64'
      }
    },
  }
}
</script>

<style scoped>

</style>
