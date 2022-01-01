<!--从起点到终点所有的路径-->
<template>
  <div>
    <div id="block-left">
      <el-input id="navInput" v-model="startIndex" placeholder="请输入起点" size="small"></el-input>
      <el-input id="navInput" v-model="endIndex" placeholder="请输入终点" size="small"></el-input>
    </div>
    <div id="block-right">
      <el-radio v-model="selected" label="1" size="small">选中起点</el-radio>
      <br>
      <br>
      <el-radio v-model="selected" label="2" size="small">选中终点</el-radio>

    </div>
    <div style="clear: both"></div>
    <el-button type="primary" size="small" @click="getShortestPaths">查询最短路径</el-button>
    <el-button type="primary" size="small" @click="getAllPaths">查询所有路径</el-button>
    <el-divider></el-divider>

    <p v-for="path in results" v-bind:key="path">{{path}}</p>
  </div>
</template>

<script>
export default {
  name: "AllPaths",
  data() {
    return {
      startIndex: "",
      endIndex: "",
      selected: "1",//用这个来判断被选中的是哪个点
      results: ["暂未获取结果"],
    }
  },
  methods: {
    //检查用户输入
    checkInput(){
      if (this.startIndex === "") {
        alert("请输入起点");
        return false;
      }
      if (this.endIndex === "") {
        alert("请输入终点!");
        return false;
      }
      return true;
    },
    getShortestPaths() {
      if (!this.checkInput()){
        return;
      }
      let url = "guide/shortestDist/" + this.startIndex + "/" + this.endIndex;
      this.axios.get(url)
          .then((response) => {
                if (response.data === null) {
                  this.$message({
                    message: "无路径信息,请检查输入!",
                    type: "warning",
                  })
                } else {
                  //回调函数里面识别不了全局变量
                  this.results = []
                  this.results.push(response.data);
                }
              }
          ).catch(function (error) {
        alert("异常！\n" + error);
        console.log(error);
      });
    },
    getAllPaths() {
      if (!this.checkInput()){
        return;
      }
      let url = "guide/getAllPaths/" + this.startIndex + "/" + this.endIndex;
      this.axios.get(url)
          .then((response) => {
                if (response.data === null) {
                  this.$message({
                    message: "无路径信息,请检查输入!",
                    type: "warning",
                  })
                } else {
                  //回调函数里面识别不了全局变量
                  this.results = response.data
                }
              }
          ).catch(function (error) {
        alert("异常！\n" + error);
        console.log(error);
      });
    },
  },
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