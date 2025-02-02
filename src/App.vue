<script setup>
  import { ref } from 'vue' // ref関数をインポート
  const title = 'Vue.js Course'
  let price = ref(9.99) // リアクテビティにしたい変数にref関数を使う
  // ref関数で9.99をリアクティブにすることができる
  // priceはオブジェクトになるので、9.99を取り出すには以下のように記述する
  console.log(price.value);
  function increment(){
    price.value += 1
    // console.log(price);
  }
  const info  = ref({
    students: 1000,
    rating: 4
  })
  console.log(info.value.rating)
</script>
<template>
  <h1>Title: {{ title }}</h1>
  <!-- priceがrefオブジェクトであるかどうか、自動で判定し、price.valueとしてくれるのでこのままで良い -->
  <h2>Price: {{ price -  1 }}</h2>
  <button @click="increment">ボタン</button>
  <h2>Students rating: {{ info.rating }}</h2>
</template>

