<template>
  <Layout>
    <h1 class="text-3xl">Registration</h1>
    <p class="mt-4 italic">
      Registration for the 2020 Southeast Data Librarian Symposium has closed.
    </p>
    <p class="mt-4">
      Registered attendees will receive updates through email regarding access to sessions via Zoom and Discord and workshop registration.
    </p>
    <p class="mt-4">
      SEDLS 2020 will be held online via Zoom and Discord. Zoom Pro for secure discussions is provided by the University of North Carolina at Greensboro University Libraries. Registration will be capped at 250 participants.
    </p>
    <p class="mt-4">Registration management is provided by the Research Data Access &#38; Preservation Association.</p>
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