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
        randomWord.value = store.listWords[Math.floor(Math.random() * store.listWords.length)]
        arrayOfWord.value = randomWord.value.word.split('')
    })

    // Part lives------------------
    const lives = ref(10)
    const checkCorrect = computed(() => {
        return arrayOfWord.value.every(letter => chosenChar.value.includes(letter))
    })

    // Part picture----------------
    const images = [
        '/hangmans/hangman-0.png',
        '/hangmans/hangman-1.png',
        '/hangmans/hangman-2.png',
        '/hangmans/hangman-3.png',
        '/hangmans/hangman-4.png',
        '/hangmans/hangman-5.png',
        '/hangmans/hangman-6.png',
        '/hangmans/hangman-7.png',
        '/hangmans/hangman-8.png',
        '/hangmans/hangman-9.png',
        '/hangmans/hangman-10.png',
    ]

    // Part Keyboard --------------------
    const letters = ref([
        ['a',false],
        ['b',false],
        ['c',false],
        ['d',false],
        ['e',false],
        ['f',false],
        ['g',false],
        ['h',false],
        ['i',false],
        ['j',false],
        ['k',false],
        ['l',false],
        ['m',false],
        ['n',false],
        ['o',false],
        ['p',false],
        ['q',false],
        ['r',false],
        ['s',false],
        ['t',false],
        ['u',false],
        ['v',false],
        ['w',false],
        ['x',false],
        ['y',false],
        ['z',false]
    ])

    const chosenChar = ref([])
    const clickLetter = (index) => {
        letters.value[index][1] = true
        if(lives.value !== 0){
            chosenChar.value.push(letters.value[index][0])
            console.log(chosenChar.value)
            if(!arrayOfWord.value.includes(letters.value[index][0])){
                lives.value--
            }
        }
    }

    // Part replay
    const reset = () => {
        location.reload()
    }
</script>
 
<template>
    <h2>Hangman Game</h2>
    <!-- {{randomWord}} -->
    <!-- {{arrayOfword}} -->
    <ShowHangman 
        :words="randomWord"
        :arrayOfWord="arrayOfWord"
        :chosenChar="chosenChar"
        :images="images"
        :letters="letters"
        :lives="lives"
        :checkCorrect="checkCorrect"
        @reset="reset"
        @clickLetter="clickLetter"
    />
</template>
 
<style>
    button {
        margin: 4px;
    }
</style>