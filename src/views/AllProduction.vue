<template>
  <div class="products-block" ref="productsBlock" @mousewheel="onWheel">
        <p class="products-block__helper">To view products, scroll wheel</p>
        <div class="products-block__window">
            <div class="products-block__cards" ref="cardsRef">
            <div class="products-block__cards__card" 
            v-for="card in watchers" 
            :key="card.id" 
            :ref="(el)=>{cardsAll.push(el)}">
                <img class="products-block__cards__card__photo" :src="card.src" alt="">
                <h1 class="products-block__cards__card__name">{{card.name}}</h1>
                <div class="products-block__cards__card__price">{{card.price}}</div>
                <v-button class="products-block__cards__card__link" @click="$router.push({ name: 'product', params: { id: card.id } })"> по ссылке</v-button>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'
import {useStore} from 'vuex'

let store = useStore()
store.dispatch('loadWatchers')
let watchers = store.getters.getWatchers

console.log(watchers)

let route  = useRoute()


let cardsAll = []
let photosIndex = 0
let cardLenght = 0
let cardsRef = ref(null)




onMounted(()=>{
    cardLenght = cardsAll.length
    cardsAll[0].classList.add('products-block__cards__card_active')
})

function addClass(arr, stylesClass){
    arr.forEach(element => {
        element.classList.remove(stylesClass)
    });
    arr[photosIndex].classList.add(stylesClass)
}

function onWheel(e){
    photosIndex +=e.deltaY/100
        if(photosIndex<cardLenght && photosIndex >=0){
            cardsRef.value.style.left = -photosIndex * 300 + 'px'
            addClass(cardsAll,'products-block__cards__card_active')
        }
        else{
            photosIndex=0
            cardsRef.value.style.left = photosIndex + 'px'
            addClass(cardsAll,'products-block__cards__card_active')
        }
}
</script>

<style>
.products-block {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.products-block__window {
    width: 600px;
    position: absolute;
    height: 470px;
    overflow: hidden;
}

.products-block__cards {
    position: absolute;
    display: flex;
    flex-direction: row;
    transition: 700ms;
    left: 0;

}

.products-block__cards__card {
    color: #024b42;
    font-weight: bold;
    width: 300px;
    height: 450px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    filter: blur(3px);
    margin-top: 30px;
    transition: 700ms;
}

.products-block__cards__card__photo {
    width: 200px;
    height: 200px;
}

.products-block__cards__card__name {
    margin-top: 70px;
    font-size: 35px;
}

.products-block__cards__card__price {
    margin-top: 20px;
}

.products-block__cards__card__link {
    margin-top: 20px;
}

.products-block__cards__card_active  {
    filter: blur(0px);
    margin-top: 0px;
}

.products-block__cards__card_active .products-block__cards__card__link {
    cursor: pointer;
}

.products-block__cards__card_active:hover {
    transition: 200ms;
    background-color: rgb(25, 146, 179, .1);
    backdrop-filter: blur(2px);
    border-radius: 40px;
    color: #032c28;
}

.products-block__helper {
    position: fixed;
    right: 30px;
    top: 30px;
    font-size: 20px;
    color:#0b796e;
}
</style>