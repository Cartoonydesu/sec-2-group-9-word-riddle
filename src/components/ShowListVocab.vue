<script setup>
import {ref} from 'vue'
defineEmits(['create','delete'])
defineProps({
    listWords:{
      type: Object,
      require: true
    },
    newWord:{
      type: Object,
      require: true
    }
  })

</script>
 
<template>
    <h1>Vocabulary</h1>
    <div>
        <b>Add new Word</b><br>
        <label for="word"> word:</label>
        <input type="text" id="word" name="word" v-model="newWord.word">  | 
        <label for="hint">hint:</label>
        <input type="text" id="hint" name="hint" v-model="newWord.hint">  |
        <button @click="$emit('create',newWord)">Create</button>
    </div>
    <!-- <br>
    <div>
        <b>Searching</b><br>
        <input type="text" id="hint" name="hint">  |
        <button>Search</button>
    </div> -->
   <br><hr>
    <table border="1">
        <tr>
            <th>Word</th><th>Hint</th>
        </tr>
        <tr v-for="(word,index) in listWords" :key="index">
            <td>{{word.word}}</td>
            <td>{{word.hint}}</td>
            <button @click="$emit('delete',word.id)">Delete</button>
        </tr>
    </table>
</template>
 
<style>

</style>