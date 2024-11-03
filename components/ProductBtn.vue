<script setup lang="ts">

</script>

<template>
  <div class="product-btn">
    <span class="mr-[5px]"><svg viewBox="0 0 24 24"><use xlink:href="#t4s-icon-atc"></use></svg></span>
    <span><slot></slot></span>
  </div>
</template>

<style lang="scss" scoped>
.product-btn {
  width: auto;
  min-width: 150px;
  padding: 0 15px;
  height: 40px;
  font-size: 14px;
  text-align: center;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 40px;
  border-radius: 40px;
  cursor: pointer;
  color: #ffb6c1;
  background-color: #fff;
  transition: all .25s ease;

  &:hover {
    color: #fff;
    background-color: #000;

    svg {
      animation: .6s ease-in-out infinite beat_heart;
    }
  }

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
}

@keyframes beat_heart {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
}

</style>
