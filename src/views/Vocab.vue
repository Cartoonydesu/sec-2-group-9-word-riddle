<script setup>
  import ShowListVocabVue from '../components/ShowListVocab.vue';
  import { useWords } from '../stores/listAllWords.js'
  import { ref } from 'vue'
  
  const store = useWords()

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
    if (confirm("Are you sure you want to delete this word?") == true) {
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
  }


  //UPDATE
  const saveWord = async (editingWord,showHideModal)=>{
    const res = await fetch(`http://localhost:5000/words/${editingWord.id}`, 
      {
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify({
          word: editingWord.word,
          hint: editingWord.hint
        })
      })
    if(res.status===200){
      store.getWords()
      console.log('edited successfully')
    }else {
      console.log('error, cannot update')
    }
    showHideModal()
  }

//SEARCHING
// const keywords = ref("")
// const setWordSearch = ref([])
// const searching = async (keyword) => {    
//   if(keyword.length !== 0){
//     const res = await fetch(`http://localhost:5000/words?q=${keyword}`)
//     if (res.status === 200) {
//         setWordSearch.value = await res.json()
//         keywords.value=keyword
//         console.log(setWordSearch.value)
//     } else console.log('error, cannot searching')
//   }else{
//     setWordSearch.value = []
//   }
// }

</script>
 
<template>
  <ShowListVocabVue 
      :listWords="store.listWords"
      :newWord="createWord"
    
      @create="addNewWord"
      @delete="removeWord"
      @update="saveWord"
  />
  <!-- <ShowListVocabVue 
      :listWords="store.listWords"
      :newWord="createWord"
      :keywords="keywords"
      :setWordSearch="setWordSearch"
    
      @create="addNewWord"
      @delete="removeWord"
      @update="saveWord"
      @searching="searching"
  /> -->
</template>
 
<style>

</style>