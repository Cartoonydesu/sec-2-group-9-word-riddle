import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Vocab from '../views/Vocab.vue'
import AboutUs from '../views/AboutUs.vue'
import Hangman from '../views/Hangman.vue'
import ScrabbleWord from '../views/ScrabbleWord.vue'
import NotFound from '../views/NotFound.vue'

const history = createWebHistory()

const routes = [
    {
        path: '/:catchNotMatchPath(.*)',
        name: 'NotFound',
        component: NotFound
    },
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path:'/vocab',
        name: 'Vocab',
        component: Vocab
    },
    {
        path:'/hang-man',
        name: 'Hangman',
        component: Hangman
    },
    {
        path:'/scrabble-word',
        name: 'ScrabbleWord',
        component: ScrabbleWord
    },
    {
        path:'/about-us',
        name: 'AboutUs',
        component: AboutUs
    }
]

const router = createRouter({ history, routes })

export default router




