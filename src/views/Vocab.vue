<script setup>
  import ShowListVocabVue from '../components/ShowListVocab.vue';
  import { useWords } from '../stores/listAllWords.js'
  import { ref,computed,onMounted } from 'vue'
  
  const store = useWords()
  const listAllWords = ref()
  onMounted(async () => {
    await store.getWords()
    listAllWords.value = store.listWords
  })


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
      listAllWords.value.push(addedWord)         
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
        listAllWords.value = listAllWords.value.filter((word) => word.id !== wordId)
        console.log('deleted successfully')
      }else {
        console.log('error, cannot delete')
      }
    }
  }

//EDITING MODE
const editingWord = ref({})
const modalShow = ref(false)
const edit = (word)=>{
  keywords.value = ""
  showHideModal()
  editingWord.value = {...word}
}
 const showHideModal = () => modalShow.value ===true ? modalShow.value = false : modalShow.value = true


  //UPDATE
  const saveWord = async (editingWord)=>{
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
      listAllWords.value = listAllWords.value.map((word)=>
      word.id === editingWord.id ? {...word, word: editingWord.word, hint: editingWord.hint} : word
    )
      console.log('edited successfully')
    }else {
      console.log('error, cannot update')
    }
    showHideModal()
  }

  //SEARCHING
  const keywords = ref("")
  const setWordSearch = ref([])
  const searching = async (keyword,searchingMode) => { 
    if(searchingMode===true){
      const res = await fetch(`http://localhost:5000/words?q=${keyword}`)
      if (res.status === 200) {
          setWordSearch.value = await res.json()
          keywords.value = keyword
      } else console.log('error, cannot searching')
    }else{
      setWordSearch.value = []
      console.log("Couldn't find this search.")
    }
  }


</script>
 
<template>
  <ShowListVocabVue 
      :listWords="listAllWords"
      :newWord="createWord"
      :editingWord="editingWord"
      :modalShow="modalShow"
      :keywords="keywords"
      :setWordSearch="setWordSearch"
 
      @create="addNewWord"
      @delete="removeWord"
      @edit="edit"
      @showHideModal="showHideModal"
      @update="saveWord"
      @searching="searching"
      
  />
</template>
 
<style>

</style>