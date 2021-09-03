<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-select
          :items="items"
          label="Menu"
          outlined
          full-width
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>
