<template>
  <v-container>
    <v-card>
      <v-row
        justify="space-between"
      >
        <v-col
          class="ml-15"
          cols="4"
        >
          <v-img
            class="my-10"
            lazy-src="https://picsum.photos"
            max-height="600"
            max-width="600"
            src="https://picsum.photos/700"
          />
        </v-col>
        <v-col
          align-self="start"
          xl="7"
        >
          <div class="text-h3 text-left font-weight-bold my-16">
            백종원이 인정한 연돈 <small>일식</small>
          </div>
          <v-row>
            <v-col
              xl="1"
            >
              <v-rating
                background-color="grey"
                class="star"
                color="warning"
                dense
                half-increments
                length="5"
                readonly
                size="45"
                value="4.5"
              />
              <!-- <span class="rat-score">4.5</span> -->
            </v-col>
          </v-row>
          <h4>경기도 김포시 00동 000-00</h4>
          <h4>031-000-0000</h4>
        </v-col>
      </v-row>
    </v-card>
    <!-- 메뉴, 예약, 리뷰, 정보 탭 -->
    <v-tabs
      v-model="tabs"
      background-color="white"
      class="mt-10"
      fixed-tabs
    >
      <v-tabs-slider color="primary" />
      <v-tab>
        메뉴
      </v-tab>
      <v-tab>
        예약
      </v-tab>
      <v-tab>
        리뷰
      </v-tab>
      <v-tab>
        정보
      </v-tab>
    </v-tabs>
    <!-- 탭 내용 -->
    <v-tabs-items
      v-model="tabs"
    >
      <!-- 메뉴 탭 -->
      <v-tab-item>
        <!-- Menu chips -->
        <v-row justify="center">
          <v-col
            cols="5"
          >
            <v-sheet
              class="py-10"
            >
              <v-chip-group
                active-class="primary--text"
                mandatory
              >
                <v-chip
                  v-for="tag in tags"
                  :key="tag"
                >
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-sheet>
          </v-col>
        </v-row>
        <!-- // chips -->
        <v-row>
          <v-col>
            <h1 class="mb-10">
              메뉴 1
            </h1>
          </v-col>
        </v-row>
        <v-row
          class="my-1"
          justify="center"
        >
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <!-- 반복될 카드 -->
            <v-card
              height="180px"
            >
              <v-row
                align="center"
                justify="start"
              >
                <v-col
                  class="mx-4"
                  cols="2"
                >
                  <v-avatar
                    color="warning lighten-2"
                    size="130"
                    tile
                  />
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-card-title v-text="card.title" />
                  <v-card-text class="text-left text--secondary">
                    메뉴 설명
                  </v-card-text>
                  <v-card-text class="text-left font-weight-bold price">
                    9,900원
                  </v-card-text>
                </v-col>
                <v-card-actions>
                  <v-spacer />

                  <v-btn
                    color="indigo"
                    outlined
                  >
                    담기
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-card>
            <!-- 카드 끝 -->
          </v-col>
        </v-row>
      </v-tab-item>

      <!-- 예약 탭 -->
      <v-tab-item>
        <v-row class="my-10">
          <v-col>
            <h1 class="warning--text">
              예약 날짜
            </h1>
          </v-col>
        </v-row>
        <v-row
          class="my-1"
          justify="center"
        >
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <!-- 반복될 카드 -->
            <v-card
              height="180px"
            >
              <v-row
                align="center"
                justify="start"
              >
                <v-col
                  class="mx-4"
                  cols="2"
                >
                  <v-avatar
                    color="warning lighten-2"
                    size="130"
                    tile
                  />
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-card-title v-text="card.title" />
                  <v-card-text class="text-left text--secondary">
                    메뉴 설명
                  </v-card-text>
                  <v-card-text class="text-left font-weight-bold price">
                    9,900원
                  </v-card-text>
                </v-col>
                <v-card-actions>
                  <v-spacer />

                  <v-btn
                    color="indigo"
                    outlined
                  >
                    담기
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-card>
            <!-- 카드 끝 -->
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-expansion-panels
              v-model="panel"
              :disabled="disabled"
              multiple
            >
              <v-expansion-panel>
                <v-expansion-panel-header>날짜 선택</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-date-picker
                    v-model="picker"
                    :first-day-of-week="0"
                    class="mt-10"
                    color="warning"
                    full-width
                    locale="ko"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>시간 선택</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-chip-group
                    active-class="primary--text"
                    column
                  >
                    <v-chip
                      v-for="tag in tags"
                      :key="tag"
                    >
                      {{ tag }}
                    </v-chip>
                  </v-chip-group>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>인원 선택</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col>
                      <div>예약 인원수를 선택해주세요</div>
                    </v-col>
                    <v-col>
                      <v-btn
                        class="btn-people"
                        outlined
                      >
                        -
                      </v-btn>
                      <span>1</span>
                      <v-btn
                        class="btn-people"
                        outlined
                      >
                        +
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rat: '4.5',
    tabs: null,
    tags: [
      '메뉴1',
      '메뉴2',
      '메뉴3',
      '메뉴4',
      '메뉴5',
      '메뉴6',
      '메뉴7',
      '메뉴8',
      '메뉴9',
    ],
    cards: [
      { title: '등심 가츠', flex: 9 },
      { title: '치즈 가츠', flex: 9 },
    ],
  }),
}
</script>


<style>
small{
  font-size: 0.5em;
  font-weight: normal;
  color: grey;
}
.rat{
  display: inline;
}
h4{
  margin-top: 2em;
  font-size: 1.5em;
  text-align: left;
  font-weight: 400;
}
h4:first-of-type{
  margin-top: 3em;
}
.chip-group{
  margin-left: auto;
  margin-right: auto;
}
.price{
  font-size: 1.3em !important;
}
.btn-people{
  margin: 0 2em;
}
</style>
