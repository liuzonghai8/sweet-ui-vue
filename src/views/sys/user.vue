<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },
  methods () {

  }
  ,
}
</script>

<style lang="scss" scoped>
</style>

