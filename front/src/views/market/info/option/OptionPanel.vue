<template>
  <v-container>
    <v-row
      v-for="(option,index) in Option"
      :key="index"
      class="mt-5"
      justify="start"
    >
      <v-col
        cols="auto"
        align-self="center"
      >
        <v-checkbox
          v-model="checkbox"
          :value="option.pd_option_group_id"
        />
      </v-col>
      <v-col align-self="center">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-row no-gutters>
                <v-col cols="5">
                  <v-text-field
                    :rules="rules"
                    hide-details="auto"
                    hint="대분류 이름 예시) 음료, 주류 등"
                    label="대분류 이름"
                    :value="option.name"
                  />
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="error"
                  outlined
                  @click="deleteOptions(index)"
                >
                  삭제
                </v-btn>
                <v-btn
                  color="primary"
                  outlined
                  @click="addMenu_Option_items(index)"
                >
                  추가
                </v-btn>
              </v-card-actions>
              <!--  생성되어야할 소분류 영역      -->
              <v-row
                v-for="(small_category,optionIndex) in option.Pd_options"
                :key="optionIndex"
                justify="start"
                class="mt-5"
              >
                <v-col cols="1">
                  <v-checkbox
                    v-model="optionCheckbox"
                    :value="optionIndex"
                  />
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    outlined
                    placeholder="소분류 이름"
                    :value="small_category.name"
                    @input="getOptionName($event,index,optionIndex)"
                  />
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    outlined
                    placeholder="가격"
                    :value="small_category.price"
                    @input="getOptionPrice($event,index,optionIndex)"
                  />
                </v-col>
              </v-row>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="secondary"
                  text
                >
                  취소
                </v-btn>
                <v-btn
                  color="primary"
                  text
                  @click="submitOptions(index)"
                >
                  저장
                </v-btn>
              </v-card-actions>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <Optioncarddialog/>
  </v-container>
</template>

<script>

import Optioncarddialog from "@/views/market/info/option/Option_delete_dialog";
export default {
  components: {Optioncarddialog},
  data: () => ({
    rules: [
      value => !!value || '대분류를 입력하세요.',
      value => (value && value.length >= 2) || '최소 2자 이상 입력하세요.',
    ],
  }),
  computed: {
    checkbox: {
      set(value){
        this.$store.commit("menu/setOption_Checkbox",value)
      },
      get(){
        console.log(this.$store.getters["menu/getOption_Checkbox"])
        return this.$store.getters["menu/getOption_Checkbox"]
      }
    },
    optionCheckbox : {
      set(value){
        this.$store.commit("menu/setOption_item_checkbox",value)
      },
      get(){
        console.log(this.$store.getters["menu/getOption_item_checkbox"])
        return this.$store.getters["menu/getOption_item_checkbox"]
      }
    },
    Option:{
      get(){
        console.log('옵션을 가져오는 중 ...')
        console.log(this.$store.getters['menu/getMenu_Option'])
        return this.$store.getters['menu/getMenu_Option']
      },
    },
  },
  methods : {
    addMenu_Option_items(value){
      this.$store.commit("menu/setMenu_Option_items",value)
    },
    submitOptions(index){
      this.$store.dispatch("menu/actMenu_Options",index)
    },
    deleteOptions(value){
      console.log('삭제')
      this.$store.dispatch("menu/actDeleteOption_items",value)
    },
    // getInfo(value,index){
    //   console.log(value)
    //   this.$store.dispatch("menu/actUpdate",
    //     {index :index, property :  "product_info", value : value})
    // },
    getOptionName(value,index,optionIndex){
      this.$store.dispatch("menu/actOptionUpdate",{index :index,optionIndex:optionIndex, property : 'name', value : value})
    },
    getOptionPrice(value,index,optionIndex){
      this.$store.dispatch("menu/actOptionUpdate",{index :index,optionIndex:optionIndex, property : 'price', value : parseInt(value)})
    }
  }
}
</script>
<style>
.add-btn{
  display: flex;
  justify-content: flex-end;
}
</style>
