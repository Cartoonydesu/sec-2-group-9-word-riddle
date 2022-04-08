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
    <button @click="($emit('reset'))" 
                class="buttonRight"
                style="font-size: 16px;">Reset</button>

    <div>
        <h3>Scrabble the word : </h3>
        <h2>
            <span v-for="letter in swapArrayOfWord" style="background-color: white;">
               &nbsp; {{ letter }} &nbsp;
            </span>
        </h2>
    </div>

    <div>
        <span v-show="!timeOut" style="font-size: 20px;">
            Time left : {{ timeLeft }} seconds</span>
        <b v-show="timeOut">
            <span style="color: red; font-size: 2em;"> Time out ! Game over ! </span>  
            <br>This answer is {{ props.words.word }}
        </b> 
        <br>
        <b v-show="matchWord" style="color: green; font-size: 2em;">
            Correct !!</b>
    </div>

    <div>
        <input type="text" placeholder="Guess the word!" v-model="inputWord" :disabled="matchWord"/>
    </div>

    <div>
        <button v-show="showHint" @click="showHintBox = true">Hint</button>
        <span v-show="showHintBox">{{ words.hint }}</span>
        
    </div>

</template>
 
<style scoped>
.buttonRight{
        margin: 2em;
        position: fixed;
        top: 17%;
        right: 10%;
    }
</style>