<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <cricketer-filter
     @country_change='countryChange'
    ></cricketer-filter>
    <ol>
      <li v-for='(c, index) in filteredCricketers'>
        <cricketer-card :index='index' :cricketer='c'></cricketer-card>
      </li>
    </ol>
    <cricketer-input
      @add_cricketer='addCricketer'
    ></cricketer-input>
  </div>
</template>

<script>
import CricketerCard from './CricketerCard';
import CricketerInput from './CricketerInput';
import CricketerFilter from './CricketerFilter';

export default {
  name: 'hello',
  data() {
    return {
      msg: `All Cricketers' List`,
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
    },
    countryChange(country) {
      this.countryFilter = country;
    }
  },
  components: {
    'cricketer-card': CricketerCard,
    'cricketer-input': CricketerInput,
    'cricketer-filter': CricketerFilter
  },
  computed: {
    filteredCricketers() {
      if (this.countryFilter !== 'All') {
        return this.cricketers.filter(cricketer => cricketer.team === this.countryFilter);
      }
      return this.cricketers;
    }
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
