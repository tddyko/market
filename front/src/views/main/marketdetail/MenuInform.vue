<template>
  <v-container>
    <!-- 정보 탭 -->
    <v-card
      class="mx-auto my-10"
      elevation="2"
      max-width="1200"
    >
      <v-row>
        <v-col>
          <div class="text-h4 mt-10 text-center">
            매장 공지
          </div>
        </v-col>
      </v-row>
      <v-row
        dense
        justify="center"
      >
        <v-col xl="2">
          <v-img
            class="my-10"
            lazy-src="https://picsum.photos"
            max-height="150"
            max-width="150"
            src="https://picsum.photos/150"
          />
        </v-col>
        <v-col xl="2">
          <v-img
            class="my-10"
            lazy-src="https://picsum.photos"
            max-height="150"
            max-width="150"
            src="https://picsum.photos/150"
          />
        </v-col>
        <v-col xl="2">
          <v-img
            class="my-10"
            lazy-src="https://picsum.photos"
            max-height="150"
            max-width="150"
            src="https://picsum.photos/150"
          />
        </v-col>
        <v-col xl="2">
          <v-img
            class="my-10"
            lazy-src="https://picsum.photos"
            max-height="150"
            max-width="150"
            src="https://picsum.photos/150"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="text--secondary">
            매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내

            매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내

            매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내

            매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내

            매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내

            매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내

            매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내

            매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내 매장안내
          </div>
        </v-col>
      </v-row>

      <v-divider
        class="my-15"
        inset
      />

      <v-row>
        <v-col>
          <div class="text-h4 mt-10 text-center">
            매장 정보
          </div>
        </v-col>
      </v-row>
      <v-row
        class="mt-10"
        justify="center"
      >
        <v-col
          lg="10"
        >
          <v-row
            align="center"
            justify="start"
          >
            <v-col
              class="font-weight-bold"
              lg="2"
            >
              스토어 이미지
            </v-col>
            <v-col lg="2">
              <v-avatar size="100">
                <img
                  alt="John"
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
              </v-avatar>
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="start"
          >
            <v-col
              class="font-weight-bold"
              lg="2"
            >
              매장 소개
            </v-col>
            <v-col lg="6">
              매장소개 매장소개 매장소개 매장소개 매장소개 매장소개
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="start"
          >
            <v-col
              class="font-weight-bold"
              lg="2"
            >
              매장 전화번호
            </v-col>
            <v-col
              lg="2"
            >
              031-2222-2222
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="start"
          >
            <v-col
              class="font-weight-bold"
              lg="2"
            >
              영업시작 시간
            </v-col>
            <v-col lg="2">
              09:00 am
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="start"
          >
            <v-col
              class="font-weight-bold"
              lg="2"
            >
              영업종료 시간
            </v-col>
            <v-col lg="2">
              20:00 pm
            </v-col>
          </v-row>
          <v-row
            align="center"
            class="mb-10"
            justify="start"
          >
            <v-col
              class="font-weight-bold"
              lg="2"
            >
              휴무일
            </v-col>
            <v-col
              lg="2"
            >
              매주 월요일
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MenuInform"
}
</script>

<style scoped>

</style>
