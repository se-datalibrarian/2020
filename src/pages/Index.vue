<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <Logo class="mx-8 sm:mx-32 mb-4"></Logo>

    <h1 class="ml-8 sm:mx-32 text-2xl">Southeast Data Librarian Symposium 2020</h1>
    <h2 class="ml-8 sm:mx-32 text-xl">Online, October 7-9</h2>
    <p class="mt-4">
      The Southeast Data Librarian Symposium (SEDLS) is returing virtually in 2020! The program will consist of workshops, short presentations, and networking opportunities over three half-days, October 7-9.
    </p>
    <p class="mt-4">
      SEDLS is open to all who wish to attend, including students, data managers, and data scientists. The planning committee is accepting proposals through Friday, July 24. Based on community feedback, topics of particular interest this year include:
    </p>
    <ul class="mt-4 ml-4 list-disc list-inside">
      <li>Using available tools for research data management</li>
      <li>Using data analysis and data visualization tools</li>
      <li>Data support for undergraduate research</li>
      <li>Addressing data literacy in the curriculum</li>
    </ul>
    <div class="w-full flex justify-center my-6">
      <a href="https://forms.gle/g2B583ZS1F2cTXtk9" target="_blank" rel="noopener">
        <button class="py-2 px-4 text-center border-gray-800 bg-gray-100 border-2 rounded-md text-gray-800 transition duration-200 ease-in-out hover:border-green-400 hover:text-green-400">Submit a proposal</button>
      </a>
    </div>
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
