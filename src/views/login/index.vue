<template>
  <div>login
    <el-button @click="login">ddd</el-button>
  </div>
</template>
<script>
export default {
  name: 'login',
  methods: {
    login () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

