<script setup>
import jobData from '@/jobs.json';
import { ref } from 'vue';
import JoblistingSingle from './JoblistingSingle.vue';

const jobs = ref(jobData)
console.log('first', jobs.value)
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container mx-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3 justify-center items-center">
                <JoblistingSingle v-for="job in jobs" :key="job.id" :job="job"/>
                
            </div>
        </div>

    </section>
    <h1>Job listing</h1>

</template>