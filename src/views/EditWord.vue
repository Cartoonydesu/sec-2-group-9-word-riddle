<script setup>
import {ref, onBeforeMount} from 'vue'
import {useRoute, useRouter} from 'vue-router'
const {params} = useRoute()

const thisWord = ref({})
const getThisWord= async () => {
    const res = await fetch(`http://localhost:5000/words/${params.id}`)
    thisWord.value = await res.json()
    console.log(thisWord.value)
}
onBeforeMount( async () => { 
  await getThisWord()
})
</script>
 
<template>
<div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header"><h3>{{thisWord.word}}</h3></div>
        <div class="modal-body"><p>hint : {{thisWord.hint}}</p></div>
        <div class="modal-button">
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
 
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.modal-header h3 {
  margin-top: 0;
  color: red;
}
.modal-body {
  margin: 20px 0;
}
.modal-button {
  display: flex;
  justify-content: end;
}
</style>