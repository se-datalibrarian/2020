# Southeast Data Librarian Symposium 2020

Website for the 2020 Southeast Data Librarian Symposium (SEDLS). The SEDLS is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data.

This is a static site built with [Gridsome](https://gridsome.org/) and [Tailwind CSS](https://tailwindcss.com/)

## Development setup

Instructions for setting up a development environment to edit the SEDLS 2020 website on your own machine.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Clone the SEDLS 2020 Gridsome project

1. `git clone https://github.com/se-datalibrarian/2020.git` to clone the SEDLS 2020 Gridsome project
2. `cd 2020` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Start coding 🎉🙌

### 3. Learn more about the Gridsome and Tailwind CSS frameworks

1. Read the [Gridsome docs](https://gridsome.org/docs/)
2. Read the [Tailwind CSS docs](https://tailwindcss.com/docs/utility-first)

## Build local version

Instructions for building a local version of the SEDLS 2020 website on your own machine. This is useful for testing prior to deployment.

### 1. Run the build script

`gridsome build` to generate the website in the `dist` directory in your project folder

### 2. Test using a local server

1. `cd dist` to open the build folder
2. Start a local server in the folder (see [Running a local server with Python](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server))

## Deploy to GitHub pages

Instructions for deploying the website to GitHub pages. This project uses the `gh-pages` package to handle deployment. (see [Gridsome Docs](https://gridsome.org/docs/deploy-to-github/))

### 1. Setup the deployment location

*Note: this is already setup if deploying to <https://se-datalibrarian.github.io/2020/>*

Edit the `gridsome.config.js` file to match your site URL and path:

    ```bash
      siteUrl: 'https://<your-github-username>.github.io',
      pathPrefix: '/<your-gridsome-repo-name>',
    ```

### 2. Run the deployment script

1. `npm run deploy`
2. Navigate to the location of your site online: `https://<your-github-username>.github.io/<your-gridsome-repo-name>`
