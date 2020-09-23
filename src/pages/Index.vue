<template>
  <Layout>
    <Logo class="mx-8 sm:mx-32 mb-4"></Logo>

    <h1 class="ml-8 sm:mx-32 text-2xl">Southeast Data Librarian Symposium 2020</h1>
    <h2 class="ml-8 sm:mx-32 text-xl">Online, October 7-9</h2>
    <p class="mt-4">
      The Southeast Data Librarian Symposium (SEDLS) is returning virtually in 2020! The program will consist of workshops, short presentations, and networking opportunities over three half-days, October 7-9.
    </p>
    <p class="mt-4">
      SEDLS is open to all who wish to attend, including students, data managers, and data scientists. General themes for SEDLS 2020 include:
    </p>
    <ul class="mt-4 ml-4 list-disc list-inside">
      <li>Research data management tools and methods</li>
      <li>Data analysis and data visualization tools and methods</li>
      <li>Data support for student research</li>
      <li>Addressing data literacy in the curriculum</li>
    </ul>
    <p class="mt-4">
      This website will be updated with the latest information as planning continues. You can reach out to <a title="Contact us via email" href="mailto:se.datalibrarian@gmail.com">se.datalibrarian@gmail.com</a> with any questions.
    </p>
  </Layout>
</template>

<script>
import Logo from '~/assets/logo-main.svg'

export default {
  components: {
    Logo
  },

  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
