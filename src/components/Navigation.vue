<template>
  <el-row>
    <el-tabs v-model="activeName" id="navigator" @tab-click="handleClick">
      <el-tab-pane label="首页" name="/" ></el-tab-pane>
      <el-tab-pane label="全部建筑信息" name="/allBuildings"></el-tab-pane>
      <el-tab-pane label="获取路径" name="/allPaths"></el-tab-pane>
      <el-tab-pane label="旅游模式" name="/unRepeatedPath"></el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
export default {
  name: "Navigation",
  data(){
    return{
       activeName: 'first'
    }
  },
  methods: {
    handleClick(tab) {
      this.jumpTo(tab.name);
    },
    jumpTo(routerPath) {
      this.$router.push({path: routerPath})

    }
  },
}
</script>

<style scoped>
#navigator{
  font-size: 14px;
}
</style>