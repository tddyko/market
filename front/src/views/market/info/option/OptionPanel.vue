<template>
  <v-container>
    <v-row
      v-for="(option,index) in Option"
      :key="index"
      class="mt-5"
      justify="start"
    >
      <v-col
        align-self="center"
        cols="auto"
      >
        <v-checkbox
          v-model="checkbox"
          :value="index"
        />
      </v-col>
      <v-col align-self="center">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-row no-gutters>
                <v-col cols="5">
                  <v-text-field
                    v-model="option.name"
                    :rules="rules"
                    :value="option.name"
                    hide-details="auto"
                    hint="대분류 이름 예시) 음료, 주류 등"
                    label="대분류 이름"
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
                class="mt-5"
                justify="start"
              >
                <v-col cols="1">
                  <v-checkbox
                    v-model="optionCheckbox"
                    :value="optionIndex"
                  />
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    v-model="small_category.name"
                    :value="small_category.name"
                    outlined
                    placeholder="소분류 이름"
                  />
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    v-model="small_category.price"
                    :value="small_category.price"
                    outlined
                    placeholder="가격"
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

    <Optioncarddialog />
  </v-container>
</template>

<script>

export default {
  components: {
    Optioncarddialog: () => import('@/views/market/info/option/Option_delete_dialog')
  },
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
        return this.$store.getters["menu/getOption_Checkbox"]
      }
    },
    optionCheckbox : {
      set(value){
        this.$store.commit("menu/setOption_item_checkbox",value)
      },
      get(){
        return this.$store.getters["menu/getOption_item_checkbox"]
      }
    },
    Option:{
      get(){
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
      this.$store.dispatch("menu/actDeleteOption_items",value)
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
