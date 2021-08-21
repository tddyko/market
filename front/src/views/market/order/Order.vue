<template>
  <v-row justify="center">
    <v-col
      lg="10"
      xl="8"
      md="12"
      sm="12"
      cols="12"
      align-self="center"
    >
      <v-card class="rounded-xl">
        <v-expansion-panels
          flat
        >
          <v-expansion-panel>
            <v-expansion-panel-header class="rounded-xl">
              <v-text-field
                v-model="date"
                label="날짜 변경"
                prepend-icon="mdi-calendar"
                readonly
                flat
              />
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-date-picker
                v-model="date"
                full-width
                class="elevation-1"
                @input="menu = false"
                @change="getOrder()"
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
  name: 'Order',         //컴포넌트 이름
  data(){
    return{
        date: null,
        menu: false,
        modal: false,
        headers: [
          {text: '주문번호', align: 'center', sortable: false, value: 'order_id',},
          { text: '주문시각', value: 'createdAt', align: 'center'},
          { text: '주문내역', value: 'Products.name', align: 'center'},
          { text: '주문건수', value: 'order_count',  align: 'center'},
          { text: '주문금액', value: 'price',  align: 'center'},
          { text: '주문상태', value: 'current_state',     align: 'center'},
        ],
      items: [
     ]
    }
  },
  
  methods: {
    
    getOrder(){   
      console.log("wow")
      this.$Axios({
        url : "http://localhost/order/list",
        method : "get",
        withCredentials : true,
        params: {
          dateValue: this.date
        }
        }).then((response)=>{  
       
            this.items = response.data;
            console.log(this.items)
       
        })
  }
  }
}
</script>

<style scoped>
#warp{
 width: 645px;
 height: 530px;
}

</style>
