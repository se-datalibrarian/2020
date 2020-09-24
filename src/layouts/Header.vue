<template>
  <header class="fixed top-0 w-screen h-16 flex flex-wrap items-center justify-between lg:justify-center pl-2 pr-6 mb-8 header bg-gray-800">
    <g-link class="flex items-center lg:mr-16" to="/" active-class="null">
      <LogoSymbol class="fill-current text-green-400 hidden md:inline-block h-4 mr-2 ml-4" aria-label="Home" />
      <LogoTriangle class="fill-current text-green-400 inline-block md:hidden h-12" aria-label="Home" />
      <span class="hidden md:inline text-gray-100">
        {{ $static.metadata.siteName }}
      </span>
    </g-link>
    <nav class="hidden sm:inline">
      <g-link
        v-for="page in sortedPageLinks" :key="page.path"
        class="text-gray-100 sm:ml-4 transition duration-200 ease-in-out hover:text-green-400"
        :to="page.path"
      >
        {{ formatPageLinks(page.path) }}
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
      <nav
        v-if="show"
        v-on-clickaway="away"
        class="mobile-nav absolute sm:hidden flex flex-col bg-gray-800 p-4 rounded-b-lg"
      >
        <g-link
          v-for="page in sortedPageLinks" :key="page.path"
          v-on:click="show = false"
          class="my-2 text-lg text-gray-100 transition duration-200 ease-in-out hover:text-green-400"
          :to="page.path"
        >
          {{ formatPageLinks(page.path) }}
        </g-link>
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
import { mixin as clickaway } from 'vue-clickaway'

export default {
  components: {
    LogoSymbol,
    LogoTriangle
  },

  mixins: [ clickaway ],

  data: function() {
    return {
      show: false
    }
  },

  computed: {
    sortedPageLinks() {
      const sortOrder = [
        'About', 'Code of Conduct', 'Program', 'Accessibility', 'Registration'
      ]
      const unsortedPageLinks = this.$static.allPage
      return this.$static.allPage.map(function(page) {
        const sortIndex = sortOrder.findIndex(sortPage =>
          sortPage.toLowerCase() ===
          page.path
            .split('/')[1]
            .split('-')
            .join(' ')
        )
        return unsortedPageLinks[sortIndex]
      })
    }
  },

  methods: {
    away: function() {
      this.show = false
    },

    formatPageLinks: function(page) {
      const lowerCasePage = page.split('/')[1].split('-')
      const upperCasePage = lowerCasePage.map(d =>
        !['of', 'to'].includes(d) ?
          d.charAt(0).toUpperCase() + d.slice(1) : d
      )
      return upperCasePage.join(" ")
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