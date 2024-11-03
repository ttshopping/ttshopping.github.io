<script setup lang="ts">
import  arrivals1 from '~/assets/img/arrivals-1.png'
import  arrivals11 from '~/assets/img/arrivals-1-1.png'
import  arrivals2 from '~/assets/img/arrivals-2.png'
import  arrivals22 from '~/assets/img/arrivals-2-2.png'
import  arrivals3 from '~/assets/img/arrivals-3.png'
import  arrivals33 from '~/assets/img/arrivals-3-3.png'
import  arrivals4 from '~/assets/img/arrivals-4.png'
import  arrivals44 from '~/assets/img/arrivals-4-4.png'
import useWindowResize from "~/hook/useWindowResize";

const imgs = ref<HTMLImageElement[]>()
const height = ref()
useWindowResize(() => {
  height.value = imgs.value?.[0].clientHeight + 'px'
})
function onLoad(event: Event) {
  const img = event.target as HTMLImageElement
  height.value = img.clientHeight + 'px'
}

const list = ref([
  {
    img1: arrivals1,
    img2: arrivals11,
  },
  {
    img1: arrivals2,
    img2: arrivals22,
  },
  {
    img1: arrivals3,
    img2: arrivals33,
  },
  {
    img1: arrivals4,
    img2: arrivals44,
  },
])

</script>

<template>
<div>
  <div class="flex">
    <div class="flex-1 px-[15px] h-full" v-for="(item,index) of list" :key="index">
      <div class="relative group/item">
        <ProductBtn class="product-btn -translate-x-[50%] translate-y-[100%] group-hover/item:opacity-100 group-hover/item:translate-y-0">Add to cart</ProductBtn>
        <ClientOnly>
          <img ref="imgs" class="item-img-1" @load="onLoad" :src="item.img1">
          <img class="item-img-2" :src="item.img2">
        </ClientOnly>
        <div :style="{ height: height }"></div>
      </div>
      <div class="pt-[15px] text-[#111111] text-[14px]">
        <h3 class="line-clamp-2 mb-[10px] font-[Montserrat,sans-serif]">Lillian Gold Loose Wave Lace Front Wig Synthetic Wig SM9013 Lace Front Wig Synthetic Wig SM9013</h3>
        <div>
          <del class="text-[#999999]">¥39,800 JPY</del>
          <ins class="ml-[6px] text-[#ff97a7]">¥9,400 JPY</ins>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.item-img-1 {
  @apply object-cover absolute inset-0 opacity-100 transition-opacity duration-[600ms] group-hover/item:opacity-0
}
.item-img-2 {
  @apply object-cover absolute inset-0 opacity-0 transition-opacity duration-[600ms] group-hover/item:opacity-100
}

.product-btn {
    z-index: 10;
    position: absolute;
    left: 50%;
    bottom: 16px;
    opacity: 0;
}
</style>
