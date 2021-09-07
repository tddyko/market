<template>
  <v-container>
    <v-row
      v-for="option in Option"
      :key="option"
      class="mt-5"
      justify="start"
    >
      <v-col
        cols="auto"
        align-self="center"
      >
        <v-checkbox
          v-model="checkbox"
          :value="option.Pd_option_groups_id"
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
                >
                  삭제
                </v-btn>
                <v-btn
                  color="primary"
                  outlined
                >
                  추가
                </v-btn>
              </v-card-actions>
              <!--  생성되어야할 소분류 영역      -->
              <v-row
                v-for="small_category in option.Pd_options"
                :key="small_category"
                justify="start"
                class="mt-5"
              >
                <v-col cols="1">
                  <!-- 체크박스 Vuetify Model in array 스크립트 작업 요망.-->
                  <v-checkbox />
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    outlined
                    placeholder="소분류 이름"
                    :value="small_category.name"
                  />
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    outlined
                    placeholder="가격"
                    :value="small_category.price"
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
                >
                  저장
                </v-btn>
              </v-card-actions>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
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
  Option:{
    get(){
      return this.$store.getters['menu/getMenu_Option']
    },
  },
  },

}
</script>
<style>
.add-btn{
  display: flex;
  justify-content: flex-end;
}
</style>

