<template>
  <div class="layout">
    <HeaderLayout />
    <div class="container mx-auto max-w-screen-md mt-24 px-3 sm:px-4 text-gray-800">
      <transition name="fade" appear>
        <main>
          <slot />
        </main>
      </transition>
      <FooterLayout />
    </div>
  </div>
</template>

<script>
import HeaderLayout from '~/layouts/Header.vue'
import FooterLayout from '~/layouts/Footer.vue'

export default {
  components: {
    HeaderLayout,
    FooterLayout
  }
}
</script>

<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background-color: #F7FAFC;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

.active--exact.active {
  color: #68D391;
}
</style>
