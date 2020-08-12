<template>
  <Layout>
    <h1 class="text-3xl">Registration</h1>
    <p class="mt-4 text-lg">
      Registration is now open for SEDLS 2020!
    </p>
    <div class="w-full flex justify-center my-6">
      <a href="https://rdaapai18.wildapricot.org/event-3856493" target="_blank" rel="noopener">
        <ButtonDefault>Register now</ButtonDefault>
      </a>
    </div>
    <p class="mt-4">
      SEDLS 2020 will be held online via Zoom and Discord. Zoom Pro for secure discussions is provided by the University of North Carolina at Greensboro University Libraries. Registration will be capped at 250 participants.
    </p>
  </Layout>
</template>

<script>
import ButtonDefault from '~/components/ButtonDefault.vue'
import CardAnnouncement from '~/components/CardAnnouncement.vue'
export default {
  components: {
    CardAnnouncement,
    ButtonDefault
  },
  metaInfo: {
    title: 'Registration'
  }
}
</script>

<style>

</style>