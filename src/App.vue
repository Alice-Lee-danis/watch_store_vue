<template>
  <h1 class="background-text">WATCH</h1>
  <router-view></router-view>
</template>

<script setup>
  import font from './assets/fonts/font.css'

</script>

<style>

  * {
    margin: 0;
    padding: 0;
    user-select: none;
    font-family: code-pro;
  }

  body {
    background-color: #faecfd;
  }

  h1 {
    font-family: code-pro-bold;
  }

  .background-text {
    position: absolute;
    font-size: 400px;
    font-weight: bold;
    filter: blur(4px);
    color:#80d4eb;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

</style>
