<template>
    <nav class="flex justify-between px-[80px] w-full h-[10vh] bg-green-800 font-poppins text-white items-center">
        <h1 class="font-[600] text-[22px]">Nuxt App</h1>
        <div class="flex justify-center text-[16px] items-center gap-10">
            <nuxt-link to="/">
                <p class="cursor-pointer">Home</p>
            </nuxt-link>
            <nuxt-link to="/project">
                <p class="cursor-pointer">Project</p>
            </nuxt-link>
            <nuxt-link to="/about">
                <p class="cursor-pointer">About</p>
            </nuxt-link>
        </div>
    </nav>
</template>