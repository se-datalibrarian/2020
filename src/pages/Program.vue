<template>
  <Layout>
    <h1 class="text-3xl">Program</h1>
    <CardAnnouncement>
      <p class="text-lg">
        Program information coming soon!
      </p>
      <p class="mt-2">
        The SEDLS 2020 call for proposals has closed.
      </p>
      <p class="mt-2">
        See <a class="link" href="https://se-datalibrarian.github.io/2019/program/">last year's program</a> for an example of past content.
      </p>
      <p class="mt-2">
      </p>
    </CardAnnouncement>
  </Layout>
</template>

<script>
import ButtonDefault from '~/components/ButtonDefault.vue'
import CardAnnouncement from '~/components/CardAnnouncement.vue'
export default {
  components: {
    ButtonDefault,
    CardAnnouncement
  },
  metaInfo: {
    title: 'Program'
  }
}
</script>

<style>

</style>