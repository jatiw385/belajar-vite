<template>
    <div class="text-black pt-32 pl-4">
        <h1 class="text-4xl font-bold">Beauty</h1>
        <p>Ini adalah Product Beauty</p>
    </div>
    <div>
        <div class="grid grid-cols-4 gap-10 px-20 mt-10">
            <div v-for="product in products" :key="product.id">
                <div class="bg-gray-300 w-fit h-fit"> 
                    <img class="h-60 " :src="product.thumbnail" alt="">
                </div>
                <div class="flex flex-col gap-2">
                    <h2 class="font-bold text-lg">{{ product.title }}</h2>
                    <p class="text-red-600">{{ product.price }}$</p>
                    <div class="flex items-center">
                        <span class="material-symbols-outlined">star_rate</span>
                         <p class="font-bold text-lg">{{ product.rating }}</p>
                         <p class="ml-1">({{ product.stock }})</p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            products : [],
        }
    },
    mounted() {
        this.fetchProducts()
    },
    methods : {
        async fetchProducts(){
            try {
                const res = await axios.get('https://dummyjson.com/products/category/beauty');
                console.log(res.data.products);
                this.products = res.data.products;
            } catch (error){
                console.log(error);
            }    
        }
    }
}
</script>