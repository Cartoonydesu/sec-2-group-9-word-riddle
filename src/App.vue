<script setup>
import { useWords } from './stores/listAllWords.js'
import { onMounted } from 'vue'
const store = useWords()
onMounted(async () => {
    await store.getWords()
    console.log(store.listWords)
})
</script>

<template>
<div>
    <h1>INT203 - test final project</h1>
    <div>
        <router-link :to="{name:'Home'}">Home</router-link> | 
        <router-link :to="{name:'Vocab'}">Vocab</router-link> | 
        <router-link :to="{name:'AboutUs'}">About Us</router-link>
    </div>
    <div>
        <router-view></router-view>
    </div>
</div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
