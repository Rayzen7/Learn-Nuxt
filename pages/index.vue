<script setup>
    import Navbar from '~/components/navbar.vue';
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useToast } from 'vue-toastification';
    import API from '~/libs/axios';

    const users = ref([]);
    const toast = useToast();
    const navigate = useRouter();

    const editUser = (id) => {
        navigate.push(`/edit/${id}`);
    }

    const deleteUser = async(id) => {
        try {
            const response = await API.delete(`/crud/${id}`);
            toast.success(response.data.message, {
                timeout: 2000
            });

            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.error(error.response.data.message, {
                timeout: 2000
            });
        }
    }

    onMounted(() => {
        const fetchUser = async() => {
            const response = await API.get('/crud');
            users.value = response.data.crud;
        }

        fetchUser();
    });
</script>

<template>
    <Navbar/>
    <section class="font-poppins mt-12 bg-white w-[90%] min-h-[50vh] mx-auto p-12 rounded-md">
        <div class="flex justify-between items-center">
            <h1 class="text-[32px] font-[600]">All <span class="text-green-800">User</span></h1>
            <nuxt-link to="/add">
                <button class="text-white bg-green-600 px-6 py-3 rounded-md cursor-pointer font-[500] hover:bg-green-700 text-[16px]">Add User</button>
            </nuxt-link>
        </div>
        <table class="border-collapse mx-auto mt-14" v-if="users.length > 0">
            <thead>
                <tr>
                    <td class="text-[16px] pb-5 border-b-2 border-black px-9">No</td>
                    <td class="text-[16px] pb-5 border-b-2 border-black px-9">Name</td>
                    <td class="text-[16px] pb-5 border-b-2 border-black px-9">Address</td>
                    <td class="text-[16px] pb-5 border-b-2 border-black px-9">Phone</td>
                    <td class="text-[16px] pb-5 border-b-2 border-black px-9">Email</td>
                    <td class="text-[16px] pb-5 border-b-2 border-black px-9">Description</td>
                    <td class="text-[16px] pb-5 border-b-2 border-black px-9">Action</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                    <td class="text-[14px] py-8 px-9">{{ index + 1 }}</td>
                    <td class="text-[14px] py-8 px-9">{{ user.name }}</td>
                    <td class="text-[14px] py-8 px-9">{{ user.address }}</td>
                    <td class="text-[14px] py-8 px-9">{{ user.phone }}</td>
                    <td class="text-[14px] py-8 px-9">{{ user.email }}</td>
                    <td class="text-[14px] py-8 px-9">{{ user.description }}</td>
                    <td class="text-[14px] align-middle">
                        <div class="flex gap-3 justify-center items-center">
                            <button @click="editUser(user.id)" class="text-white bg-blue-600 px-4 py-3 rounded-md cursor-pointer font-[500] hover:bg-blue-700 text-[12px]">Edit</button>
                            <button @click="deleteUser(user.id)" class="text-white bg-red-600 px-4 py-3 rounded-md cursor-pointer font-[500] hover:bg-red-700 text-[12px]">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="mt-16" v-else>
            <h1 class="text-center text-[22px] text-gray-600 font-[500]">Data Not Found</h1>
        </div>
    </section>
</template>