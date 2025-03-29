<script setup>
    import { useToast } from 'vue-toastification';
    import navbar from '~/components/navbar.vue';
    import API from '~/libs/axios';
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';

    const navigate = useRouter();
    const toast = useToast();

    const form = ref({
        name: '',
        address: '',
        phone: '',
        email: '',
        description: '',
    });

    const handleSubmit = async() => {
        try {
            const response = await API.post('/crud', form.value);
            toast.success(response.data.message, {
                timeout: 2000
            });

            setTimeout(() => {
                navigate.push('/');
            }, 3000);
        } catch (error) {
            toast.error(error.response.data.message, {
                timeout: 2000
            });
        }
    }
</script>

<template>
    <navbar/>
    <section class="font-poppins py-20">
        <div class="bg-white w-[70%] min-h-[60vh] rounded-md mx-auto shadow-[6px] p-12">
            <div class="">
                <h1 class="font-[600] text-[32px]">Add <span class="text-green-800">User</span></h1>
                <p class="font-[400] pt-1 text-[16px]">Please Input Correct Personal Data</p>
            </div>
            <div class="pt-12 flex justify-start items-start gap-20">
                <div class="flex flex-col gap-6">
                    <div class="flex flex-col gap-2">
                        <label>Name: </label>
                        <input 
                            class="border-3 border-black rounded-md outline-none text-[14px] w-[300px] px-3 h-[45px] focus-within:border-green-800"
                            type="text"
                            placeholder="Input the Name"
                            required
                            v-model="form.name"
                        >
                    </div>
                    <div class="flex flex-col gap-2">
                        <label>Address: </label>
                        <input 
                            class="border-3 border-black rounded-md outline-none text-[14px] w-[300px] px-3 h-[45px] focus-within:border-green-800"
                            type="text"
                            placeholder="Input the Address"
                            required
                            v-model="form.address"
                        >
                    </div>
                    <div class="flex flex-col gap-2">
                        <label>Phone: </label>
                        <input 
                            class="border-3 border-black rounded-md outline-none text-[14px] w-[300px] px-3 h-[45px] focus-within:border-green-800"
                            type="text"
                            placeholder="Input the Phone"
                            required
                            v-model="form.phone"
                        >
                    </div>
                    <div class="flex flex-col gap-2">
                        <label>Email: </label>
                        <input 
                            class="border-3 border-black rounded-md outline-none text-[14px] w-[300px] px-3 h-[45px] focus-within:border-green-800"
                            type="email"
                            placeholder="Input the Email"
                            required
                            v-model="form.email"
                        >
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <div class="flex flex-col gap-2">
                        <label>Description: </label>
                        <textarea 
                            class="border-3 border-black rounded-md outline-none text-[14px] w-[300px] p-3 h-[180px] focus-within:border-green-800"
                            type="text"
                            placeholder="Input the Description"
                            required
                            v-model="form.description"
                        />
                    </div>
                    <button @click="handleSubmit" class="bg-green-800 text-white text-[14px] font-[500] py-3 rounded-md cursor-pointer hover:bg-transparent hover:border-green-800 border-3 duration-150 hover:text-green-800">Add User</button>
                </div>
            </div>
        </div>      
    </section>
</template>