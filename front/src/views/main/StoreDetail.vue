<template>
  <v-container>
    <v-card>
      <v-row
        justify="space-between"
      >
        <v-col
          cols="4"
          class="ml-15"
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
          xl="7"
          align-self="start"
        >
          <div class="text-h3 text-left font-weight-bold my-16">
            백종원이 인정한 연돈 <small>일식</small>
          </div>
          <v-row>
            <v-col
              xl="1"
            >
              <v-rating
                class="star"
                background-color="grey"
                color="warning"
                length="5"
                readonly
                size="45"
                value="4.5"
                half-increments
                dense
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
      class="mt-10"
      fixed-tabs
      background-color="white"
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
                mandatory
                active-class="primary--text"
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
                  cols="2"
                  class="mx-4"
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
                    outlined
                    color="indigo"
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
                  cols="2"
                  class="mx-4"
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
                    outlined
                    color="indigo"
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
                    locale="ko"
                    color="warning"
                    full-width
                    class="mt-10"
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
                      v-for="tag in tags2"
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
                        outlined
                        class="btn-people"
                      >
                        -
                      </v-btn>
                      <span>1</span>
                      <v-btn
                        outlined
                        class="btn-people"
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
      <!-- // 예약 탭 끝 -->
      <!-- 리뷰 탭 -->
      <v-tab-item>
        <v-card 
          class="mt-10 mx-auto"
          max-width="900px"
        >
          <v-row>
            <v-col xl="6">
                <v-rating
                  class="star"
                  background-color="grey"
                  color="warning"
                  length="5"
                  readonly
                  size="30"
                  value="4.5"
                  half-increments
                  dense
                />
            </v-col>
            <v-divider
              inset
              vertical
            />
            <v-col xl="6">
              <span>5.0</span>
              <v-progress-linear
                v-model="valueDeterminate"
                height="10"
                color="indigo darken-2"
              />
            </v-col>
          </v-row>
        </v-card>

        <v-spacer />

        <v-card
          class="my-10 mx-auto"
          max-width="900px"
        >
          <v-row>
            <v-col>ddd</v-col>
          </v-row>
        </v-card>
      </v-tab-item>
      <!-- // 리뷰 탭 끝 -->
      <!-- 정보 탭 -->
      <v-tab-item>
        <v-card
          elevation="2"
          class="mx-auto my-10"
          max-width="1200"
        >
          <v-row>
            <v-col>
              <div class="text-h4 mt-10">
                매장 공지
              </div>
            </v-col>
          </v-row>
          <v-row
            justify="center"
            dense
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
            inset 
            class="my-15"
          />

          <v-row>
            <v-col>
              <div class="text-h4 mt-10">
                매장 정보
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
      <!-- // 정보 탭 끝 -->
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
      tags2: [
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
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
  v-progress-linear{
    display: inline;
    width: 60%;
  }
</style>