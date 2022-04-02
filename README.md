<h1 align="center">
  Stella Kypriotis Fine Art
</h1>
<p align="center">
   2022 Stella Kypriotis Fine Art project.
</p>

<p align="center">
  <img alt="GitHub" src="https://img.shields.io/github/issues-pr/CodeforAustralia/council-emissions-calculator.svg">
  <img alt="GitHub" src="https://img.shields.io/github/commit-activity/m/CodeforAustralia/council-emissions-calculator.svg">
  <img alt="GitHub" src="https://img.shields.io/badge/all_contributors-9-blue.svg?style=flat-square">
</p>

<p align="center">
  <a href="#Project-Goals">Project Goals</a> •
  <a href="#Getting-Started">Getting Started</a> •
  <a href="#Learn-More-about-Development"> Development</a> •
  <a href="#Collaboration-Working-In-a-Forked-Repository">Collaboration </a>
</p>

## Project Goals

- Provide councils a tool to assess their impact on the environment and ...
- Provide councils with inspirations and next steps to have a more sustainable way of working.
- Provide councils with inspirations and next steps to engage communities in initiatives that are favorable for the environment.
- Provide a source of information that facilitates the decision process for councils to become more sustainable.
- to learn more about this project, check out our [project planning](https://docs.google.com/document/d/1h5r1AfbQC8Azy_cdGHGBGOJwSxSqvt0cHKd5MmSd7qo/edit#heading=h.fw4lq2wclkt9) and [trello project board.](https://trello.com/b/ZXaIkclp/civic-makers-2021-l-use-this-one)

## Getting Started

<details>
<summary> First, install dependencies using your preferred package manager... </summary>

```
npm install
# or
yarn install
```

Next, run the development server:

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

</details>

## Learn More about Development

<details>
<summary> 
To learn more about Next.js, take a look at the following resources...
</summary> 
     
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

</details>

## Dependencies used in this project

<details>
<summary> Dependencies </summary>
     
- Google Sheets as database
     
- Google sheets to process form responses and calculate emissions

- Chakra for UI framework

- Highcharts to build charts in report

- Vercel as hosting platform

</details>

## Collaboration: Working In a Forked Repository

### How to fetch upstream main/master

There are 2 options :

#### Option 1 : Using terminal

<details>
<summary> 
STEPS
</summary>
1. Checkout to main branch
2. `git branch` view list to confirm
3. `git remote add upstream (URL- copy the URL from Code for Australia CodeforAustralia/council-emissions-calculator-spike git hub)`

- Upstream is the name for the master git repo it can be reasonable any name.

4. `git fetch upstream`
5. `git merge upstream/main`
6. `git pull`
</details>

#### Option 2 : Using button in your main forked repo

<details>
<summary> 
STEPS
</summary>
(located above the code listing right top)

1. Click on `fetch upstream` button
2. Select `Fetch and merge` button
3. `git pull` at the local main branch

- Resolve any conflicts

4. `git status`
5. `git add .` or `git add (file/path name)`
6. `git commit -m “note”`
</details>

### To merge the changes to working branch

<details>
<summary> 
STEPS
</summary> 
     
1. `git checkout (branch name)`
2. `git merge main`
</details>

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->


<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Dependancy vulnerability configuration

package-lock.json

`https://docs.github.com/en/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates`

- Deploy to git hub

> 'npm run deploy'
