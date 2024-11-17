<script setup lang="ts">


</script>

<template>
    <div class="flex flex-col px-[15px] mb-[30px]">
        <div class="relative group/item aspect-[225/289]">
            <ProductBtn
                class="product-btn -translate-x-[50%] translate-y-[100%] group-hover/item:opacity-100 group-hover/item:translate-y-0">
                Add to cart</ProductBtn>
            <img class="item-img-1" src="~/assets/img/product-1.png" />
            <img class="item-img-2" src="~/assets/img/product-1-1.png" />
        </div>
        <div class="pt-[15px] text-[#111111] text-[14px]">
            <h3 class="line-clamp-2 mb-[10px] font-[Montserrat,sans-serif]">Lillian Gold Loose Wave Lace Front Wig
                Synthetic Wig SM9013 Lace Front Wig Synthetic Wig SM9013</h3>
            <div>
                <del class="text-[#999999]">¥39,800 JPY</del>
                <ins class="ml-[6px] text-[#ff97a7]">¥9,400 JPY</ins>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item-img-1 {
  @apply w-full h-full object-cover absolute inset-0 opacity-100 transition-opacity duration-[600ms] group-hover/item:opacity-0
}
.item-img-2 {
  @apply w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-[600ms] group-hover/item:opacity-100
}
.product-btn {
    z-index: 10;
    position: absolute;
    left: 50%;
    bottom: 16px;
    opacity: 0;
}
</style>
