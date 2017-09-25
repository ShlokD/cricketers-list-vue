<template>
        <div>
        <input v-model='cricName' placeholder="Enter name"></input>
        <select v-model='cricTeam' placeholder='Select Team'>
        <option v-for='country in countries'>
          {{ country }}
          </option>
        </select>
        <input v-model='cricPic' placeholder="Enter picture url"></input>
        <button
         @click='onAddCricketer'>
        Enter
        </button>
    </div>
</template>

<script>
import { countries } from '../enums/countries';

export default {
  name: 'cricketer-input',
  data() {
    return {
      cricName: '',
      cricTeam: '',
      cricPic: '',
      countries
    };
  },
  methods: {
    onAddCricketer() {
      this.$emit('add_cricketer', { name: this.cricName, team: this.cricTeam, picture: this.cricPic });
      this.cricName = '';
      this.cricTeam = '';
      this.cricPic = '';
    }
  }
};
</script>