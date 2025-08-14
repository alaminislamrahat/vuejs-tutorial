<script setup>
import { ref } from 'vue';



   const name = ref('Rahat Developer');
     const status = ref('pending');
    const  tasks = ref(['one', 'two', 'three']);
    const newTask = ref('')

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

    const addTask = ()=>{
      if(newTask.value.trim() !== ''){
        tasks.value.push(newTask.value);
        newTask.value = ''
      }
    }
 

</script>

<template>
  <h1>
    {{ name }}
  </h1>
  <p v-if="status ==='active'">user is active</p>
  <p v-else-if="status ==='pending'"> pending</p>
 
  <p v-else="status === 'inactive'">user is inactive</p>
  <p>{{ status ? name : '' }}</p>

  <form @submit.prevent="addTask">

    <label for="newTask">Add Task</label>
    <input type="text" name="newTask" id="newTask" v-model="newTask">
    <button type="submit">Submit</button>

  </form>

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


