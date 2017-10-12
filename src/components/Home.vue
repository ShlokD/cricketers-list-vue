<template>
  <div>
    <app-navigation />
    <ol>
      <li v-for='(c, index) in cricketers'>
        <cricketer-card :index='index' :cricketer='c'></cricketer-card>
      </li>
    </ol>
    <cricketer-input
      @add-cricketer='addCricketer'
    ></cricketer-input>
  </div>
</template>

<script>
import CricketerCard from './CricketerCard';
import CricketerInput from './CricketerInput';
import AppNavigation from './AppNavigation';

export default {
  name: 'hello',
  data() {
    return {
      countryFilter: 'All',
      cricketers: [
        { name: 'Virat Kohli', team: 'India', picture: 'http://p.imgci.com/db/PICTURES/CMS/263600/263697.20.jpg' },
        { name: 'Aaron Finch', team: 'Australia', picture: 'http://p.imgci.com/db/PICTURES/CMS/263500/263524.1.jpg' }
      ]
    };
  },
  methods: {
    addCricketer(cricketer) {
      this.cricketers.push(cricketer);
    }
  },
  components: {
    'cricketer-card': CricketerCard,
    'cricketer-input': CricketerInput,
    'app-navigation': AppNavigation
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 10px;
}

a {
  color: #42b983;
}

img {
  padding: 12px;
}

ol {
  display: flex;
  justify-content: center;
}
</style>
