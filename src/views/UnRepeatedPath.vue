<!--获取从A点到B点的所有路径-->
<template>
  <div>
    说明:选择一个起点,系统将自动分配一条不重复游览校园景点且能回到起点的路径
    <el-divider></el-divider>
    <div id="block-left">
      <el-input id="navInput" v-model="start1" placeholder="请输入起点" size="small"></el-input>
    </div>
    <el-button type="primary" size="small" style="float: right">获取推荐路径</el-button>
    <div style="clear: both"></div>
    <el-divider></el-divider>
    <div>{{ result1 }}</div>
  </div>
</template>

<script>
export default {
  name: "unRepeatedPath",
  data() {
    return {
      start1: "",
      result1: "请选择起点"
    }
  }
}
</script>

<style scoped>
#block-left {
  float: left;
  margin-left: 5%;
  width: 30%;
  margin-right: 10%;
}
</style>