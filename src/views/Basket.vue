<template>
  <div class="basket">
    <div class="basket__message" v-show="isPurchased">
        <div class="basket__message__content">
            <div v-for="product in basketGoods" :key="product.id">
                 {{product.name}} {{product.count}} count
            </div>
        </div>
        </div>
        <div class="basket__window" v-if="basketGoods.length">
            <div class="basket__window__item"  v-for="item in basketGoods" :key="item.id" :ref='(a)=>{product.push(a)}'>
                <div class="basket__window__item__circle"/>
                <div class="basket__window__item__info">
                    <h1 class="basket__window__item__info__watch-name">{{item.name}}</h1>
                    <p class="basket__window__item__info__price">price: {{item.price}}</p>
                    <p class="basket__window__item__info__count">count: {{item.count}}</p>
                </div>
                    <img @click="deleteAProduct(item)" src="@/assets/delete.png" alt=""  class="basket__window__item__delete">
            </div> 
        </div>
        <div class="basket__window basket__window--empty" v-else>нет продуктов</div>
        <div class="basket__buy">
            <v-button @click="purchase">buy</v-button>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useStore} from 'vuex'
let product = []
let store = useStore()
let isPurchased = ref(false)
let basketGoods = store.getters.getBasket

function deleteAProduct(item){
    store.dispatch('removalАromСart',[item])
}

function purchase(){
    if(basketGoods.length){
        isPurchased.value = true
        setTimeout(()=>{
            isPurchased.value = false
        },2000)
    }
}


</script>

<style>
    .basket {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.basket__message {
    position: absolute;
    right: 40px;
    top: 40px;
    background-color: rgb(165, 127, 184, .2);
    width: 200px;
    padding: 10px;
    border-radius: 20px;
    
}

.basket__message__content{
    display: flex;
    min-height: 40px;
    display: flex;
    align-items: center;
    font-size: 15px;
    flex-direction: column;
    
}

.products-block__text {
    position: absolute;
    font-size: 400px;
    font-weight: bold;
    filter: blur(4px);
    color:#80d4eb;
}

.basket__window {
    max-height: 300px;
    min-height: 50px;
    min-width: 300px;
    overflow-y: auto;
    color: #024b42;
    border: 2px rgb(14, 120, 108, .3) solid;
    border-radius: 20px;
}

.basket__window--empty {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
}

.basket__window::-webkit-scrollbar {
    width: 10px;
}

.basket__window::-webkit-scrollbar-track {
    background: rgba(9, 159, 142, 0.3);
    border-radius: 60px;
}

.basket__window::-webkit-scrollbar-thumb {
    background: rgb(2, 75, 66, .5);
    border-radius: 60px;
}

.basket__window::-webkit-scrollbar-thumb:hover {
    background: rgb(2, 75, 66, .8);
}


.basket__window__item {
    min-width: 300px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px;
    margin: 6px 2px;
}


.basket__window__item__delete {
    width: 20px;
    height: 15px;
    cursor: pointer;
}



.basket__window__item__circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #024b42;
    margin-right: 30px;
}

.basket__window__item__info {
    margin-right: auto;
    font-size: 15px;
}

.basket__window__item__info__watch-name {
 font-size: 18px;
}

.basket__buy {
    margin-top: 20px;
    width: 300px;
    text-align: end;
}

.basket__buy__button {
    width: 100px;
    height: 40px;
    border: 2px #1992b3 solid;
    cursor: pointer;
    font-size: 25px;
    border-radius: 30px;
    color: #024b42;
}

</style>