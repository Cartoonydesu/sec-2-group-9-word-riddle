<script setup>
</script>

<template>
    <div class="navbar">
        <p><router-link :to="{name:'Home'}">GAMES</router-link></p>
        <p><router-link :to="{name:'Vocab'}">VOCAB</router-link></p>
        <p style="float:right;"><router-link :to="{name:'AboutUs'}">ABOUT US</router-link></p>
    </div>
    <h1>~~ Word Riddle ~~</h1>
    <div>
        <router-view></router-view>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Shojumaru&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
    h1 {
        font-family: 'Shojumaru', cursive;
        font-size: 3em;
        color: #6667ad;
    }
    h2 {
        font-family: 'Black Ops One', cursive;
        color: black;
    }
    body {
        font-family: 'Itim', cursive;
        background-color: #ffe9ce;
        text-align: center;
        line-height: 30px;
        margin-top: 7em;
    }
    .navbar {
        overflow: auto;
        background-color: #f8c1cc;
        position: fixed;
        top: 0;
        width: 100%;
        border-bottom: 1px solid #e7e7e7;
    }
    .navbar p {
        float: left;
        font-weight: bold;
        font-size: 1.2em;
        display: block;
        color: #6667ad;
        text-align: center;
        padding: 0px 30px;
        text-decoration: none;
        font-family: 'Black Ops One', cursive;
    }
    .navbar p:hover:not(.active) {
        background-color: #6667ad;
        color: #f8c1cc;
        transition-duration: .2s;
    }
    .navbar p:active:not([disabled]) {
        background-color: #ffcf73;
        color: #6667ad;
        transition-duration: .2s;
    }
    button {
        font-family: 'Itim', cursive;
        background-color: #f8c1cc;
        border-radius: 10px;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
        padding: 10px;
        margin: 4px;
        border: 3px #000;
    }
    button:hover:not([disabled]) {
        background-color: #6667ad;
        color: white;
        transition-duration: .2s;
    }
    button:active:not([disabled]){
        background-color: #ffcf73;
        color: black;
        transition-duration: .2s;
    }
</style>
