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
              <input
                ref="menuImageInput"
                hidden
                multiple
                type="file"
                :disabled="isDisabled(index)"
                @change="uploadMenuImg(index)"
              >
              <v-avatar
                color="warning lighten-2"
                size="130"
                @click="onClickImgUpload(index)"
              >
                <v-img
                  v-if="card.Product_imgs != 0 && card.Product_imgs !=null"
                  :src="imgSrc(card.Product_imgs[0].product_img)" />
                <v-img
                  v-if="previewSrc(index)!=0 && card.Product_imgs == null "
                  :src="previewSrc(index)"
                  />
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

          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <menucarddialog/>
  </v-container>
</template>

<script>
import Menucarddialog from "@/views/market/info/menu/Menu_delete_dialog";
export default {
  name: "InfoMenucards",
  components: {Menucarddialog},
  data: () => ({
    card_text: 'text-center text-sm-left text-md-left ',
  }),

  computed: {
    cards: {
      get(){
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

    imgSrc(name){
      name = name.replaceAll("\\", "/");
      return require(`../../../../../../back/${name}`);
    },
    getPrice(value,index){
      console.log(value)
      this.$store.dispatch("menu/actUpdate",
        {index :index, property :  "price", value : parseInt(value)})
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
    onClickImgUpload (value) {
      console.log(value)
      this.$refs.menuImageInput[value].click();
    },
    uploadMenuImg(index){
      console.log(this.$refs.menuImageInput[index].files[0])
      this.$store.dispatch("menu/actUpdate",
        {index :index, property :  "menuImg", value : this.$refs.menuImageInput[index].files[0]})
    },
    previewSrc(index){
      let URl=0;
      try {
        URl = URL.createObjectURL(this.$refs.menuImageInput[index].files[0])
      }catch{}
        return URl
    }
  }
  }

</script>

<style scoped>

</style>


