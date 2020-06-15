<template>
  <div class="layout">
    <header class="fixed top-0 w-screen h-16 flex flex-row flex-wrap items-center justify-start md:justify-between px-2 md:px-4 mb-8 header bg-gray-800">
      <g-link class="flex items-center" to="/" active-class="null">
        <LogoSymbol class="fill-current text-green-400 hidden md:inline-block h-4 mr-2" />
        <LogoTriangle class="fill-current text-green-400 inline-block md:hidden h-12" />
        <span class="hidden md:inline text-gray-100">{{ $static.metadata.siteName }}</span>
      </g-link>
      <nav>
        <g-link class="text-gray-100 ml-4 transition duration-200 ease-in-out hover:text-green-400" to="/">Home</g-link>
        <g-link class="text-gray-100 ml-4 transition duration-200 ease-in-out hover:text-green-400" to="/about/">About</g-link>
      </nav>
    </header>
    <div class="container mx-auto max-w-screen-md mt-24 px-2 sm:px-4 text-gray-800">
      <transition name="fade" appear>
        <main>
          <slot />
        </main>
      </transition>
      <footer class="mt-4 py-4 border-t-2 border-green-400">
        <div class="flex items-center">
          <span>Connect with us:</span>
          <a class="ml-4" title="Contact us via email" href="mailto:se.datalibrarian@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-gray-800 stroke-1-5 md:stroke-2 h-8 md:h-6 transition duration-200 ease-in-out hover:text-green-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
          <a class="ml-4" title="Follow us on twitter" href="https://twitter.com/SEDataLibrarian" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-gray-800 stroke-1-5 md:stroke-2 h-8 md:h-6 transition duration-200 ease-in-out hover:text-green-400"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a class="ml-4" title="Connect with us on GitHub" href="https://github.com/se-datalibrarian" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-gray-800 stroke-1-5 md:stroke-2 h-8 md:h-6 transition duration-200 ease-in-out hover:text-green-400"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import LogoSymbol from '~/assets/logo-wide.svg'
  import LogoTriangle from '~/assets/logo-triangle.svg'
  export default {
    components: {
      LogoSymbol,
      LogoTriangle
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

/* .layout {
} */

/* .header {
} */
</style>
