<template>
  <header class="fixed z-0 top-0 w-screen h-16 flex flex-wrap items-center justify-between lg:justify-center pl-2 pr-6 mb-8 header bg-gray-800">
    <g-link class="flex items-center lg:mr-16" to="/" active-class="null">
      <LogoSymbol class="fill-current text-green-400 hidden md:inline-block h-4 mr-2 ml-4" aria-label="Home" />
      <LogoTriangle class="fill-current text-green-400 inline-block md:hidden h-12" aria-label="Home" />
      <span class="hidden md:inline text-gray-100">
        {{ $static.metadata.siteName }}
      </span>
    </g-link>
    <nav class="hidden sm:inline">
      <g-link
        v-for="page in $static.allPage" :key="page.path"
        class="text-gray-100 sm:ml-4 transition duration-200 ease-in-out hover:text-green-400"
        :to="page.path"
      >
        {{ page.pageLinkText }}
      </g-link>
    </nav>
    <button v-on:click="show = !show" class="relative inline sm:hidden w-12 h-12" aria-label="Toggle Menu">
      <transition name="fade">
        <svg v-if="!show" class="absolute top-0 left-0 text-green-400 w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </transition>
      <transition name="fade">
        <svg v-if="show" class="absolute top-0 left-0 text-green-400 w-12 h-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </transition>
    </button>
    <transition name="slide-down">
      <nav v-if="show" class="mobile-nav absolute sm:hidden flex flex-col bg-gray-800 p-4 rounded-b-lg">
        <g-link v-for="page in $static.allPage" :key="page.path" v-on:click="show = false" class="text-xl text-gray-100 transition duration-200 ease-in-out hover:text-green-400" :to="page.path">{{ page.pageLinkText }}</g-link>
      </nav>
    </transition>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  },
  allPage(filter: { path: { nin:["/404", "/"] } }) {
    path
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
  },

  data: function() {
    return {
      show: false
    }
  },

  methods: {
    sortPages: function() {
        const conductPage = this.$static.allPage.splice(1, 1)
        this.$static.allPage.splice(3, 0, conductPage[0])
        this.$static.allPage.forEach(d => d.pageLinkText = formatPageLinks(d.path))

        function formatPageLinks(page) {
          const lowerCasePage = page.split('/')[1]
          const capitalCasePage = lowerCasePage.charAt(0).toUpperCase() +
            lowerCasePage.slice(1)
          let stripDash = capitalCasePage.split('-')
          if (stripDash[2] === "conduct") {
            stripDash[2] = stripDash[2].charAt(0).toUpperCase() +
              stripDash[2].slice(1)
          }
          return stripDash.join(" ")
        }
    },
  },

  mounted() {
    if (this.$static.allPage[1].path === '/code-of-conduct/') {
      this.sortPages()
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-nav {
  top: 100%;
  right: 1.5rem;
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: all .5s;
}
.slide-down-enter, .slide-down-leave-to {
  transform: translateX(calc(100% + 1.5rem));
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>