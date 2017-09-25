<template>
    <div :index='index' class='cricketer-card'>
        <img v-bind:src='cricketer.picture' height=98 width=80 />
        <div class="cricketer-info">
            <span>{{cricketer.name}}</span>
            <span>{{cricketer.team}}</span>
        </div>
    </div>
</template>


<script>
export default {
  name: 'cricketer-card',
  props: ['cricketer', 'index']
};
</script>

<style scoped>
.cricketer-card {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
}

.cricketer-info {
  display: flex;
  flex-direction: column;

  padding-left: 12px;
}
</style>