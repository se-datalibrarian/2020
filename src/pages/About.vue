<template>
  <Layout>
    <h1 class="text-3xl">About us</h1>
    <p class="mt-4">
      The Southeast Data Librarian Symposium is intended to provide an opportunity for librarians and other research data specialists to explore developments in the field of data librarianship, including the management and sharing of research data.
    </p>
    <p class="mt-4">
      In addition to learning about new work in the field, attendees will have the opportunity to network and build partnerships with regional colleagues. It is open to all who wish to attend, including students, data managers, and data scientists.
    </p>
    <h2 class="text-2xl mt-4">Program Planning</h2>
    <p class="mt-4">
      The symposium is organized by a volunteer committee of librarians working in the field of data librarianship. Symposium themes are based on responses from an interest survey provided to previous SEDLS attendees and relevant data librarianship topics identified by the planning committee.
    </p>
    <p class="mt-4">
      The program is developed based on selected proposals submitted by the community. All proposal abstracts are peer reviewed by the planning committee under a single-blind review protocol blind to author and institution.
    </p>
    <h2 class="text-2xl mt-4">Planning committee</h2>
    <div class="container sm:w-11/12 mx-auto flex flex-wrap justify-around">
      <div class="mt-4 w-full sm:w-5/12" v-for="member of $static.allPlanningCommittee.edges" :key="member.node.id">
        <h3>{{ member.node.firstName }} {{ member.node.lastName }}</h3>
        <h4 class="text-md font-light">{{ member.node.institution }}</h4>
      </div>
      <div class="mt-4 hidden sm:inline-block sm:w-5/12"></div>
    </div>
    <h2 class="text-2xl mt-4">Sponsors</h2>
    <div class="mt-4 flex flex-row flex-wrap justify-evenly">
      <g-image class="m-4 object-contain" src="~/assets/RDAP_Logo_Color.png" width="250px" alt="RDAP logo"/>
      <g-image class="m-4 object-contain" src="~/assets/uncgreensboro_LIB_v_3-color.png" width="250px" alt="UNCG Libraries logo"/>
    </div>
  </Layout>
</template>

<static-query>
query {
  allPlanningCommittee(sortBy:"lastName", order:ASC) {
    edges {
      node {
        firstName
        lastName
        institution
      }
    }
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>
