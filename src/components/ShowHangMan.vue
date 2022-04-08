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

    const showHint = computed(() => props.lives <= 5)
    const showHintBox = ref(false)

</script>

<template>
    <button @click="$emit('reset')"
            class="buttonRight"
            style="font-size: 16px;">
        Reset
    </button> 
    <!-- แถบ You have Lives -->
    <div>
        <b v-if="checkCorrect"
            style="color: green; font-size: 2em;">
            !! You Win !!
        </b>
        <b v-else-if="lives !== 0"
            style="font-size: 20px;">
            You have {{ lives }} lives
        </b>
        <b v-else>
        <span style="color: red; font-size: 2em;">!! Game Over !!</span>
        <br>
        <span style="font-size: 20px;">The answer is "{{ words.word }}"</span>
        <br>
      </b>

    </div>
    
    <!-- Part แสดงคำศัพท์ -->
    <div>
        <span v-for="(letter,index) in arrayOfWord" :key="index">
            <span v-if="chosenChar.includes(letter)"
                  style="font-size: 20px;">
                  {{ letter }}
            </span>
            <span v-else
                style="font-size: 20px;"> _ 
            </span> 
        </span>
    </div>
    
    <img :src="images[lives]" width="250" alt="I'm hangman"/>

    <!-- ปุ่ม hint + play -->
    <div>
        <button v-show="showHint"
                @click="showHintBox = true"
                style="font-size: 16px;">Hint</button>
        <br>
        <span v-show="showHintBox">{{ words.hint }}</span>
    </div>
    <br>
    <!-- Part แป้นพิมพ์ -->
    <div>
        <button v-for="i in 26"
            @click="$emit('clickLetter',i-1)"
            :disabled="letters[i-1][1] || checkCorrect || lives === 0"
            style="font-size: 20px;"
        >{{ letters[i-1][0] }}</button>

    </div>
    
</template>

<style scoped>
    body {
        font-size: 2em;
    }
    .buttonRight{
        margin: 2em;
        position: fixed;
        top: 17%;
        right: 10%;
    }
    
</style>
