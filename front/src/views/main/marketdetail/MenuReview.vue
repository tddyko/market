<template>
  <v-container>
    <v-card
      class="mt-10 mx-auto"
      max-width="900px"
    >
      <v-row justify="center">
        <v-col
          align="center"
          align-self="center"
          xl="6"
        >
          <v-rating
            background-color="grey"
            color="warning"
            dense
            half-increments
            length="5"
            readonly
            size="50"
            value="4.5"
          />
        </v-col>
        <v-divider
          inset
          vertical
        />
        <v-col
          align-self="center"
          xl="2"
        >
          <p>5.0</p>
          <p>4.0</p>
          <p>3.0</p>
          <p>2.0</p>
          <p>1.0</p>
        </v-col>
        <v-col xl="3">
          <v-progress-linear
            v-model="valueDeterminate"
            class="mt-3"
            color="indigo darken-2"
            height="10"
          />
          <v-progress-linear
            v-model="valueDeterminate"
            class="my-8"
            color="indigo darken-2"
            height="10"
          />
          <v-progress-linear
            v-model="valueDeterminate"
            class="my-8"
            color="indigo darken-2"
            height="10"
          />
          <v-progress-linear
            v-model="valueDeterminate"
            class="my-8"
            color="indigo darken-2"
            height="10"
          />
          <v-progress-linear
            v-model="valueDeterminate"
            class="my-8"
            color="indigo darken-2"
            height="10"
          />
        </v-col>
      </v-row>
    </v-card>

    <v-spacer />
    <v-card
      class="my-10 mx-auto"
      max-width="900px"
    >
      <!-- <v-card-text> -->
      <v-container>
        <v-row justify="end">
          <v-col xl="3">
            <v-select
              :items="['주문 리뷰', '예약 리뷰']"
              class="select-width pa-5 mt-5"
              dense
              label="주문 리뷰"
            >
              <template #item="{ item, attrs, on }">
                <v-list-item
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-list-item-title
                    :id="attrs['aria-labelledby']"
                    v-text="item"
                  />
                </v-list-item>
              </template>
            </v-select>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="start"
          no-gutters
        >
          <v-col
            lg="1"
            md="1"
            xl="1"
          >
            <v-avatar>
              <img
                alt="John"
                src="https://cdn.vuetifyjs.com/images/john.jpg"
              >
            </v-avatar>
          </v-col>
          <v-col
            :class="`text-${fontsize}`"
            class="font-weight-bold"
            lg="1"
            md="1"
            xl="1"
          >
            닉네임
          </v-col>
          <v-col
            :class="`text-${datesize}`"
            align="start"
            class="font-weight-light mr-1"
            lg="9"
            md="9"
            xl="9"
          >
            0000년 00월 00일
            <v-rating
              v-model="rating"
              :size="`${ratingsize}`"
              background-color="warning lighten-1"
              color="orange"
              dense
              half-increments
            />
          </v-col>
          <v-col
            align="center"
            class="mt-1"
            lg="12"
            md="12"
            xl="12"
          >
            <img
              alt="John"
              class="rounded-lg ma-2"
              height="200"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              width="200"
            >
          </v-col>
          <v-col
            class="ma-2"
            lg="8"
            md="8"
            xl="12"
          >
            <v-textarea
              class="px-16"
              hide-details
              no-resize
              placeholder="내용을 입력하세요."
              readonly
              rounded
              value="맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요맛있어요"
            />
          </v-col>
        </v-row>
      </v-container>
      <!-- </v-card-text> -->
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MenuReview"
}
</script>

<style scoped>

</style>
