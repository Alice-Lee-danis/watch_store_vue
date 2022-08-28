<template>
  <div>
    <button><slot></slot></button>
  </div>  

</template>

<style>
    button {
      font-size: 20px;
      width: 220px;
      text-align: center;
      padding: 10px 10px;
      border-radius: 20px;
      border: 2px #1992b3 solid;
      color: #024b42;
      font-weight: bold;      
      cursor: pointer;
      transition: 500ms;
      background-color: rgba(17, 104, 128, 0.1);
    }

    button:hover {
      background-color: rgba(33, 188, 231, 0.4);
    }
</style>