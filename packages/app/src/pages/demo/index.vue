<template>
  <div>
    <div>{{ $t('确认') }}</div>
    <el-button @click="onCommand('en')">
      en
    </el-button>
    <el-button @click="onCommand('ja')">
      ja
    </el-button>
    <el-button @click="onCommand('zh')">
      zh
    </el-button>
    <el-button @click="onCommand('de')">
      de
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { setLanguage } from 'llqm-framework-sdk';
const onCommand = async (command) => {
  setLanguage(command);
  window.location.reload();
};
</script>

<style scoped>

</style>

<route>
  {
    "name": "app-demo",
    "meta": {
      "title": "demo1"
    }
  }
</route>