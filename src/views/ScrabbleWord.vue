<script setup>
    import { useWords } from '../stores/listAllWords.js'
    import { ref, onMounted, } from 'vue'
    import ShowScrabbleWord from '../components/ShowScrabbleWord.vue'
 
    const store = useWords()
    const randomWord = ref({})
    const arrayOfWord = ref([])
    const swapArrayOfWord = ref([])
    onMounted(async () => {
        await store.getWords()
        randomWord.value = store.listWords[Math.floor(Math.random() * store.listWords.length)]
        arrayOfWord.value = randomWord.value.word.split('')
        swapArrayOfWord.value = randomWord.value.word.split('')
        console.log(swapArrayOfWord.value)
        swapArrayElements(swapArrayOfWord.value)
        console.log(swapArrayOfWord.value)
    })



    const swapArrayElements = (array) => {
        let arrayLength = array.length
        let x, y
        let i = 0
        while(i < arrayLength){
            x = Math.floor(Math.random()*arrayLength)
            y = Math.floor(Math.random()*arrayLength)
            // console.log(x+' '+y)
            array.splice(y, 1, array.splice(x, 1, array[y])[0]);
            // console.log(array)
            i++
        }
    }
            
    const reset = () => {location.reload()}

</script>
 
<template>
    <h2>Scabble Word</h2>

    <ShowScrabbleWord 
        :words="randomWord"
        :arrayOfWord="arrayOfWord"
        :swapArrayOfWord="swapArrayOfWord"
        @reset="reset"/>

</template>
 
<style>

</style>