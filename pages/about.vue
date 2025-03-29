<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
import navbar from '~/components/navbar.vue';

const goToPage = (page) => {
    router.push(`?page=${page}`);
};
</script>

<template>
    <navbar/>
    <div>
        <h1 v-if="!route.query.page">Home</h1>
        <h1 v-else-if="route.query.page === 'about'">About</h1>

        <button @click="goToPage('about')">Ke About</button>
        <button @click="goToPage('home')">Ke Home</button>
    </div>
</template>
