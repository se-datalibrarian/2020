<template>
  <Layout>
    <h1 class="text-3xl">Program</h1>
    <div class="mt-4 mb-8" v-for="day in program" :key="day.day">
      <p class="mt-4">
        All sessions will be held online via Zoom and Discord.
      </p>
      <h2 class="mt-4 border-b-2 border-solid border-gray-800 text-2xl text-green-500">{{ day.day }}</h2>
      <div 
        class="mt-0 px-4 py-2 alternate-background"
        v-for="session in day.sessions"
        :key="session.id"
      >
        <h3 class="text-lg">
          {{ session.sessionType }} 
        </h3>
        <h3 class="mb-1 text-sm font-hairline">
          {{ session.sessionStartTime }} - {{ session.sessionEndTime}}
        </h3>
        <div 
          v-for="presentation in session.presentations"
          :key="presentation.id"
        >
          <h4 
            v-if="presentation.type !== 'Break'"
            class="text-sm mt-4 font-hairline"
          >{{ presentation.startTime }}
          </h4>
          <h4 
            v-if="presentation.type !== 'Break'"
            class="text-md"
          >{{ presentation.title }}
          </h4>
          <p class="text-sm text-gray-700">{{ presentation.presenters }}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allProgram(
    # filter: {dayNumber: {eq: "1"}},
    sortBy:"startTimeEST", order:ASC
  ) {
    edges {
      node {
        id
        day
        session
        lengthMin
        startTimeEST
        endTimeEST
        type
        title
        presenters
      }
    }
  }
}
</page-query>

<script>
// Scripts
import { groups } from 'd3-array'

// Components
import ButtonDefault from '~/components/ButtonDefault.vue'
import CardAnnouncement from '~/components/CardAnnouncement.vue'

export default {
  components: {
    ButtonDefault,
    CardAnnouncement
  },

  metaInfo: {
    title: 'Program'
  },

  data: () => ({
    program: {}
  }),

  methods: {
    formatProgramData: function() {
      function groupBy(objectArray, prop) {
        return objectArray.reduce(function (acc, obj) {
          const currentPropVal = obj.node[prop]
          if (!acc.some(element => element[prop] === currentPropVal)) {
            acc.push({ [prop]: currentPropVal })
          }
          return acc
        }, [])
      }
      const unformattedData = this.$page.allProgram.edges.map(d => d.node)

      const d3Groups = groups(unformattedData, d => d.day, d => d.session, d => d.type)

      this.program = d3Groups.map(function(d) {
        return {
          day: d[0],
          sessions: d[1].map(function(d, i) {
            const session = d[1][0]
            return {
              id: i,
              sessionType: session[0],
              sessionStartTime: session[1][0].startTimeEST,
              sessionEndTime: session[1][session[1].length - 1].endTimeEST,
              presentations: session[1].map(function(d, i) {
                return {
                  id: i,
                  title: d.title,
                  presenters: d.presenters,
                  startTime: d.startTimeEST,
                  presentationLength: +d.lengthMin,
                  type: d.type
                }
              })
            }
          })
        }
      })

      console.log(this.program)
    }
  },

  mounted() {
    this.formatProgramData()
  }
}
</script>

<style lang="scss">
.alternate-background{
  &:nth-child(odd) {
    background-color: #EDF2F7;
  }
}
</style>