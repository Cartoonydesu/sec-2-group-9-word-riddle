<script setup>
</script>

<template>
    <div class="navbar">
        <router-link :to="{name:'Home'}"><p>GAMES</p></router-link>
        <router-link :to="{name:'Vocab'}"><p>VOCAB</p></router-link>
        <router-link :to="{name:'AboutUs'}"><p style="float:right;">ABOUT US</p></router-link>
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
        margin-top: 6em;
        margin-left: 0;
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    body::-webkit-scrollbar {
        display: none;
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
        font-size: 1.1em;
        display: block;
        color: black;
        text-align: center;
        padding: 10px 30px;
        text-decoration: none;
        font-family: 'Black Ops One', cursive;
        margin: 0;
    }
    .navbar p:hover:not(.active) {
        background-color: #eb8aac;
        color: #ffcf73;
        transition-duration: .2s;
    }
    .navbar p:active:not([disabled]) {
        background-color: #ffcf73;
        color: #6667ad;
        transition-duration: .2s;
    }
    .router-link-active p {
        color: #ffcf73;
        text-decoration: none;
        background-color: #6667ad;
    }

    button {
        font-family: 'Itim', cursive;
        background-color: #f8c1cc;
        border-radius: 10px;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
        padding: 10px;
        margin: 0px;
        border: 3px #000;
    }
    button:hover:not([disabled]) {
        background-color: #6667ad;
        color: white ;
        transition-duration: .2s;
    }
    button:active:not([disabled]){
        background-color: #ffcf73;
        color: black;
        transition-duration: .2s;
    }
</style>
