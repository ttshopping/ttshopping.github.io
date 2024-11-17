<script setup lang="ts">

</script>
<template>
    <h1 class="text-[26px] font-[600] text-[#111111] py-[40px] text-center">All Products Choose</h1>
    <div class="flex">
        <div class="sticky top-[90px] max-h-[calc(100vh-90px)] overflow-y-auto w-[204px] px-[15px] flex flex-col gap-y-[50px]">
            <div v-for="item of 5">
                <h5 class="facet-title">HAIR SYTLES</h5>
                <ul class="flex flex-col gap-y-[8px] max-h-[250px] overflow-y-auto">
                    <li>
                        <label class="flex items-center gap-x-[8px] cursor-pointer">
                            <input type="checkbox" />
                            <p><span>Bob</span><span> (6)</span></p>
                        </label>
                    </li>
                    <li>
                        <label class="flex items-center gap-x-[8px] cursor-pointer">
                            <input type="checkbox" />
                            <p><span>Curly Hair</span><span> (6)</span></p>
                        </label>
                    </li>
                    <li>
                        <label class="flex items-center gap-x-[8px] cursor-pointer">
                            <input type="checkbox" />
                            <p><span>Mico Wave Hair</span><span> (6)</span></p>
                        </label>
                    </li>
                    <li>
                        <label class="flex items-center gap-x-[8px] cursor-pointer">
                            <input type="checkbox" />
                            <p><span>Short Hair</span><span> (6)</span></p>
                        </label>
                    </li>
                    <li>
                        <label class="flex items-center gap-x-[8px] cursor-pointer">
                            <input type="checkbox" />
                            <p><span>Wave Hair</span><span> (6)</span></p>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex-1 grid grid-cols-4">
            <template v-for="item of 100">
                <Product></Product>
            </template>
        </div>
    </div>
</template>
