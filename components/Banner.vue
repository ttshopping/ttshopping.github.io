<script setup lang="ts">
import  banner1 from '~/assets/img/banner1.png'
import  banner2 from '~/assets/img/banner2.png'
import  banner3 from '~/assets/img/banner3.png'
import useWindowResize from "~/hook/useWindowResize";

const list = ref([
  banner1,
  banner2,
  banner3,
])

const imgs = ref<HTMLImageElement[]>()
const height = ref()
useWindowResize(() => {
  height.value = imgs.value?.[0].clientHeight + 'px'
})

function onLoad(event: Event) {
  const img = event.target as HTMLImageElement
  height.value = img.clientHeight + 'px'
}

const index = ref(0)

const translateX = computed(() => {
  return {
    transform: `translateX(-${index.value * 100}%)`
  }
})

const itemStyles = ref(list.value.map((_, index) => {
  return {
    transform: `translateX(${index * 100}%)`
  }
}))

function next() {
  index.value+=1
  if (index.value > list.value.length - 1) {
    index.value = 0
  }
}

function pre() {
  index.value-=1
  if (index.value < 0) {
    index.value = list.value.length - 1
  }
}

function select(ind: number) {
  index.value = ind
}

</script>
<template>
  <div class='w-full overflow-hidden relative group/item' :style="{ height: height }">
    <div class='absolute left-0 w-full h-full will-change-transform transition-transform duration-[600ms]' :style="translateX">
      <div class='absolute left-0 w-full h-full' v-for="(item, index) of list" :key="item" :style="itemStyles[index]">
        <ClientOnly>
          <img :src="item" @load="onLoad" ref="imgs" />
        </ClientOnly>
      </div>
    </div>
    <button class="absolute z-[10] w-[40px] h-[40px] bg-[#222222] rounded-[50%] flex justify-center items-center top-[50%] -translate-y-[50%] translate-x-[15px] left-[30px] transition-all duration-[600ms] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-[0]" @click="pre">
      <svg class="h-[16px] fill-white" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z" class="arrow"></path></svg>
    </button>
    <button class="absolute z-[10] w-[40px] h-[40px] bg-[#222222] rounded-[50%] flex justify-center items-center top-[50%] -translate-y-[50%] -translate-x-[15px] right-[30px] transition-all duration-[600ms] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-[0]" @click="next">
      <svg class="h-[16px] fill-white" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z" transform="translate(100, 100) rotate(180)" class="arrow"></path></svg>
    </button>

    <ol class="absolute left-[50%] translate-x-[50%] bottom-[15px] flex gap-x-2">
      <li class="w-[12px] h-[12px] bg-white rounded-[50%] cursor-pointer opacity-50 hover:opacity-100" :class="{'!opacity-100': index === 0}" @click="select(0)"></li>
      <li class="w-[12px] h-[12px] bg-white rounded-[50%] cursor-pointer opacity-50 hover:opacity-100" :class="{'!opacity-100': index === 1}" @click="select(1)"></li>
      <li class="w-[12px] h-[12px] bg-white rounded-[50%] cursor-pointer opacity-50 hover:opacity-100" :class="{'!opacity-100': index === 2}" @click="select(2)"></li>
    </ol>
  </div>
</template>
