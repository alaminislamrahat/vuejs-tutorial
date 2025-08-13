<script>
export default {
  data(){
    return {
      name : 'Rahat Developer',
      status : 'pending',
      tasks : ['one', 'two', 'three'],
      link : 'https://meet.google.com/landing'
    }
  },
  methods : {
    toggleStatus(){
      if(this.status === 'active'){
        this.status = 'pending'
      }
      else if(this.status === 'pending'){
        this.status = 'inactive'
      }

      else{
        this.status = 'active'
      }
    }
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


