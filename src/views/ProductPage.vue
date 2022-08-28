<template>
  <div class="product-block">
        <div class="product-block__item">
            <div class="product-block__item__content-block">
                <div class="product-block__item__content-block__content product-block__item__content-block--text">
                    <h1 class='product-block__item__content-block__content__brand-name product-block__item__content-block--text'>{{watchArray.name}}</h1>
                    <h2 class="product-block__item__content-block__content__watch-brand product-block__item__content-block--text">{{watchArray.secondName}}</h2>
                    <p class="product-block__item__content-block__annotation product-block__item__content-block--text">{{watchArray.about}}</p>
                    <div class="product-block__item__content-block__content__order-block">
                        <h1 class="product-block__item__content-block__content__order-block__price product-block__item__content-block--text">{{watchArray.price}}</h1>
                        <v-button class="product-block__item__content-block__content__order-block__button product-block__item__content-block--text" @click="addingToCard">добавить в корзину</v-button></div>
                </div>
            </div>
        </div>
        <div class="product-block__item">
            <div class="product-block__item__photo-block">
                <img ref="photosWatch" :src="watchArray.src" alt="">
            </div>
        </div>
    </div>
    
</template>

<script setup>
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'

let store = useStore()
store.dispatch('loadWatchers')

let route = useRoute()
let watchers = store.getters.getWatchers
let watchArray = watchers.find(element => element.id == route.params.id );

let addingToCard = ()=>{
    store.dispatch('addToBasket', watchArray)
}

</script>

<style>
.product-block {
    width: 100%;
    min-width: 1400px;
    max-width: 2400px;
    height: 100vh;
    display: flex;
    justify-content:center;
}

.product-block__item {
    width: 40%;
}

.product-block__item__photo-block {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.product-block__item__photo-block img{
    width: 100%;
    object-fit: cover;
}

.product-block__item__content-block {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.product-block__item__content-block--text {
    padding-top: 20px;
}

.product-block__item__content-block__content {
    width: 500px;
}

.product-block__item__content-block__content__brand-name{
    font-size: 50px;
    letter-spacing: 17px;
    color: #024b42;
    width: 100%;
}

.product-block__item__content-block__content__watch-brand{
    font-size: 40px;
    letter-spacing: 17px;
    color: #005067;
}

.product-block__item__content-block__annotation {
    font-size: 20px;
    color: #005067;
}

.product-block__item__content-block__content__order-block__price {
    font-size: 60px;
    color: #024b42;
}
</style>