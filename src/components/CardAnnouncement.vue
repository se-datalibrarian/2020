<template>
  <div class="md:flex align-middle justify-start w-11/12 sm:w-8/12 md:w-8/12 py-2 px-4 md:pl-0 md:pr-4 mx-auto my-6 bg-white rounded-lg text-gray-800 shadow-md">
    <div class="flex flex-col justify-center mt-1 mb-4 md:my-0 md:mr-4 pb-2 md:pb-0 border-b-2 md:border-b-0 md:border-r-2 border-green-400">
      <svg class="h-12 w-12 md:h-16 md:w-16 md:mx-2 stroke-1 stroke-current text-green-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  title="Announcement Icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardAnnouncement'
}
</script>