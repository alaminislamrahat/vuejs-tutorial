<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>

<template>
    <Hero title="Rahat Vue Dev" subTitle="Be a developer" />
    <HomeCards />
    <JobListings :limit="3" :showButton="true" />
</template>