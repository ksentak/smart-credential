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
* {
  box-sizing: border-box;
}

body {
  background-color: #3d75c2;
  color: #fff;
  display: flex;
  font-family: 'Noto Sans JP', sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-height: 100vh;
}

p {
  margin: 5px 0;
}

h2 {
  margin: 10px 0 20px;
  text-align: center;
}

input[type='checkbox'] {
  margin-right: 0;
}
</style>
