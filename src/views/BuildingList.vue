<!--实现获取所有建筑-->
<template>
<div>
<el-table
        :data="userList"
        border
        height="250" width="400">
      <!--      关于prop：vue会自动寻找列表中每个对象的id属性-->
      <el-table-column
          fixed
          prop="id"
          label="id"
          width="50">
      </el-table-column>
      <el-table-column
          prop="name"
          label="建筑名"
          width="70">
      </el-table-column>
      <el-table-column
          prop="信息"
          label="描述">
      </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
  name: "BuildingList",
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>