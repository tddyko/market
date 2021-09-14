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
                  v-model="card.room_name"
                  :disabled="isDisabled(index)"
                  :value="card.room_name"
                  class="centered-input"
                  dense
                  hide-details
                  label="좌석 이름"
                  outlined
                />
              </v-card-title>
              <v-card-text
                :class="card_text"
                class="text--secondary"
              >
                <v-text-field
                  v-model="card.room_comment"
                  :disabled="isDisabled(index)"
                  :value="card.room_comment"
                  dense
                  hide-details
                  label="좌석 설명"
                  outlined
                />
              </v-card-text>
              <v-card-text
                :class="card_text"
                class="font-weight-bold"
              >
                <v-text-field
                  v-model="card.room_price"
                  :disabled="isDisabled(index)"
                  :value="card.room_price"
                  class="centered-input"
                  dense
                  hide-details
                  label="추가 가격"
                  outlined
                />
              </v-card-text>
            </v-col>
            <v-spacer />
            <v-col
              cols="12"
              lg="2"
              md="3"
              sm="3"
              xl="2"
            />
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <Roomcarddialog />
  </v-container>
</template>

<script>
export default {
  name: "Reservecard",
  components: {
    Roomcarddialog: () => import('@/views/market/info/reserve/Reserve_delete_dialog')
  },
  data: () => ({
    card_text: 'text-center text-sm-left text-md-left ',
  }),
  computed: {
    cards: {
      get() {
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
      return this.$routerPort + name;
    },

  }
}
</script>

<style scoped>
</style>
