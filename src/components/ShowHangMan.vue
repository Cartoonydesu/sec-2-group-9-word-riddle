<script setup>
    import {ref, computed} from 'vue'
    defineEmits(['reset'])
    const props = defineProps({
        words:{
            type: Object,
            require: true
        },
        arrayOfword:{
            type: Array,
            require:true
        }
    })
    // const displayArray = ref(props.arrayOfword) 
    // console.log(props.arrayOfword)

    // ดึง hint ออกมาจากคำที่สุ่ม  // console.log([props.arrayOfWord])
    
    // //ดึง word ออกมาจากคำที่สุ่ม และแยกเป็น array ช่องละตัวอักษร
  
    // const arrayOfWord = computed(() => {return props.word.split('')})
    // const arrayOfWord = usedWord.word.split('')
    
    //--------- PART - Letter -------------
    //ตัวอักษรทั้งหมด เก็บเป็น array
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    //ชีวิต เริ่มที่ 10 
    // const lives = ref(10)
    // //function ที่กดแล้ว ปุ่มจะdisable + เช็ค hangman
    // //ตัวอักษรที่เลือกกแล้ว เก็บเป็น array
    // const chosenChar = ref([])
    // //function ที่ทำงานเมื่อคลิ๊ก
    // const clickLetter = (letter) => {
    //     if(lives.value !== 0){
    //         chosenChar.value.push(letter)
    //         let thisLetter = document.getElementById(letter)
    //         thisLetter.disabled  = true
    //         // เช็ค hangman
    //         if(!arrayOfWord.value.includes(letter)){
    //             lives.value--
    //         }
    //     }
    // }
    // //funtion ที่เช็คว่า win รึยัง
    // //check ว่าตัวอักษรที่เลือกมา มีอยู่ในคำที่สุ่มครบรึยัง
    // const checkCorrect = computed(() => {
    //     return arrayOfWord.value.every(letter => chosenChar.value.includes(letter))
    // })
</script>
    
<template>
    <div>
        <h1>ShowHangman (Component)</h1>
        {{arrayOfword}}
        <!-- {{ usedWord.word }}  /  {{ usedWord.hint}} -->

        <p>Random word: {{words.word }} / {{ words.hint }}  </p>

        <!-- แถบ You have Lives -->
        <!-- <div>
        <p v-if="lives!==0">You have {{ lives }} lives</p>
        <h3 v-else>Game Over!! <br> The answer is {{ randomWords.word }}</h3>
        <h3 v-show="checkCorrect">You Win!!!</h3>
        </div> -->

        <br>

        <!-- แถบคำที่ random มา -->

        <br>

        <!-- แป้นพิมตัวอักษรทั้งหมด -->
        <!-- <div class="col-4">
            <button v-for="(letter, index) in letters" :key="index" 
                    @click="clickLetter(letter)"
                    :id="letter"
                    class="letter-button"
                    :disabled="checkCorrect">{{ letter }}</button>
        </div> -->

        <!-- แถบปุ่ม hint + play -->
        <!-- <div class="action-button"> -->
            <!-- <button @click="showHint" v-show="lives <= 5" :disabled="hintStatus">Hint</button>
            <span v-show="hintStatus" class="hint">{{ hint }}</span> -->

            <!-- <span class="playAgain">
            <button @click="$emit('reset')" >Play Again</button>
            </span>
        </div> -->
    </div>
</template>
 
<style>

</style>