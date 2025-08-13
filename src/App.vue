<script setup>
import { ref } from 'vue';



   const name = ref('Rahat Developer');
     const status = ref('pending');
    const  tasks = ref(['one', 'two', 'three']);

    const toggleStatus = ()=> {
      if(status.value === 'active'){
        status.value = 'pending'
      }
      else if(status.value === 'pending'){
        status.value = 'inactive'
      }

      else{
        status.value = 'active'
      }
    };
 

</script>

<template>
  <h1>
    {{ name }}
  </h1>
  <p v-if="status ==='active'">user is active</p>
  <p v-else-if="status ==='pending'"> pending</p>
 
  <p v-else="status === 'inactive'">user is inactive</p>
  <p>{{ status ? name : '' }}</p>

  <h1>Tasks</h1>
  <ul>
    <li v-for="(item, index) in tasks" :key="index">
      {{ item }}
    </li>
  </ul>
  <a :href="link"> click google</a>
  <!-- <button v-on:click="toggleStatus">toggle status</button> -->
  <button @click="toggleStatus">toggle status</button>
  
</template>


