<script setup>
    import {ref,computed} from 'vue'
    defineEmits(['create','delete','edit','showHideModal','update','searching'])
    const props = defineProps({
        listWords:{
            type: Object,
            require: true
        },
        newWord:{
            type: Object,
            defualt:{}
        },
        editingWord:{
            type: Object,
            defualt:{}
        },
        modalShow:{
            type: Boolean,
            require: true
        }
        ,
        keywords:{
            type: String,
            require: true
        },
        setWordSearch:{
            type: Object,
            require:true
        }
    })

    const searchingMode = computed(()=>{
        return props.keywords.length !== 0 ? true : false
    })

    const showButton = computed(()=>{
        return props.newWord.word.length === 0 || props.newWord.hint.length === 0 ? true : false
    })

</script>
 
<template>
    <h2>Vocabulary</h2>
    <div>
        
        <label for="word"><b>word: </b></label>
        <input type="text" id="word" name="word" v-model="newWord.word">
        &nbsp;
        <label for="hint"><b> hint: </b></label>
        <input type="text" id="hint" name="hint" v-model="newWord.hint"> 
        &nbsp;
        <button @click="$emit('create',newWord)" :disabled="showButton">Add new Word</button>
    </div>
    <br>

    <div>
        <b>Searching : </b>
        <input type="text" id="hint" name="hint" v-model="keywords">
        &nbsp;
        <button @click="$emit('searching',keywords,searchingMode)">Search</button>
    </div>
    <br>
    <hr>

    <center>
    <table id="vocabs">
        <tr>
            <th style="text-align: center;">Word</th>
            <th style="text-align: center;">Hint</th>
            <th></th>
        </tr>
        <tr v-for="(word,index) in listWords" :key="index" v-if="!searchingMode">
            <td>{{word.word}}</td>
            <td>{{word.hint}}</td>
            <td>
                <!-- <button @click="edit(word)">Edit</button> -->
                <button @click="$emit('edit',word)">Edit</button>
                <button @click="$emit('delete',word.id)">Delete</button>
            </td>
        </tr>
        <tr v-for="word in setWordSearch" v-else>
            <td>{{word.word}}</td>
            <td>{{word.hint}}</td>
            <td>
                <button @click="$emit('edit',word)">Edit</button>
                <button @click="$emit('delete',word.id)">Delete</button>
            </td>
        </tr>
    </table>
    </center>

    <div class="modal-mask" v-if="modalShow" style="display:block">
        <div class="modal-wrapper">
            <!-- Modal content -->
            <div class="modal-container">
                <span class="close" @click="$emit('showHideModal')">&times;</span>
                <div class="modal-header">
                    <h3>Word</h3>
                </div>
                <div class="modal-body">
                    <label for="editWord">word : </label>
                    <input type="text" id="editWord" name="editWord" v-model="editingWord.word">
                    <br> 
                    <label for="editHint">hint : </label>
                    <input type="text" id="editHint" name="editHint" v-model="editingWord.hint"> 
                </div>
                <div class="modal-button">
                    <button @click="$emit('update',editingWord)">Save</button>
                    <button @click="$emit('showHideModal')">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped>

    /* ------table-------*/
    #vocabs {
        font-family: 'Itim', cursive;
        border-collapse: collapse;
        width: auto;
    }

    #vocabs td, #vocabs th {
        border: 1px solid #ddd;
        padding: 0px 10px;
    }

    #vocabs tr:nth-child(even){background-color: #e0e1ee;}
    #vocabs tr:nth-child(odd){background-color: #ffffff;}

    #vocabs tr:hover:not([disabled]) {
            background-color: #ffcf73;
            color: black;
    }

    #vocabs th {
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: left;
        background-color: #6667ab;
        color: white;
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
        /* z-index: 9998; */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        /* display: table; */
        transition: opacity 0.3s ease;
    }
    .modal-wrapper {
        /* display: table-cell; */
        margin-top: 15em;
        vertical-align: middle; 
    }
    .modal-container {
        width: 300px;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        margin: auto;
    }
    .modal-header h3 {
        color: rgb(0, 0, 0);
    }
    .modal-body {
        margin: 20px 0;
    }
    .modal-button {
        display: flex;
        justify-content: end;
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
</style>