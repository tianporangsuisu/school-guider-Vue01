<template>
  <div id="app">
    <Menu id="menu"></Menu>
    <div style="clear:both"></div>
  </div>
</template>

<script>
import Menu from "@/views/Menu";

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url("../src/assets/map.png");
}

#menu {
  margin-bottom: 15px;
  float: left;
  width: 400px;
  height: 300px;
}
</style>
