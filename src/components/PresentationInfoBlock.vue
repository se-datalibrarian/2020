<template>
<div>
  <h4 
    v-if="presentationInfo.type !== 'Break'"
    class="text-sm mt-4 font-hairline"
  >
    {{ presentationInfo.startTime }}
  </h4>
  <h4 
    v-if="presentationInfo.type !== 'Break'"
    class="text-md"
  >
    {{ presentationInfo.title }}
  </h4>
  <p class="text-sm font-hairline">{{ presentationInfo.presenters }}</p>
  <div
    v-on:click="showAbstract = !showAbstract"
    v-if="presentationInfo.abstract"
    class="abstract-toggle cursor-pointer flex flex-row align-middle"
    v-html="abstractToggleLanguage"
  ></div>
  <!-- <transition name="abstract-animation"> -->
    <p v-show="presentationInfo.abstract && showAbstract" class="mt-4 text-sm whitespace-pre-wrap overflow-hidden relative">{{ presentationInfo.abstract }}</p>
  <!-- </transition> -->
</div>
</template>

<script>
export default {
  name: "PresentationInfoBlock",

  props: {
    presentationInfo: Object
  },

  data: () => ({
    showAbstract: false,
  }),

  computed: {
    abstractToggleLanguage() {
      if (this.showAbstract) {
        return `
          <span class='dropdown-text text-indigo-600'>Hide abstract</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 16' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather stroke-current text-indigo-600'>
            <polyline points='18 15 12 9 6 15'></polyline>
          </svg>`
      } else {
        return `
          <span class='dropdown-text text-indigo-600'>Show abstract</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather stroke-current text-indigo-600"><polyline points="6 9 12 15 18 9"></polyline></svg>`
      }
    }
  }
}
</script>

<style>
.dropdown-text {
  width: 7rem;
}
</style>
