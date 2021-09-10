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
                @change="uploadRoomImg(index)"
              >
              <v-avatar
                color="warning lighten-2"
                size="130"
                @click="onClickImgUpload(index)"
              >
                <v-img
                  v-if="card.room_images != 0 && card.room_images !=null"
                  :src="imgSrc(card.room_images)"
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
                  v-model="card.room_name"
                  :disabled="isDisabled(index)"
                  class="centered-input"
                  hide-details
                  label="좌석 이름"
                  outlined
                  dense
                  :value="card.room_name"
                />
              </v-card-title>
              <v-card-text
                class="text--secondary"
                :class="card_text"
              >
                <v-text-field
                  v-model="card.room_comment"
                  :disabled="isDisabled(index)"
                  hide-details
                  outlined
                  label="좌석 설명"
                  dense
                  :value="card.room_comment"
                />
              </v-card-text>
              <v-card-text
                class="font-weight-bold"
                :class="card_text"
              >
                <v-text-field
                  v-model="card.room_price"
                  :disabled="isDisabled(index)"
                  class="centered-input"
                  hide-details
                  outlined
                  label="추가 가격"
                  dense
                  :value="card.room_price"
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
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <Roomcarddialog />
  </v-container>
</template>

<script>
import Roomcarddialog from "@/views/market/info/reserve/Reserve_delete_dialog";
export default {
  name: "Reservecard",
  components: {Roomcarddialog},
  data: () => ({
    card_text: 'text-center text-sm-left text-md-left ',
  }),
  computed: {
    cards: {
      get() {
        console.log('get')
        console.log(this.$store.getters["menu/getRoom"])
        return this.$store.getters["menu/getRoom"]
      },
      set(value){
        console.log('set')
        this.$store.dispatch("menu/actRoom",value)
      }
    },
    checkbox: {
      set(value){
        this.$store.commit("menu/setRoom_Checkbox",value)
      },
      get(){
        return this.$store.getters["menu/getRoom_Checkbox"]
      }
    },
  },
  created() {
    this.$store.dispatch("menu/actRoom")
  },
  methods: {
    isDisabled(value){
      const Checkbox = this.$store.getters["menu/getRoom_Checkbox"];
      return !Checkbox.includes(value)
    },
    onClickImgUpload (value) {
      this.$refs.menuImageInput[value].click();
    },
    uploadRoomImg(index){
      console.log(this.$refs.menuImageInput[index].files[0])
      this.$store.dispatch("menu/actUpdateRoomImg",
        {index :index, property :  "room_img", value : this.$refs.menuImageInput[index].files[0]})
    },
    imgSrc(name){
      name = name.replaceAll("\\", "/");
      return require(`../../../../../../back/${name}`);
    },

  }
}
</script>

<style scoped>
</style>
