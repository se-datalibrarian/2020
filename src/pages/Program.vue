<template>
  <Layout>
    <h1 class="text-3xl">Program</h1>
    <CardAnnouncement>
      <p>
        Program information coming soon!
      </p>
      <p class="mt-2">
        The planning committee is currently accepting proposals.
        See <a class="link" href="https://se-datalibrarian.github.io/2019/program/">last year's program</a> for an example of past content.
      </p>

    <div class="w-full flex justify-center my-6">
      <a href="https://forms.gle/g2B583ZS1F2cTXtk9" target="_blank" rel="noopener">
        <ButtonDefault>Submit a proposal</ButtonDefault>
      </a>
    </div>
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