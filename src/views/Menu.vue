<template>
  <div id="menu">
    <el-row>
      <Navigation id="nav" :show="show"/>
    </el-row>
    <router-view>

    </router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "Menu",
  components: {
    Navigation
  },
  data(){
    return{
      show:false
    }
  },
}
</script>

<style scoped>
#nav {
  height: 50px;
}
#menu {
  margin-bottom: 15px;
  float: left;
  width: 400px;
  height: 300px;
  background:white;
  font-size: xx-small;
}
</style>