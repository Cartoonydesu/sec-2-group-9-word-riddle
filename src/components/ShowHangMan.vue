<script setup>
    import {ref, computed} from 'vue'
    const props = defineProps({
        words:{
            type: Object,
            require: true
        },
        arrayOfWord:{
            type: Array,
            require: true
        }
    })
    console.log(props.words)
    console.log(props.arrayOfWord)

    // Part lives------------------
    const lives = ref(10)

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

    // Part Game-------------------
    const chosenChar = ref([])
    const checkCorrect = computed(() => {
        return props.arrayOfWord.every(letter => chosenChar.value.includes(letter))
    })
    const showHint = computed(() => lives.value <= 5)
    const showHintBox = ref(false)


    
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
    console.log(letters.value[1][0])
    const disable = (index) => {
        letters.value[index][1] = true
    }
    const clickLetter = (letter) => {
        if(lives.value !== 0){
            chosenChar.value.push(letter)
            console.log(chosenChar.value)
            if(!props.arrayOfWord.includes(letter)){
                lives.value--
            }
        }
    }

    // Part replay
    const reset = () => {
        location.reload()
        // let i =0
        // while (i<=25) {
        //     letters.value[i][1] = false
        //     i++
        // }
        
    }
</script>

<template>

    <h3>ShowHangMan</h3>
    
    <hr>
    
    <span>Show current data: {{ words }},</span>
    {{ arrayOfWord }}

    <br>

    <!-- แถบ You have Lives -->
    <div>
      <h3 v-if="checkCorrect">You Win!!!</h3>
      <p v-else-if="lives!==0">You have {{ lives }} lives</p>
      <h3 v-else>Game Over!! <br> The answer is {{ props.words.word }}</h3>
    </div>

    <!-- Part แสดงคำศัพท์ -->
    <div>
        <span v-for="(letter,index) in arrayOfWord" :key="index">
            <span v-if="chosenChar.includes(letter)"> {{ letter }} </span>
            <span v-else> _ </span> 
        </span>
    </div>

    <br>

    <img :src="images[lives]" width="250" alt="I'm hangman"/>

    <!-- Part แป้นพิมพ์ -->
    <div>
        <!-- <button v-for="i in 26"
            @click="disable(i-1), $emit('clickLetter',letters[i-1][0])"
            :disabled="letters[i-1][1]"
        >{{ letters[i-1][0] }}</button> -->
        <button v-for="i in 26"
            @click="disable(i-1), clickLetter(letters[i-1][0])"
            :disabled="letters[i-1][1] || checkCorrect || lives === 0"
        >{{ letters[i-1][0] }}</button>

    </div>

    <br>

    <!-- ปุ่ม hint + play -->
    <div>
        <button v-show="showHint" @click="showHintBox = true">Hint</button>
        <span v-show="showHintBox">{{ words.hint}}</span>
        <button @click="reset">Reset</button>
    </div>

</template>


<style>


</style>
