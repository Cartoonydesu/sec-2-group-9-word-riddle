<script setup>
    import {ref,computed} from 'vue'
    
    defineEmits(['create','delete','update','searching'])
    defineProps({
        listWords:{
        type: Object,
        require: true
        },
        newWord:{
        type: Object,
        defualt:{word:"",hint:""}
        }
        // ,
        // keywords:{
        // type: String,
        // require: true
        // },
        // setWordSearch:{
        // type: Array,
        // defualt:""
        // }
    })
    const editingWord = ref("")
    const modalShow = ref(false)
    const edit = (word)=>{
        showHideModal()
        editingWord.value = {...word}
    }
    const showHideModal = () => modalShow.value===true ? modalShow.value = false : modalShow.value = true

const keywords = ref("")
const setWordSearch = ref([])
const searching = computed(async () => {    
  if(keywords.value.length !== 0){
    const res = await fetch(`http://localhost:5000/words?q=${keywords.value}`)
    if (res.status === 200) {
        setWordSearch.value = await res.json()
        console.log(setWordSearch.value)
    } else console.log('error, cannot searching')
  }else{
    setWordSearch.value = []
  }
  return setWordSearch.value
})
</script>
 
<template>
    <h2>Vocabulary</h2>
    <div>
        <b>Add new Word</b><br>
        <label for="word">word: </label>
        <input type="text" id="word" name="word" v-model="newWord.word">
        <label for="hint"> hint: </label>
        <input type="text" id="hint" name="hint" v-model="newWord.hint"> 
        <button @click="$emit('create',newWord)">Add</button>
    </div>
    <br>
    <div>
        <b>Searching</b><br>
        <input type="text" id="hint" name="hint" v-model="keywords">
        <!-- <button @click="$emit('searching',keywords)">Search</button> -->
        <button @click="searching()">Search</button>
    </div>
   <br><hr>

    <center>
    <table id="vocabs">
        <tr>
            <th>Word</th><th>Hint</th><th></th>
        </tr>
        <tr v-for="(word,index) in listWords" :key="index" v-if="(keywords.length==0)">
            <td>{{word.word}}</td>
            <td>{{word.hint}}</td>
            <td>
                <button @click="edit(word)">Edit</button>
                <button @click="$emit('delete',word.id)">Delete</button>
            </td>
        </tr>
        <tr v-for="word in setWordSearch" v-else>
            <td>{{word.word}}</td>
            <td>{{word.hint}}</td>
            <td>
                <button @click="edit(word)">Edit</button>
                <button @click="$emit('delete',word.id)">Delete</button>
            </td>
        </tr>
    </table>
    </center>

    <div class="modal-mask" v-if="modalShow" style="display:block">
    <div class="modal-wrapper">
    <!-- Modal content -->
    <div class="modal-container">
        <span class="close" @click="showHideModal()">&times;</span>
        <div class="modal-header"><h3>Edit Word</h3></div>
        <div class="modal-body">
            <label for="editWord">word:</label>
            <input type="text" id="editWord" name="editWord" v-model="editingWord.word">
            <br> 
            <label for="editHint">hint:</label>
            <input type="text" id="editHint" name="editHint" v-model="editingWord.hint"> 
        </div>
        <div class="modal-button">
            <button @click="$emit('update',editingWord,showHideModal)">Save</button>
            <button @click="showHideModal()">Cancel</button>
        </div>
    </div>
    </div>
    </div>

</template>
 
<style>

    /* ------table-------*/
    #vocabs {
        font-family: 'Itim', cursive;
        border-collapse: collapse;
        width: 75%;
    }

    #vocabs td, #vocabs th {
        border: 1px solid #ddd;
        padding: 0px 10px;
    }

    #vocabs tr:nth-child(even){background-color: #e0e1ee;}
    #vocabs tr:nth-child(odd){background-color: #ffffff;}

    #vocabs tr:hover:not([disabled]) {
            background-color: #fff7ce;
            color: black;
    }

    #vocabs th {
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: left;
        background-color: #6667ab;
        color: white;
    }
                                                                                                                                            
    /* The Modal (background) */
    .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 9998; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content */
    .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    }

    /* The Close Button */
    .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    }

    .close:hover,
    .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    }
    /** ---------modal 2----------- */
    .modal-mask {
    display: none;
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
    color: rgb(0, 0, 0);
    }
    .modal-body {
    margin: 20px 0;
    }
    .modal-button {
    display: flex;
    justify-content: end;
    }

</style>