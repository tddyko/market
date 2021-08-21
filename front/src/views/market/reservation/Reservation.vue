<template>
  <v-row justify="center">
    <v-col
      align-self="center"
      cols="12"
      lg="10"
      md="12"
      sm="12"
      xl="8"
    >
      <v-card class-name="rounded-xl">
        <v-expansion-panels
          flat
        >
          <v-expansion-panel>
            <v-expansion-panel-header class-name="rounded-xl">
              <v-text-field
                v-model="date"
                flat
                label="날짜 변경"
                prepend-icon="mdi-calendar"
                readonly
              />
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-date-picker
                v-model="date"
                class-name="elevation-1"
                full-width
                @input="menu = false"
                @change="getReserve()"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class=" ma-6 "
          flat
        />
      </v-card>
      
        
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: '예약내역',         //컴포넌트 이름
  data() {
    return {
      date: null,
      menu: false,
      modal: false, 
      headers: [
        {text: '예약번호', align: 'center', sortable: false, value: 'reservation_id',},
        {text: '예약날짜', value: 'reserve_date', align: 'center'}, 
        {text: '예약시간', value: 'reserve_time', align: 'center'}, 
        {text: '예약인원', value: 'order_count', align: 'center'},
        {text: '예약상태', value: 'current_state', align: 'center'},
      ],
      items: [
        
      ]
    }
  },
  methods: {
    
    getReserve(){   
      this.$Axios({
        url : "http://localhost/reservation/list",
        method : "get",
        withCredentials : true,
        params: {
          dateValue: this.date
        }
        }).then((response)=>{  
       
            this.items = response.data;
       
        })
  }
  }
}
</script>

<style scoped>
#warp {
  width: 645px;
  height: 530px;
}
</style>
