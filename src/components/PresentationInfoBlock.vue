<template>
<div>
  <h4 
    v-if="presentationInfo.type !== 'Break'"
    class="text-md mt-6 font-light text-gray-700"
  >
    {{ presentationInfo.startTime }}
  </h4>
  <h4 
    v-if="presentationInfo.type !== 'Break'"
    class="text-lg mt-1"
  >
    {{ presentationInfo.title }}
  </h4>
  <p 
    v-if="presentationInfo.presenters !== ''"
    class="text-md mt-1 font-light text-gray-700"
  >
    {{ presentationInfo.presenters }}
  </p>
  <a
    v-if="presentationInfo.YouTubeLink !== ''"
    class="link mt-2 block"
    v-bind:href="presentationInfo.YouTubeLink"
  >View recording on YouTube</a>
  <a
    v-if="!['Break'].includes(presentationInfo.type) && presentationInfo.materialsLink !== ''"
    class="link mt-2 block"
    v-bind:href="presentationInfo.materialsLink"
  >View presentation materials</a>
  <button
    v-on:click="showAbstract = !showAbstract"
    v-if="presentationInfo.abstract"
    class="abstract-toggle mt-2 flex flex-row"
    v-html="abstractToggleLanguage"
  ></button>
  <p v-show="presentationInfo.abstract && showAbstract" class="mt-1 text-md whitespace-pre-wrap overflow-hidden">{{ presentationInfo.abstract }}</p>
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
          <span class='text-indigo-500'>Abstract </span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 16' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather stroke-current text-indigo-500'>
            <polyline points='18 15 12 9 6 15'></polyline>
          </svg>`
      } else {
        return `
          <span class='text-indigo-500'>Abstract</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather stroke-current text-indigo-500"><polyline points="6 9 12 15 18 9"></polyline></svg>`
      }
    }
  }
}
</script>