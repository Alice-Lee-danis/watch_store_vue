<template>
<div class="content_block">
   <div class="form">
        <div class="menu" :class="{menu_active:isActiveMenu}" @mouseleave="content = ''">
            <div class="menu__frame" :class="{menu__frame_active:isActiveInside}"></div>
                <div class="menu__inside">
                    <div class="menu__inside__menu__item" v-for="item in itemsMenu" 
                    :key="item.index" 
                    @click="$router.push({name:item.path})" >
                         <div class="menu__inside__menu__item__circle" @mouseenter="content = item.name"></div>
                    </div>
             </div>  
        </div>
         <div class="circle" @click="isActive">
            <div class="circle_text-content">{{content}}</div>
            <div class="circle__item" :class="{circle__item_active:isActiveMenu}">
                 <div class="circle__item__inside" :class="{circle__item__inside_active:isActiveInside}"></div>
            </div>
        </div>
    </div>
  <router-view></router-view>
</div>
</template>

<script setup>
import {computed, ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import checkRoute from '@/useFunction/checkRoute'

let isActiveMenu = ref(false)
let isActiveInside = ref(false)
const route  = useRoute()
let content = ref('')

function isActive(){
    isActiveMenu.value = !isActiveMenu.value
    if(isActiveMenu){
        setTimeout(()=>{   
        isActiveInside.value = !isActiveInside.value
        },200)
    }
}

let itemsMenu  = computed(()=>{
    return checkRoute(route)
})

</script>

<style>

.content_block {
    width: 100%;
    height: 100%;
    position: absolute;
}


.form {
    width: 450px;
    height: 200px;
    position: fixed;
    overflow: hidden;
    left: 50%;
    transform: translate(-50%,0);
}

.menu {
    position: absolute;
    left: 50%;
    top: -70px;
    transform: translate(-50%,0);
    width: 400px;
    height: 60px;
    background-color: #00aea5;
    margin: 0 auto;
    border-radius: 0 0 80px 80px;
    display: block;
    transition: 500ms top ease;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0px 0px 8px 2px rgba(2, 75, 66, 0.3);
}

.menu__inside {
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    width: 95%;
    height: 90%;
    border-radius: 0 0 80px 80px;
    background-color: #faecfd;
    transition: 700ms;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.menu__inside__menu__item {
    width: 20px;
    height: 20px;  
}

.menu__inside__menu__item__circle {
    width: 10px;
    height: 10px;
    background-color: #024b42;
    border-radius: 50%;
    transition: 50ms;
    margin: 0 auto;
    box-shadow: 0px 0px 8px 2px rgba(2, 75, 66, 0.3);
}

.menu__inside__menu__item__circle:hover {
    width: 13px;
    height: 13px;
}

.circle {
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    width: 80px;
    height: 70px;
    top: 80px;
    margin: 0 auto;
    cursor: pointer;
}

.circle__item {
    margin: 0 auto;
    width: 70px;
    height: 70px;
    background-color: rgb(0, 0, 0, 0.0);
    border-radius: 50%;
    border: 2px solid #a30078;
    box-shadow: 0px 0px 8px 2px rgba(2, 75, 66, 0.3);
    transition: 700ms;
}


.circle__item__inside {
    margin: 0 auto;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color:#024b42 ;
    box-shadow: 0px 0px 20px 5px rgba(2, 75, 66, 0.3);
    transition: 0;
}

.menu__frame {
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    width: 0px;
    height: 200px;
    background-color: #024b42;
    opacity: 0.3;
    transition: 0;
}

.circle_text-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #024b42;
    text-shadow: 0px 0px 10px rgba(2, 75, 66, 0.7);
    font-weight: bold;
}

.menu_active {
    top:0;
}

.circle__item_active {
    rotate: 360deg;
}

.circle__item__inside_active{ 
    margin-top: -20px;
    transition: 300ms;
    width: 20px;
    height: 0;
}


.menu__frame_active {
    width: 1000px;
    transition: 3s;
}

</style>