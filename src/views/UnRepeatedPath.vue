<!--获取从A点到B点的所有路径-->
<template>
  <div>
    说明:选择一个起点,系统将自动分配一条不重复游览校园景点且能回到起点的路径
    <el-divider></el-divider>
    <div id="block-left">
      <el-input id="navInput" v-model="startIndex" placeholder="请输入起点" size="small"></el-input>
    </div>
    <el-button type="primary" size="small" style="float: right" @click="getUnRepeatedPath">获取推荐路径</el-button>
    <div style="clear: both"></div>
    <el-divider></el-divider>
    <div>{{result}}</div>
  </div>
</template>

<script>
export default {
  name: "unRepeatedPath",
  data() {
    return {
      startIndex: "",
      result: "请选择起点"
    }
  },
  methods:{
    getUnRepeatedPath() {
      if (this.startIndex === "") {
        alert("请输入起点");
        return;
      }
      let url = "guide/unRepeatedPath/" + this.startIndex
      this.axios.get(url)
          .then((response) => {
                if (response.data === null) {
                  this.$message({
                    message: "无路径信息,请检查输入!",
                    type: "warning",
                  })
                } else {
                  //回调函数里面识别不了全局变量
                  this.result = response.data;
                }
              }
          ).catch(function (error) {
        alert("异常！\n" + error);
        console.log(error);
      });
    },
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