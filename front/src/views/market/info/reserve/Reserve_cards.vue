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
          :value="card.menu_id"
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
              >
              <v-avatar
                color="warning lighten-2"
                size="130"
                @click="onClickImgUpload(index)"
              >
                <v-img
                  :src="card.menu_img"
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
                  v-model="card.menu_name"
                  :disabled="isDisabled(card.menu_id)"
                  class="centered-input"
                  hide-details
                  label="좌석 이름"
                  outlined
                  dense
                  :value="card.menu_name"
                />
              </v-card-title>
              <v-card-text
                class="text--secondary"
                :class="card_text"
              >
                <v-text-field
                  v-model="card.menu_info"
                  :disabled="isDisabled(card.menu_id)"
                  hide-details
                  outlined
                  label="좌석 설명"
                  dense
                  :value="card.menu_info"
                />
              </v-card-text>
              <v-card-text
                class="font-weight-bold"
                :class="card_text"
              >
                <v-text-field
                  v-model="card.menu_price"
                  :disabled="isDisabled(card.menu_id)"
                  class="centered-input"
                  hide-details
                  outlined
                  label="좌석 가격"
                  dense
                  :value="card.menu_price"
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
                  :disabled="isDisabled(card.menu_id)"
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
                  :disabled="isDisabled(card.menu_id)"
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
    <reservecarddialog />
  </v-container>
</template>

<script>
import Reservecarddialog from "@/views/market/info/reserve/Reserve_delete_dialog";
export default {
  name: "Reservecard",
  components: {Reservecarddialog},
  data: () => ({
    card_text: 'text-center text-sm-left text-md-left ',
  }),
  computed: {
    cards: {
      get() {
        return this.$store.getters["menu/getMenu"]
      },
      set(value){
        this.$store.commit("menu/setMenu",value)
      }
    },
    checkbox: {
      set(value){
        this.$store.commit("menu/setMenu_Checkbox",value)
      },
      get(){
        return this.$store.getters["menu/getMenu_Checkbox"]
      }
    },
  },
  created(){
    this.copyMenu();
  },
  methods: {
    isDisabled(value){
      const Checkbox = this.$store.getters["menu/getMenu_Checkbox"];
      return !Checkbox.includes(value)
      },
    deleteMenu(e){
      this.$store.commit("menu/setDelete",e)
    },
    copyMenu(){
      this.$store.commit("menu/copymenu")
    },
    onClickImgUpload (value) {
      this.$refs.menuImageInput[value].click();
    },
  }
  }

</script>

<style scoped>

</style>


