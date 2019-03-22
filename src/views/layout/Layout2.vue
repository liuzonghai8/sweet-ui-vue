
<template>
  <el-container>
    <Sidebar class="sidebar-container"/>
    <el-container class="main-container">
      <el-header>
        <Navbar/>
      </el-header>
      <el-main>
        <AppMain/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
export default {
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>
 
<style>
</style>
