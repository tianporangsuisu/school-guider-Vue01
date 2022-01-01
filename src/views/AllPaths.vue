<!--从起点到终点所有的路径-->
<template>
  <div>
    <div id="block-left">
      <el-input id="navInput" v-model="start1" placeholder="请输入起点" size="small"></el-input>
      <el-input id="navInput" v-model="end1" placeholder="请输入终点" size="small"></el-input>
    </div>
    <div id="block-right">
      <el-radio v-model="selected" label="1" size="small" >选中起点</el-radio>
      <br>
      <br>
      <el-radio v-model="selected" label="2" size="small">选中终点</el-radio>

    </div>
    <div style="clear: both"></div>
    <el-button type="primary" size="small">查询最短路径</el-button>
    <el-button type="primary" size="small">查询所有路径</el-button>
    <el-divider></el-divider>
    <div>
      {{ results }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AllPaths",
  data() {
    return {
      //变量名后面加个1是怕跟系统变量重了
      start1: "",
      end1: "",
      selected: "1",//用这个来判断被选中的是哪个点
      results: "暂未获取结果",
    }
  }
}
</script>

<style scoped>
#block-left {
  float: left;
  margin-left: 10%;
  width: 40%;
  margin-right: 10%;
}

#block-right {
  float: left;
  margin-left: 5%;
  margin-right: 10%;
  width: 10%;
}
</style>