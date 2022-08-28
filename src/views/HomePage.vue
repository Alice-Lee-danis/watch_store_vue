<template>
  <div class="shop-block">
            <div class="shop-block__item">
                <div class="shop-block__item_content">
                    <h1 class="shop-block__item_content_title">IWatch</h1>
                    <ul>
                        <li v-for="item in itemsMenu" 
                        :key="item.id" 
                        @click="$router.push({name:item.path})">{{item.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="shop-block__item">
               <div class="shop-block__item__slider">
                    <div class="shop-block__item__slider__slides">
                        <img v-for="index in 2" :key="index" :ref="(el)=>{slides.push(el)}" alt="" class="shop-block__item__slider__slides__item">
                    </div>          
               </div>
            </div>
        </div>
</template>


<script setup>
import {reactive, ref, onMounted, computed} from 'vue'
import {useRoute} from 'vue-router'
import checkRoute from '@/useFunction/checkRoute'
import {useStore} from 'vuex'

let store = useStore()
store.dispatch('loadWatchers')

const route = useRoute()
let slides = []
let indexOfImages = 0
let slideIndex = 1
let watchers = store.getters.getWatchers
const itemsMenu = checkRoute(route)
let data = reactive({
        pathPictures:[],
        index:0,
        offsetIndex:0
    })



function moveSlide(){
    if(slideIndex){
        slides[1].style.left = '0'
        slides[0].style.left = '100%'
        slideIndex--
    }
    else{        
        slides[0].style.left = '0'
        slides[1].style.left = '100%'
        slideIndex++
    }
}

function changingPictures(){
        if(indexOfImages < 2){
            indexOfImages++
            slides[slideIndex].src = watchers[indexOfImages].src
        }
        else {
            indexOfImages = 0
            slides[slideIndex].src = watchers[indexOfImages].src
        }
       moveSlide()
    }


onMounted(()=>{
    slides[indexOfImages].src = watchers[0].src
    setInterval(()=>{
        changingPictures()
    },3000)
})

watchers.forEach(element => {
    data.pathPictures.push(element.src)
});

</script>

<style>
h1{
    color: #005067;
    font-size: 50px;   
}

.shop-block {
    min-width: 1400px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: absolute;
}

.shop-block__item{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 700px;
}

.shop-block__item_content_title {
    margin-bottom: 10px;
}

.shop-block__item_content ul{
    list-style: none;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    color: #1992b3;
    
}

.shop-block__item_content ul li{
    position: relative;
    transition: 0.2s;
    cursor: pointer;
    height: 50px;
    width: 250px;
}

.shop-block__item_content ul li:hover{
    font-size: 40px;
    color: #005067;
    transition: 0.2s;

}

.shop-block__item__slider {
    width: 700px;
    height: 700px;
    clip-path: circle(50% at 50% 50%);
    background-color: rgb(0,80,103,0.1);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.shop-block__item__slider__slides {
    width: 500px;
    height: 500px;
    clip-path: circle(50% at 50% 50%);
    overflow: hidden;
    position: relative;
}

.shop-block__item__slider__slides__item {
    width: 500px;
    height: 500px;
    margin: 0;
    object-fit: cover;
    clip-path: circle(50% at 50% 50%);
    position: absolute;
    transition: 2.4s;
    left: 0;
    background-color: rgb(18, 196, 245, .7)
}

.shop-block__item__slider__slides__item:last-child {
    left: 100%;
}
</style>