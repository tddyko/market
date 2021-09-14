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
        align-self="center"
        cols="auto"
      >
        <v-checkbox
          v-model="checkbox"
          :value="index"
        />
      </v-col>
      <v-col
        cols="9"
        lg="10"
        md="9"
        sm="11"
        xl="9"
      >
        <v-card
          class="pa-5"
          height="auto"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              align="center"
              class="mx-4"
              cols="12"
              lg="3"
              md="3"
              sm="4"
              xl="3"
            >
              <input
                ref="menuImageInput"
                :disabled="isDisabled(index)"
                hidden
                multiple
                type="file"
                @change="uploadMenuImg(index)"
              >
              <v-avatar
                color="warning lighten-2"
                size="130"
                @click="onClickImgUpload(index)"
              >
                <v-img
                  v-if="card.Product_imgs != 0 && card.Product_imgs !=null"
                  :src="imgSrc(card.Product_imgs[0].product_img)"
                />
                <v-img
                  v-else-if="previewSrc(index)!=0"
                  :src="previewSrc(index)"
                />
              </v-avatar>
            </v-col>
            <v-col
              align="start"
              cols="12"
              lg="5"
              md="5"
              sm="4"
              xl="5"
            >
              <v-card-title
                :class="card_text"
                centered-input
              >
                <v-text-field
                  v-model="card.name"
                  :disabled="isDisabled(index)"
                  :value="card.name"
                  class="centered-input"
                  dense
                  hide-details
                  label="메뉴 이름"
                  outlined
                />
              </v-card-title>
              <v-card-text
                :class="card_text"
                class="text--secondary"
              >
                <v-text-field
                  v-model="card.product_info"
                  :disabled="isDisabled(index)"
                  :value="card.product_info"
                  dense
                  hide-details
                  label="메뉴 설명"
                  outlined
                />
              </v-card-text>
              <v-card-text
                :class="card_text"
                class="font-weight-bold"
              >
                <v-text-field
                  v-model="card.price"
                  :disabled="isDisabled(index)"
                  :value="card.price"
                  class="centered-input"
                  dense
                  hide-details
                  label="가격"
                  outlined
                />
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <menucarddialog />
  </v-container>
</template>

<script>
export default {
  name: "InfoMenucards",
  components: {
    Menucarddialog: () => import('@/views/market/info/menu/Menu_delete_dialog')
  },
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
      return this.$routerPort + name;
    },
    onClickImgUpload (value) {
      this.$refs.menuImageInput[value].click();
    },
    uploadMenuImg(index){
      this.$store.dispatch("menu/actUpdateMenuImg",
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


