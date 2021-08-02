<template>
  <v-container
    id="login-view"
    fluid
    p-10
    tag="section"
  >
    <v-card
      class="mx-12"
      elevation="1"
      outlined
    >
      <v-card-title class="text-h4 text-center my-10">
        No! Wait!
      </v-card-title>
      <div>
        <v-text-field 
          label="Main input" 
          :rules="rules" 
          hide-details="auto" 
        />
        <v-text-field label="Another input" />
      </div>
    </v-card>
  </v-container>
</template>
<script>
export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
}
</script>
