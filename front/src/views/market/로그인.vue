<template>
  <v-container
    width-full
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
          <div
            align="left"
          >
            이메일
            <v-text-field   
               
              outlined
              dense  
              label="이메일"
            />
          </div>
          <div align="left">
            비밀번호
            <v-text-field
              outlined
              dense
              label="비밀번호"
            />
          </div>
          
          <v-switch
            v-model="switch1"
            :label="`Switch 1: ${switch1.toString()}`"
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
data: () => ({
   switch1: true,
})
}
</script>

<style>

</style>