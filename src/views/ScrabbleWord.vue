<script setup>
    import { useWords } from '../stores/listAllWords.js'
    import ShowScrabbleWord from '../components/ShowScrabbleWord.vue'
    const store = useWords()
//     const randomWord = () => {
//     return store[Math.floor(Math.random() * store.length)]
//     }

//     //function ในการอ่ะ รีๆๆๆๆๆๆๆๆ
//     const playAgain = () => { location.reload() }
</script>
 
<template>
    <h2>Scabble Word</h2>
    <!-- <Scabble :words="store"/> -->
</template>
 
<style>

</style>