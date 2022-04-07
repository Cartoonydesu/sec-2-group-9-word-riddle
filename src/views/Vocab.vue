<script setup>
import ShowListVocabVue from '../components/ShowListVocab.vue';
import { useWords } from '../stores/listAllWords.js'
import { ref } from 'vue'
const store = useWords()
const listAllWord = ref()

//CREATE
const createWord = ref({})
const addNewWord = async (newWord)=>{
  const res = await fetch(' http://localhost:5000/words',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify({word: newWord.word,hint: newWord.hint})
  })
  if(res.status===201){
    const addedWord = await res.json() 
    store.listWords.push(addedWord)         
    console.log('created successfully')
  }else {
    console.log('error, cannot create')
  }
  createWord.value = {}
} 

//DELETE
const removeWord = async (wordId)=>{
  const res = await fetch(`http://localhost:5000/words/${wordId}`, 
    {method:'DELETE'}
  )
  if(res.status===200){
    store.getWords()
    console.log('deleted successfully')
  }else {
    console.log('error, cannot delete')
  }
}
</script>
 
<template>
<ShowListVocabVue 
    :listWords="store.listWords"
    :newWord="createWord"
    @create="addNewWord"
    @delete="removeWord"
/>
</template>
 
<style>

</style>