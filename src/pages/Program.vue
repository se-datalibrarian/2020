<template>
  <Layout>
    <h1 class="text-3xl">Program</h1>
    <CardAnnouncement>
      <p>
        Program information coming soon!
      </p>
      <p class="mt-2">
        See <a class="link" href="https://se-datalibrarian.github.io/2019/program/">last year's program</a> for reference.
      </p>
    </CardAnnouncement>
  </Layout>
</template>

<script>
import CardAnnouncement from '~/components/CardAnnouncement.vue'
export default {
  components: {
    CardAnnouncement
  },
  metaInfo: {
    title: 'Program'
  }
}
</script>

<style>

</style>