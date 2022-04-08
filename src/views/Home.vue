<script setup>

</script>
 
<template>
    <h2>Mini Games</h2>
    <div class="grid-container">
        <div class="grid-item">
            <router-link :to="{name:'Hangman'}">
                <img src="../assets/logo-hangman.png" width="250">
            </router-link>
        </div>
        <div class="grid-item">
            <router-link :to="{name:'ScrabbleWord'}">
            <img src="../assets/logo-scrabbleword.png" width="250" >
        </router-link>
        </div>
    </div> 
</template>
 
<style scoped>
 .grid-container {
  margin: auto 30%;
  display: grid;
  grid-template-columns: auto auto;
  /* background-color: #2196F3; */
  padding: 5px;
  column-gap: 20px;
  row-gap: 20px;
}
.grid-item {
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* padding: 20px; */
  text-align: center;
}
img:hover{
  opacity: 0.3;
}

</style>