<script setup>
    import {ref, computed} from 'vue'
    defineEmits(['clickLetter', 'reset'])
    const props = defineProps({
        words:{
            type: Object,
            require: true
        },
        arrayOfWord:{
            type: Array,
            require: true
        },
        images:{
            type: Array,
            require: true
        },
        letters:{
            type: Array,
            require: true
        },
        lives:{
            type: Number,
            default: 10
        },
        chosenChar:{
            tyoe: Array,
            default: []
        },
        checkCorrect:{
            type: Boolean,
            default: false
        }
    })
    console.log(props.words)
    console.log(props.arrayOfWord)

    const showHint = computed(() => props.lives <= 5)
    const showHintBox = ref(false)


   
    console.log(props.letters[1][0])

    const clickLetter = (letter) => {
        if(lives.value !== 0){
            chosenChar.value.push(letter)
            console.log(chosenChar.value)
            if(!props.arrayOfWord.includes(letter)){
                props.lives--
            }
        }
    }

</script>

<template>

    <!-- <h3>ShowHangMan</h3> -->
    <!-- <hr> -->
    <!-- <span>Show current data: {{ words }},</span> -->
    <!-- {{ arrayOfWord }} -->

    <br>

    <!-- แถบ You have Lives -->
    <div>
      <h3 v-if="checkCorrect">You Win!!!</h3>
      <p v-else-if="lives!==0">You have {{ lives }} lives</p>
      <h3 v-else>Game Over!! <br> The answer is {{ words.word }}</h3>
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
        <button v-for="i in 26"
            @click="$emit('clickLetter',i-1)"
            :disabled="letters[i-1][1] || checkCorrect || lives === 0"
        >{{ letters[i-1][0] }}</button>
    </div>

    <br>

    <!-- ปุ่ม hint + play -->
    <div>
        <button v-show="showHint" @click="showHintBox = true">Hint</button>
        <span v-show="showHintBox">{{ words.hint}}</span>
        <button @click="$emit('reset')">Reset</button>
    </div>

</template>


<style>


</style>
