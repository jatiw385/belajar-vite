<template>
    <nav class="flex absolute w-screen justify-between px-5 pt-5 ">
        <div class="flex gap-10 justify-center items-center   ">
            
            <img src="../assets/bur.svg" alt="">
        </div>
        <div class="flex gap-10 text-gray items-center font-bold">
            <router-link to="/product/beauty">
                Beauty
            </router-link>
            <router-link to="/product/fragrances">
                Fragrances
            </router-link>
            <router-link to="/product/furniture">
                Furniture
            </router-link>
        </div>
        <div class="text-gray">
            <div class="flex gap-2">
                <span class="material-symbols-outlined">favorite</span>
                <span class="material-symbols-outlined">language</span>
                <span class="material-symbols-outlined">shopping_cart</span>
            </div>
            <div class="flex gap-1.5">
                <router-link to="/">Home</router-link>
                <a href="">Bantuan</a>
                <a href="">Search</a>
            </div>
        </div>
    </nav>
</template>