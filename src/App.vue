<script setup>
  const title = 'Vue.js Course'
  let price = 9.99
  function increment(){
    console.log('click')
  }
</script>
<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: {{ price -  1 }}</h2>
  <button @click="increment">ボタン</button>
</template>

