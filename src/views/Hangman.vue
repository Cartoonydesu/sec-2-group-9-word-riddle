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
    
</style>