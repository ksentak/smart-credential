<template>
  <PassGenerator />
</template>

<script>
import PassGenerator from './components/PassGenerator.vue';

export default {
  name: 'App',
  components: {
    PassGenerator
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
