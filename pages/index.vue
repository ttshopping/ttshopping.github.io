<script setup lang="ts">
</script>
<template>
  <Banner></Banner>
  <div class="bg-[#111] section-inner text-[#FFC0CB] text-[14px] leading-[1.6]">
    <h1 class="text-center text-[37px] mb-[20px]">Smilco - Embracing Style with Comfort</h1>
    <p class="mb-[20px]">At <strong>Smilco</strong> , we believe that wigs are not just about style, they are about
      making life easier. Our wigs reduce the need for frequent salon visits and let you embrace comfort without
      compromising on style.
    </p>
    <p class="mb-[20px]">
      Our philosophy is that wigs, like fashion, should adapt to you - your mood, your outfit, and your occasion.
      With Smilco, change your hairstyle as you change your look, seamlessly and without constraint.
    </p>
    <p class="mb-[20px]">
      While maintaining beauty, our focus is on creating wigs that look natural, not artificial. They are not only
      true to your hair but also light and comfortable, enhancing your style with confidence and grace.
    </p>
  </div>

  <div class="container">
    <div class="flex">
      <div class="flex-1 px-[15px] mt-[30px] relative">
        <img class="scale-item-1 w-full h-full object-cover" src="~/assets/img/hair1.png">
        <div class="img-item">
          Bangs Hair
        </div>
      </div>
      <div class="flex-1 flex flex-col">
        <div class="flex-1 px-[15px] mt-[30px] relative">
          <img class="scale-item-1 w-full h-full object-cover" src="~/assets/img/hair2.png">
          <div class="img-item">
            Bangs Hair
          </div>
        </div>
        <div class="flex-1 px-[15px] mt-[30px] relative">
          <img class="scale-item-1 w-full h-full object-cover" src="~/assets/img/hair3.png">
          <div class="img-item">
            Bangs Hair
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col">
        <div class="flex-1 px-[15px] mt-[30px] relative">
          <img class="scale-item-1 w-full h-full object-cover" src="~/assets/img/hair4.png">
          <div class="img-item">
            Bangs Hair
          </div>
        </div>
        <div class="flex-1 px-[15px] mt-[30px] relative">
          <img class="scale-item-1 w-full h-full object-cover" src="~/assets/img/hair5.png">
          <div class="img-item">
            Bangs Hair
          </div>
        </div>
        <div class="flex-1 px-[15px] mt-[30px] relative">
          <img class="scale-item-1 w-full h-full object-cover" src="~/assets/img/hair6.png">
          <div class="img-item">
            Bangs Hair
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="mb-[30px]">
      <h3 class="section-title">
        <span class="mx-[30px]">New Arrivals</span>
      </h3>
      <span class="section-des">New Arrivals in this Week</span>
    </div>
    <Arrivals></Arrivals>
  </div>

  <div class="container">
    <div class="mb-[30px]">
      <h3 class="section-title">
        <span class="mx-[30px]">Hair Color Options</span>
      </h3>
      <span class="section-des">Choose Your Favorite Hair Color</span>
    </div>

    <div>
      <div class="flex">
        <div class="flex-1 px-[15px]" v-for="item of 6" :key="item">
          <div class="border border-[#111] rounded-[50%] overflow-hidden mb-[20px]">
            <img class="object-cover w-full h-full" src="~/assets/img/color-1.png"/>
          </div>
          <span class="block truncate text-center ">
            <a class="hover:text-[#ff97a7]">Black</a>
          </span>
        </div>
      </div>
    </div>

  </div>

  <div class="container">
    <div class="mb-[30px]">
      <h3 class="section-title">
        <span class="mx-[30px]">Trending Products</span>
      </h3>
      <span class="section-des">Bestseller From This Week</span>
    </div>
    <Arrivals></Arrivals>
  </div>

  <div class="container">
    <div class="mb-[30px]">
      <h3 class="section-title">
        <span class="mx-[30px]">@ From TikTok Influencer</span>
      </h3>
      <span class="section-des">Discover More Beauty from Around the World</span>
    </div>

    <div class="flex">
      <div v-for="item of 6" :key="item" class="px-[5px]">
        <div class="overflow-hidden">
          <img class="w-full h-full object-cover scale-item-1" src="~/assets/img/mode-1.png"/>
        </div>
      </div>
    </div>
  </div>

  <div class="container flex gap-x-[30px]">
    <div class="shipping">
      <div class="mr-[24px]">
        <svg viewBox="0 0 29 32" width="29" height="32"><path d="M 5.867 15.467 c -1.173 0 -2.133 0.96 -2.133 2.133 s 0.96 2.133 2.133 2.133 s 2.133 -0.96 2.133 -2.133 s -0.96 -2.133 -2.133 -2.133 Z M 5.867 18.667 c -0.587 0 -1.067 -0.48 -1.067 -1.067 s 0.48 -1.067 1.067 -1.067 c 0.587 0 1.067 0.48 1.067 1.067 s -0.48 1.067 -1.067 1.067 Z"></path><path d="M 22.933 15.467 c -1.173 0 -2.133 0.96 -2.133 2.133 s 0.96 2.133 2.133 2.133 c 1.173 0 2.133 -0.96 2.133 -2.133 s -0.96 -2.133 -2.133 -2.133 Z M 22.933 18.667 c -0.587 0 -1.067 -0.48 -1.067 -1.067 s 0.48 -1.067 1.067 -1.067 c 0.587 0 1.067 0.48 1.067 1.067 s -0.48 1.067 -1.067 1.067 Z"></path><path d="M 25.12 11.2 l -0.907 -4.267 c -0.373 -1.387 -1.44 -2.133 -2.88 -2.133 h -13.867 c -1.493 0 -2.347 0.747 -2.773 2.133 l -0.96 4.267 h -3.733 v 1.067 h 3.467 v 0.053 c -1.653 0.107 -2.933 1.493 -2.933 3.2 v 7.413 h 1.6 v 1.6 c 0 1.493 1.173 2.667 2.667 2.667 s 2.667 -1.173 2.667 -2.667 v -1.6 h 13.867 v 1.6 c 0 1.493 1.173 2.667 2.667 2.667 s 2.667 -1.173 2.667 -2.667 v -1.6 h 1.6 v -7.413 c 0 -1.653 -1.28 -3.04 -2.88 -3.2 v -0.053 h 3.413 v -1.067 h -3.68 Z M 5.707 7.253 c 0.32 -0.96 0.8 -1.387 1.76 -1.387 h 13.867 c 1.013 0 1.6 0.427 1.867 1.333 l 1.067 5.12 h -19.733 l 1.173 -5.067 Z M 6.4 24.533 c 0 0.907 -0.693 1.6 -1.6 1.6 s -1.6 -0.693 -1.6 -1.6 v -1.6 h 3.2 v 1.6 Z M 25.6 24.533 c 0 0.907 -0.693 1.6 -1.6 1.6 s -1.6 -0.693 -1.6 -1.6 v -1.6 h 3.2 v 1.6 Z M 27.2 15.52 v 6.347 h -25.6 v -6.347 c 0 -1.173 0.96 -2.133 2.133 -2.133 h 21.333 c 1.173 0 2.133 0.96 2.133 2.133 Z"></path></svg>
      </div>
      <div>
        <h3 class="text-[16px] text-[#222]">FREE SHIPPING</h3>
        <p class="text-[13px] text-[#696969] leading-[24px]">Free shipping on all US order or order above $100</p>
      </div>
    </div>
    <div class="shipping">
      <div class="mr-[24px]">
        <svg viewBox="0 0 32 32" width="32" height="32"><path d="M 16 3.205 c -7.066 0 -12.795 5.728 -12.795 12.795 s 5.729 12.794 12.795 12.795 c 7.067 -0.001 12.795 -5.729 12.795 -12.795 s -5.729 -12.795 -12.795 -12.795 Z M 15.999 21.864 c -3.233 0 -5.863 -2.631 -5.863 -5.864 s 2.631 -5.864 5.864 -5.864 h 0.001 c 3.233 0 5.863 2.631 5.863 5.864 s -2.631 5.864 -5.865 5.864 Z M 22.395 13.327 l 4.028 -2.693 c 0.832 1.609 1.305 3.433 1.305 5.366 c 0 1.909 -0.461 3.71 -1.273 5.305 l -4.035 -2.699 c 0.327 -0.805 0.511 -1.683 0.511 -2.606 c 0 -0.948 -0.191 -1.85 -0.535 -2.673 Z M 25.89 9.708 l -3.99 2.668 c -0.58 -0.942 -1.377 -1.733 -2.325 -2.305 l 2.669 -3.991 c 1.466 0.926 2.712 2.167 3.645 3.629 Z M 21.316 5.55 l -2.698 4.034 c -0.808 -0.33 -1.69 -0.515 -2.617 -0.515 h -0.001 c -0.927 0 -1.809 0.185 -2.617 0.515 l -2.698 -4.034 c 1.597 -0.816 3.402 -1.279 5.315 -1.279 s 3.719 0.463 5.316 1.279 Z M 9.756 6.078 l 2.67 3.992 c -0.95 0.574 -1.748 1.367 -2.329 2.311 l -3.991 -2.669 c 0.934 -1.464 2.182 -2.707 3.65 -3.634 Z M 5.574 10.639 l 4.029 2.694 c -0.343 0.822 -0.533 1.722 -0.533 2.667 c 0 0.92 0.183 1.797 0.509 2.599 l -4.036 2.7 c -0.81 -1.593 -1.27 -3.393 -1.27 -5.299 c 0 -1.931 0.472 -3.753 1.303 -5.361 Z M 6.069 22.229 l 3.992 -2.669 c 0.576 0.959 1.377 1.766 2.331 2.35 l -2.669 3.99 c -1.473 -0.937 -2.724 -2.193 -3.654 -3.671 Z M 10.65 26.432 l 2.695 -4.03 c 0.818 0.34 1.713 0.529 2.654 0.529 c 0.001 0 0.001 0 0.001 0 c 0.941 0 1.838 -0.189 2.656 -0.529 l 2.695 4.03 c -1.606 0.827 -3.424 1.297 -5.351 1.297 s -3.745 -0.47 -5.35 -1.297 Z M 22.278 25.899 l -2.669 -3.991 c 0.952 -0.583 1.751 -1.387 2.327 -2.344 l 3.992 2.67 c -0.93 1.475 -2.179 2.729 -3.65 3.665 Z"></path></svg>
      </div>
      <div>
        <h3 class="text-[16px] text-[#222]">SUPPORT 24/7</h3>
        <p class="text-[13px] text-[#696969] leading-[24px]">Contact us 24 hours a day, 7 days a week</p>
      </div>
    </div>
    <div class="shipping">
      <div class="mr-[24px]">
        <svg viewBox="0 0 32 32" width="32" height="32"><path d="M 27.729 18.664 c 0 6.467 -5.261 11.729 -11.729 11.729 s -11.729 -5.261 -11.729 -11.729 c 0 -6.452 5.237 -11.703 11.684 -11.728 v 5.333 l 10.129 -5.865 l -10.129 -5.864 v 5.33 c -7.047 0.024 -12.751 5.741 -12.751 12.794 c 0 7.065 5.727 12.795 12.795 12.795 c 7.066 0 12.795 -5.73 12.795 -12.795 h -1.066 Z M 17.022 2.39 l 6.935 4.015 l -6.935 4.016 v -8.03 Z"></path></svg>
      </div>
      <div>
        <h3 class="text-[16px] text-[#222]">30 DAYS RETURN</h3>
        <p class="text-[13px] text-[#696969] leading-[24px]">Simply return it within 30 days for an exchange</p>
      </div>
    </div>
    <div class="shipping">
      <div class="mr-[24px]">
        <svg viewBox="0 0 27 32" width="27" height="32"><path d="M 13.333 2.667 c -7.36 0 -13.333 5.973 -13.333 13.333 s 5.973 13.333 13.333 13.333 c 7.36 0 13.333 -5.973 13.333 -13.333 s -5.973 -13.333 -13.333 -13.333 Z M 13.333 28.267 c -6.773 0 -12.267 -5.493 -12.267 -12.267 s 5.493 -12.267 12.267 -12.267 c 6.773 0 12.267 5.493 12.267 12.267 s -5.493 12.267 -12.267 12.267 Z"></path><path d="M 17.6 12.8 c 0 -2.347 -1.92 -4.267 -4.267 -4.267 s -4.267 1.92 -4.267 4.267 c 0 1.6 0.907 3.04 2.24 3.733 l -2.24 6.4 h 8.533 l -2.187 -6.4 c 1.28 -0.747 2.187 -2.133 2.187 -3.733 Z M 16.107 21.867 h -5.547 l 1.707 -4.96 l 0.32 -0.853 l -0.8 -0.427 c -1.013 -0.587 -1.653 -1.653 -1.653 -2.827 c 0 -1.76 1.44 -3.2 3.2 -3.2 s 3.2 1.44 3.2 3.2 c 0 1.173 -0.64 2.24 -1.653 2.773 l -0.8 0.427 l 0.267 0.853 l 1.76 5.013 Z"></path></svg>
      </div>
      <div>
        <h3 class="text-[16px] text-[#222]">100% PAYMENT SECURE</h3>
        <p class="text-[13px] text-[#696969] leading-[24px]">We ensure secure payment with PEV</p>
      </div>
    </div>
  </div>

  <svg focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" class="hidden">
    <symbol id="t4s-icon-btn" viewBox="0 0 14 10" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
            fill="currentColor"></path>
    </symbol>

    <symbol id="t4s-icon-loading" viewBox="0 0 100 100" fill="none">
      <path xmlns="http://www.w3.org/2000/svg" fill="none"
            d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z"
            stroke="currentColor" stroke-width="2" stroke-dasharray="205.271142578125 51.317785644531256">
        <animate attributeName="stroke-dashoffset" calcMode="linear" values="0;256.58892822265625"
                 keyTimes="0;1" dur="1" begin="0s" repeatCount="indefinite"></animate>
      </path>
    </symbol>
    <symbol id="t4s-icon-search" viewBox="0 0 18 19" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z"
            fill="currentColor"></path>
    </symbol>
    <symbol id="t4s-icon-close" class="icon icon-close" fill="none" viewBox="0 0 18 17">
      <path
          d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
          fill="currentColor">
      </path>
    </symbol>
    <symbol id="t4s-icon-atc">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    </symbol>
    <symbol id="t4s-icon-qv">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </symbol>
    <symbol id="t4s-icon-cp">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 3 21 3 21 8"></polyline>
        <line x1="4" y1="20" x2="21" y2="3"></line>
        <polyline points="21 16 21 21 16 21"></polyline>
        <line x1="15" y1="15" x2="21" y2="21"></line>
        <line x1="4" y1="4" x2="9" y2="9"></line>
      </svg>
    </symbol>
    <symbol id="t4s-icon-cp-added">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
           stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    </symbol>
    <symbol id="t4s-icon-wis">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
        </path>
      </svg>
    </symbol>
    <symbol id="t4s-icon-wis-added">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
           stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
        </path>
      </svg>
    </symbol>
    <symbol id="t4s-icon-wis-remove">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none"
           stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>
    </symbol>
    <symbol id="t4s-icon-external">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </symbol>
    <symbol id="t4s-icon-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
           class="feather feather-link-2">
        <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    </symbol>
    <symbol id="t4s-select-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 12">
        <polyline fill="none" stroke="currentColor" points="17 2 9.5 10 2 2" fill-rule="evenodd"
                  stroke-width="2" stroke-linecap="square"></polyline>
      </svg>
    </symbol>
  </svg>
</template>
<style lang="scss" scoped>
.scale-item-1 {
  transform: scale(1);
  transition: all 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }
}

.img-item {
  @apply w-[150px] h-[44px] bg-[#ffb6c1] cursor-pointer absolute bottom-[20px] left-[50%] -translate-x-[50%] flex justify-center items-center;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #222;
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;

  &:before,
  &:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 2px;
    background: #222;
  }
}

.section-des {
  display: block;
  color: #878787;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
}

.shipping {
  display: flex;

  &:hover {
    svg {
      animation: bounceIn .5s ease;
    }
  }
}
</style>
