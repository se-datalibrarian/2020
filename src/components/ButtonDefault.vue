<template>
  <button class="py-2 px-4 text-center border-gray-800 bg-opacity-100 border-2 rounded-md text-gray-800 transition duration-200 ease-in-out hover:border-green-400 hover:text-green-400">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonDefault'
}
</script>