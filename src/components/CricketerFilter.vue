<template>
    <div class='countries-filter'>
     <div v-for='country in countries'>
       <input 
         type='radio' 
         v-bind:value='country' 
         v-model='selectedCountry' 
         v-bind:checked='country === selectedCountry'
         @change='onCountryChange()'>
       <label>{{ country }}</label>
     </div>
    </div>
</template>

<script>
import { countries } from '../enums/countries';

export default {
  name: 'cricketer-filter',
  data() {
    return {
      selectedCountry: 'All',
      countries: ['All'].concat(countries)
    };
  },
  methods: {
    onCountryChange() {
      this.$emit('country_change', this.selectedCountry);
    }
  }
};
</script>

<style>
    .countries-filter {
        display: flex;
        justify-content: center;
    }
</style>