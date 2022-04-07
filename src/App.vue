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
    <h1>~~ Word Riddle ~~</h1>
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
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
    h1 {
        font-family: 'Press Start 2P', cursive;
        color: #6667ad;
    }
    h2 {
        font-family: 'Black Ops One', cursive;
        color: black;
    }
    body {
        padding: 2em;
        margin: 2em;
        background-color: #ffe9ce;
        text-align: center;
        line-height: 30px;
    }
    button {
        background-color: #f8c1cc;
        border-radius: 10px;
        padding: 10px;
        margin: 4px;
        border: 3px #000;
    }
    button:hover:not([disabled]) {
        background-color: #6667ad;
        color: white;
        transition-duration: .5s;
    }
    button:active:not([disabled]){
        background-color: #ffcf73;
        color: black;
        transition-duration: 2s;
    }
    router-rink {
        color: #6667ad;
    }

/* #f7 */
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

/* @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    body {
        font-family: 'Press Start 2P', cursive;
        padding: 2em;
        margin: 2em;
        background-color: lightpink;
        text-align: center;
        line-height: 30px;
    }
    button {
        font-family: 'Press Start 2P', cursive;
        border-radius: 10px;
        padding: 10px;
        margin: 4px;
        border: 3px #000;
    }
    button:hover:not([disabled]) {
        background-color: lightcoral;
    color: white;
        transition-duration: .5s;
    }
    button:active:not([disabled]){
        background-color: white;
        transition-duration:2s;
    }
    .hint {
        padding: 30px;
    }
    .playAgain {
        margin: 2em;
        position: fixed;
        top: 0;
        right: 0;
        padding: 30px;
    }
    .letter-button{
        padding: 16px;
        height: 60px;
        width: 60px;
        font-size: 20px;
    }
    .action-button {
    padding: 16px;
    margin : 6px;
    text-align: left;
    height: 60px;
    gap: 5px;
    }
    .block {
        padding: 12px;
        margin : 8px;
        width: 52px;
        height: 52px;
        border: 3px solid;
        border-radius: 15px;
        border: lightcoral solid thick;
        color: black;
        text-align: center;
        font-size: 24px;
    } */
</style>
