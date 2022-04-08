<script setup>

</script>
 
<template>
    <h2>Mini Games</h2>
    <div class="grid-container" >
        <div class="grid-item" style="margin-right: 0;">
            <router-link :to="{name:'Hangman'}">
                <img src="../assets/logo-hangman.png" width="250">
            </router-link>
        </div>
        <div class="grid-item" style="margin-left: 0;">
            <router-link :to="{name:'ScrabbleWord'}">
            <img src="../assets/logo-scrabbleword.png" width="250" >
        </router-link>
        </div>
    </div> 
</template>
 
<style scoped>
 .grid-container {
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  padding: 5px;
  column-gap: 20px;
  row-gap: 20px;
  /* background-color: #6667ad; */
  /* background-image: url(../assets/logo.png) ; */
}
.grid-item {
  margin: auto;
  text-align: center;
  padding: 20px;
}
img:hover{
  opacity: 0.3;
}


</style>