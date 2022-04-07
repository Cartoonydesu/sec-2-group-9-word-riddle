<script setup>
import { ref,onMounted } from 'vue';
import { useWords } from '../stores/listAllWords.js'
import ShowHangman from '../components/ShowHangMan.vue'
import { computed } from '@vue/reactivity';
const store = useWords()
const randomWord = ref({})
const arrayOfword = ref([])
onMounted(async () => {
    await store.getWords()
    console.log(store.listWords)
    randomWord.value = store.listWords[Math.floor(Math.random() * store.listWords.length)]
    arrayOfword.value = randomWord.value.word.split('')
})

// onMounted(randomWord())
// //function ในการอ่ะ รีๆๆๆๆๆๆๆๆ
const playAgain = () => { location.reload() }
</script>
 
<template>
    <h2>Hangman Game (Views)</h2>
    {{randomWord}}
    {{arrayOfword}}
    <!-- <ShowHangman /> -->
    <ShowHangman 
        :words="randomWord"
        :arrayOfword="arrayOfword"
    />
</template>
 
<style>
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