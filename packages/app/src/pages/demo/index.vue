<template>
  <div
    id='app'
    :a='1'
    class='a'
    :s='2'>
    dome
  </div>
</template>

<script setup lang="ts">
const a = 1;
</script>

<style scoped lang="scss">
.a {
  font-size: 0;
  color: red;
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
