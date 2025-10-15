<template>
    <div class="flex pt-32 px-12 mb-10 gap-32">
        <div class="h-[450px] w-1/2 bg-gray-300">
            <img class="h-full " src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" alt="">
        </div>
        <div>
            <div class="text-3xl">
                <h1>{{ product.title }}</h1>
            </div>
            <div class="flex gap-40 mt-20">
                <div class="text-2xl">
                    <h2>${{ product.price }}</h2>
                </div>
                <div class="flex justify-center items-center">
                    <div v-for=" i in product.rating"></div>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span>(191)</span>
                </div>
            </div>
            <div class="flex gap-10 mt-20">
                <div class="flex">
                    <button class="bg-gray-300 px-5 py-3 rounded-s-xl">
                        -
                    </button>
                    <div class="bg-gray-300 px-5 py-3">1</div>
                    <button class="bg-gray-300 px-5 py-3 rounded-e-xl">
                        +
                    </button>
                </div>
                <button class="bg-black text-amber-50 px-5 py-3 rounded-2xl ">TAMBAHKAN KE KERANJANG</button>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                product:{}
            }
        },
        mounted() {
        this.fetchProduct()
        },
        methods: {
            async fetchProduct(){
                try {
                    const res = await axios.get('https://dummyjson.com/products/1');
                    console.log(res.data);
                    this.product = res.data
                } catch (error){
                    console.log(error);
                }
            }
        }
    }
    
</script>