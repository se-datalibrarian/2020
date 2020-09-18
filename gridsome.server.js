// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const {readFileSync} = require('fs');
const parse = require('csv-parse/lib/sync');

module.exports = function (api) {
  api.loadSource(async (actions) => {
    const planningCommitteeFile = readFileSync('./src/data/planningCommittee.csv', 'utf8');

    const programFile = readFileSync('./src/data/program.csv', 'utf8');

    const PlanningCommittee = parse(planningCommitteeFile, {
      columns: true,
      skip_empty_lines: true,
    });

    const Program = parse(programFile, {
      columns: true,
      skip_empty_lines: true,
    });

    const planningCommitteeCollection = actions.addCollection({
      typeName: 'PlanningCommittee',
    });

    const programCollection = actions.addCollection({
      typeName: 'Program',
    });

    for (const member of PlanningCommittee) {
      planningCommitteeCollection.addNode(member);
    }

    for (const event of Program) {
      programCollection.addNode(event);
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
