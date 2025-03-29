<script setup>
    import navbar from '~/components/navbar.vue';
    import { ref } from 'vue';

    const isOpen = ref(false);

    const handleClick = () => {
        isOpen.value = !isOpen.value;
    }
</script>

<template>
    <navbar/>
    <section class="font-poppins mt-12 bg-white w-[90%] min-h-[50vh] mx-auto p-12 rounded-md">
        <div class="mx-auto w-full flex flex-col justify-center items-center">
            <button @click="handleClick" class="bg-green-700 w-[130px] text-white px-6 py-3 cursor-pointer rounded-md font-[500] text-[14px]">Click Me</button>
            <div :class="`mt-12 bg-green-700 w-8 h-8 -translate-x-[1700%] duration-500 ${isOpen == true ? 'translate-x-[1700%]' : ''}`"></div>
        </div>
    </section>
</template>