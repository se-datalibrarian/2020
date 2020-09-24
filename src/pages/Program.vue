<template>
  <Layout>
    <h1 class="text-3xl">Program</h1>
    <p class="mt-4">
      Sessions will be held online through Zoom and Discord. Information and instructions to join sessions will be sent to registered attendees via email in the week before the symposium, along with links to join workshops for workshop registrants.
    </p>
    <p class='mt-4'>
      Attendees are expected to follow the symposium <g-link class="link" to="/code-of-conduct" active-class="null">Code of Conduct</g-link> and to be aware of the planning committee's <g-link class="link" to="/accessibility" active-class="null">Commitment to Accessibility</g-link>.
    </p>
    <p class="mt-4 font-bold">All listed times are in Eastern Time (EDT).</p>
    <div class="mt-4 mb-8" v-for="day in program" :key="day.day">
      <h2 class="mt-4 pl-3 p-2 bg-gray-800 text-2xl text-green-400">{{ day.day }}</h2>
      <div 
        class="mt-0 py-2 alternate-background border-b-2 border-solid border-gray-300 md:flex md:flex-row"
        v-for="session in day.sessions"
        :key="session.id"
      >
        <div 
          class="px-3 md:w-1/6"
          v-bind:class="{'md-border-r':(session.sessionType !== 'Break' )}"
        >
          <h3 class="text-xl text-pink-500">
            {{ session.sessionType }}
          </h3>
          <h3 
            class="mb-1 text-md font-light text-gray-700 md:border-transparent"
            v-bind:class="{'sm-border-b':(session.sessionType !== 'Break' )}"
          >
            {{ session.sessionStartTime }} - {{ session.sessionEndTime}}
          </h3>
        </div>
        <div class="md:-mt-5 px-3 md:w-5/6">
          <PresentationInfoBlock 
            v-for="presentation in session.presentations"
            :key="presentation.id"
            class=""
            v-bind:presentationInfo="presentation"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allProgram(
    # filter: {dayNumber: {eq: "1"}},
    sortBy:"startTimeEDT", order:ASC
  ) {
    edges {
      node {
        id
        day
        session
        lengthMin
        startTimeEDT
        endTimeEDT
        type
        title
        presenters
        abstract
      }
    }
  }
}
</page-query>

<script>
// Scripts
import { groups } from 'd3-array'

// Components
import PresentationInfoBlock from '~/components/PresentationInfoBlock.vue'

export default {
  components: {
    PresentationInfoBlock
  },

  metaInfo: {
    title: 'Program'
  },

  data: () => ({
    program: {},
    showAbstract: true
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
              sessionStartTime: session[1][0].startTimeEDT,
              sessionEndTime: session[1][session[1].length - 1].endTimeEDT,
              presentations: session[1].map(function(d, i) {
                return {
                  id: i,
                  title: d.title,
                  presenters: d.presenters,
                  abstract: d.abstract,
                  startTime: d.startTimeEDT,
                  presentationLength: +d.lengthMin,
                  type: d.type
                }
              })
            }
          })
        }
      })
    }
  },

  mounted() {
    this.formatProgramData()
  }
}
</script>

<style lang="scss">
.alternate-background{
  &:nth-child(even) {
    background-color: #EDF2F7;
  }
}

.md-border-r {
  border-right-width: 0;

  @media (min-width: 768px) {
    border-right-style: solid;
    border-right-color: #F687B3;
    border-right-width: 2px;
  }
}

.sm-border-b {
  border-bottom-style: solid;
  border-bottom-color: #F687B3;
  border-bottom-width: 2px;

  @media (min-width: 768px) {
    border-bottom-width: 0;
  }
}
</style>