<script setup>
import {  defineProps, onMounted, reactive} from 'vue';
import JoblistingSingle from './JoblistingSingle.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

defineProps({
    limit : Number,
    showButton : {
        type : Boolean,
        default : false
    }
})

const state = reactive({
    jobs : [],
    isLoading : true
})

onMounted(async()=> {
    try{
        const {data} = await axios('http://localhost:8000/jobs')
        console.log(data, 'fetch')
        state.jobs = data;
    }
    catch(err){
        console.log(err)
    }
    finally{
        state.isLoading = false;
    }
})

</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container mx-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>

            <!-- show loading spinner  -->
             <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                <PulseLoader/>
             </div>

             <!-- show data when loading done  -->
            <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3 justify-center items-center">
                <JoblistingSingle v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job"/>
                
            </div>
        </div>

    </section>
     <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
   

</template>