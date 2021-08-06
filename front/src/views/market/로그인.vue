<template>
  <v-container
    
    fill-height
  >
    <v-row
      justify="center"
    >
      <v-col
        cols=""
        xs="10"
        sm="6"
        md="6"
        lg="6"
        xl="6"
      >
        <v-card
          class="pa-5 "

          elevation="5"
          fill-height
          width="500"
          height="650"
        >
          <v-card-text>
            <h1>
              로그인
            </h1>
          </v-card-text>
          <v-text-field          
            label="이메일"
          />
          <v-text-field
            label="비밀번호"
          />
          <v-btn
            large
            block
            color="primary"
            rounded
          >
            로그인
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>