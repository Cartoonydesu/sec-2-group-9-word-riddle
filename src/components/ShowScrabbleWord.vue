<script setup>
    import { ref, computed } from 'vue'
    defineEmits(['reset'])

    const props = defineProps({
        words:{
            type: Object,
            require: true
        },
        arrayOfWord:{
            type: Array,
            require: true
        },
        swapArrayOfWord:{
            type: Array,
            require: true
        }

    })


    // PART game --------------------
    const inputWord = ref('')
    const matchWord = computed(() => {
        return props.words.word === inputWord.value
    })
 
    //PART countdown

    const timeLeft = ref(60);
    const timeOut =ref(false)
    const showHint = ref(false)

    function countDown(){  
        if(timeLeft.value==20) showHint.value = true
        if(timeLeft.value<= 0) timeOut.value = true
        else if(!matchWord.value) timeLeft.value --

    }

    setInterval(countDown,1000)

    //PART hint
    const showHintBox = ref(false)

</script>
 
<template>



    <div>
        <h3>Scrabble the word : </h3>
        <h2>
            <span v-for="letter in swapArrayOfWord">
                {{ letter }}
            </span>
        </h2>
    </div>

    <div>
        <span v-show="!timeOut">Time left : {{ timeLeft }} seconds</span>
        <h4 v-show="timeOut">Time out ! Game over ! This answer is {{ props.words.word }}</h4>
        <h4 v-show="matchWord">Correct !!</h4>
    </div>
    
    <br>

    <div>
        <input type="text" placeholder="Guess the word!" v-model="inputWord" :disabled="matchWord"/>
    </div>

    <div>
        <button v-show="showHint" @click="showHintBox = true">Hint</button>
        <span v-show="showHintBox">{{ words.hint }}</span>
        <button @click="($emit('reset'))">Reset</button>
    </div>

</template>
 
<style>

</style>