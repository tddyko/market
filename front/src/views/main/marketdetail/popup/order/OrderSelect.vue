<template>
  <v-card>
    <v-toolbar
      color="white"
    >
      <v-toolbar-title>결제창</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="floating.orderSelectDialog = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row>
      <v-col>
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />
      </v-col>
    </v-row>
    <v-row class="ma-1">
      <v-col>
        <div class="text-h3">
          {{cards.name}}
        </div>
        <div class="text-subtitle-1 text--secondary my-4">
          {{cards.product_info}}
        </div>
      </v-col>
    </v-row>
    <v-divider />
    <v-row
      class="ma-1"
      justify="space-between"
    >
      <v-col>
        <div class="text-h6 font-weight-bold">
          가격
        </div>
      </v-col>
      <v-col>
        <div class="text-h6 font-weight-bold">
          {{cards.price}}원
        </div>
      </v-col>
    </v-row>
    <v-divider />
    <v-row
      class="ma-1"
      justify="start"
    >
      <v-col
        v-for="(group,index) in cards.Pd_option_groups"
        :key="index"
        cols="7"
      >
        <label>{{ `${group.name}` }}</label>
        <v-radio-group :v-model="index">
          <v-radio
            v-for="(option,index1) in group.Pd_options"
            :key="index1"
            :label="`${option.name}`"
            :value="option.name"
            @change="test(option.price,index)"
          />
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row class="ma-1">
      <v-col>
        <div class="text-h6 font-weight-bold my-5">
          총 합계
        </div>
      </v-col>
      <v-col>
        <div class="text-h6 font-weight-bold my-5">
          {{cards.price+test}}
        </div>
      </v-col>
    </v-row>
    <v-row class="ma-1">
      <v-col
        align="center"
      >
        <v-btn
          color="primary"
          depressed
        >
          확인
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "OrderSelect",
  data(){
    return () => {
      let a = new Array();
    }
  },
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      }
    },
     cards: {
       get() {
         console.log(this.$store.getters["marketDetail/getAddmenu"]);
        return this.$store.getters["marketDetail/getAddmenu"]
       }
    },
  },
  methods: {
    test(e,index){
      console.log( this.a[index] = e);
      this.a[index] = e
    }
  }
}
</script>
<style scoped>
</style>
