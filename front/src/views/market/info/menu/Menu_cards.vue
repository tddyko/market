<template>
  <v-container>
    <v-row
      v-for="(card,index) in cards"
      :key="index"
      class="my-1"
      justify="center"
    >
      <!-- 반복될 카드 -->
      <v-col
        cols="auto"
        align-self="center"
      >
        <v-checkbox
          v-model="checkbox"
          :value="index"
        />
      </v-col>
      <v-col
        cols="9"
        sm="11"
        md="9"
        lg="10"
        xl="9"
      >
        <v-card
          height="auto"
          class="pa-5"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              class="mx-4"
              align="center"
              cols="12"
              sm="4"
              md="3"
              lg="3"
              xl="3"
            >
              <v-avatar

                color="warning lighten-2"
                size="130"
              >
                <v-img
                  v-if="card.Product_imgs"
                  :src="imgSrc(card.Product_imgs[0].product_img)" />
              </v-avatar>
            </v-col>
            <v-col
              cols="12"
              sm="4"
              md="5"
              lg="5"
              xl="5"
              align="start"
            >
              <v-card-title
                :class="card_text"
                centered-input
              >
                <v-text-field
                  :disabled="isDisabled(index)"
                  class="centered-input"
                  hide-details
                  label="메뉴 이름"
                  outlined
                  dense
                  :value="card.name"
                  @input="getName($event,index)"
                />
              </v-card-title>
              <v-card-text
                class="text--secondary"
                :class="card_text"
              >
                <v-text-field
                  :disabled="isDisabled(index)"
                  hide-details
                  outlined
                  label="메뉴 설명"
                  dense
                  :value="card.product_info"
                  @input="getInfo($event,index)"
                />
              </v-card-text>
              <v-card-text
                class="font-weight-bold"
                :class="card_text"
              >
                <v-text-field
                  :disabled="isDisabled(index)"
                  class="centered-input"
                  hide-details
                  outlined
                  label="가격"
                  dense
                  :value="card.price"
                  ref="priceInt"
                  @input="getPrice($event,index)"
                />
              </v-card-text>
            </v-col>
            <v-spacer />
            <v-col
              cols="12"
              sm="3"
              md="3"
              lg="2"
              xl="2"
            >
              <div
                v-if="$vuetify.breakpoint.name === 'xs'"
                class="text-center"
              >
                <v-btn
                  color="error"
                  outlined
                  class="text-center"
                  @click="deleteMenu"
                >
                  삭제
                </v-btn>
              </div>
              <v-card-actions
                v-else
              >
                <v-btn
                  color="error"
                  outlined
                  class="text-center"
                  :index="index"
                  @click="deleteMenu"
                >
                  삭제
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "InfoMenucards",
  data: () => ({
    card_text: 'text-center text-sm-left text-md-left ',
  }),
  computed: {
    cards: {
      get() {
        console.log(this.$store.getters["menu/getMenu"])
        return this.$store.getters["menu/getMenu"]
      },
      set(){
        this.$store.dispatch("menu/actMenu")
      }
    },
    //checkbox고른거
    checkbox: {
      set(value){
        this.$store.commit("menu/setMenu_Checkbox",value)
      },
      get(){
        return this.$store.getters["menu/getMenu_Checkbox"]
      }
    },
  },
  created() {
    this.$store.dispatch("menu/actMenu")
  },
  methods: {
    isDisabled(test){
      const test2 = this.$store.getters["menu/getMenu_Checkbox"];
      return !test2.includes(test)
      },
    deleteMenu(e){
      this.$store.commit("menu/setDelete",e)
    },
    imgSrc(name){
      name = name.replaceAll("\\", "/");
      return require(`../../../../../../back/${name}`);
    },
    getPrice(value,index){
      console.log(value)
      this.$store.dispatch("menu/actUpdate",
        {index :index, property :  "price", value : value.toString()})
    },
    getInfo(value,index){
      console.log(value)
      this.$store.dispatch("menu/actUpdate",
        {index :index, property :  "product_info", value : value})
    },
    getName(value,index){
      console.log(value)
      this.$store.dispatch("menu/actUpdate",
        {index :index, property :  "name", value : value})
    },
  }
  }

</script>

<style scoped>

</style>


