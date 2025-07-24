<template>
  <div id="app" :a="1" class="a" :s="2">dome</div>
</template>

<script setup lang="ts">
const a = 1;
</script>

<style scoped lang="scss">
.a {
  color: red;
  font-size: 20px;
  background-attachment: fixed;
}
</style>

<route>
  {
    "name": "app-demo",
    "meta": {
      "title": "demo1"
    }
  }
</route>
