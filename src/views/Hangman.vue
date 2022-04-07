<script setup>
    import { ref,onMounted } from 'vue';
    import { useWords } from '../stores/listAllWords.js'
    import ShowHangman from '../components/ShowHangMan.vue'
    import { computed } from '@vue/reactivity';
    const store = useWords()
    const randomWord = ref({})
    const arrayOfWord = ref([])
    onMounted(async () => {
        await store.getWords()
        console.log(store.listWords)
        randomWord.value = store.listWords[Math.floor(Math.random() * store.listWords.length)]
        arrayOfWord.value = randomWord.value.word.split('')
        console.log(arrayOfWord.value)
    })
</script>
 
<template>
    <h2>Hangman Game (Views)</h2>
    <!-- {{randomWord}} -->
    <!-- {{arrayOfword}} -->
    <ShowHangman 
        :words="randomWord"
        :arrayOfWord="arrayOfWord"
        :chosenChar="chosenChar"
        @reset="reset"
        @clickLetter="clickLetter"
    />
</template>
 
<style>
    
</style>