import { defineStore,acceptHMRUpdate } from 'pinia';
import { ref, computed } from 'vue'
export const useWords = defineStore('listAllWords', () => {
  const listWords = ref([])
  const getWords = async () => {
    const res = await fetch('http://localhost:5000/words')
    listWords.value = await res.json()
  }
  return { listWords, getWords }
})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useWords, import.meta.hot))
}