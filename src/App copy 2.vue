<script setup>
import { onMounted, ref } from 'vue';



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

    const deleTask = (index) => {
      tasks.value.splice(index, 1)
    }
 onMounted(async()=>{
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((task)=> task.title)
  }
  catch(err){
    console.log(err.message)
  }
 })

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
     <span>
       {{ item }}
     </span>
     <button @click="deleTask(index)">X</button>
    </li>
  </ul>
  <a :href="link"> click google</a>
  <!-- <button v-on:click="toggleStatus">toggle status</button> -->
  <button @click="toggleStatus">toggle status</button>
  
</template>


