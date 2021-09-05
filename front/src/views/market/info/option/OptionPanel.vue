<template>
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
            />
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <!--   추가 버튼    -->
        <v-row>
          <v-col cols="12">
            <v-spacer />
            <div class="add-btn">
              <v-btn
                color="indigo"
                outlined
              >
                추가
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <!--  생성되어야할 소분류 영역      -->
        <v-row justify="start">
          <v-col cols="1">
            <!-- 체크박스 Vuetify Model in array 스크립트 작업 요망.-->
            <v-checkbox />
          </v-col>
          <v-col cols="5">
            <v-text-field
              outlined
              placeholder="소분류 이름"
            />
          </v-col>
          <v-col cols="5">
            <v-text-field
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
          >
            저장
          </v-btn>
        </v-card-actions>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  data: () => ({
    rules: [
      value => !!value || '대분류를 입력하세요.',
      value => (value && value.length >= 2) || '최소 2자 이상 입력하세요.',
    ],
  }),
}
</script>
<style>
.add-btn{
  display: flex;
  justify-content: flex-end;
}
</style>
