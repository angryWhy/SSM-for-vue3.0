<template>
  <div>
     <el-container>
      <el-header>顶部菜单栏</el-header>
      <el-container>
        <el-aside width="200px">菜单栏</el-aside>
        <el-main> <router-view /></el-main>
      </el-container>
    </el-container> 
  
  </div>
</template>
<script>
import "@/assets/normalize.css"
export default {
  setup() {

  },
}
</script>
<style lang="less">

</style>
