=== 101-angular  [last commit (committer): 2024-12-08]
# 101Angular
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.2.
## Development server
To start a local development server, run:
```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
## Code scaffolding
Angular CLI includes powerful code scaffolding tools. To generate a new component, run:
```bash
ng generate component component-name
```
For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:
```bash
ng generate --help
```
## Building
PKG: 101-angular |  | deps: @angular/animations,@angular/common,@angular/compiler,@angular/core,@angular/forms,@angular/platform-browser,@angular/platform-browser-dynamic,@angular/router,rxjs,tslib,zone.js
=== 101-dsa  [last commit (committer): 2026-09-30]
(no README)
=== 101-mfe  [last commit (committer): 2026-06-29]
## My experiments with Micro Front-end (MFE) architecture
Random stuff related to micro front-end architecture with Webpack's Module Federation plugin
### Gotchas
- Element "id" (in host/container's index.html) cannot be the same as the remote app's "name" (in remote's webpack config)
[Error: `SES_UNHANDLED_REJECTION: TypeError: fn is not a function while loading ./output from webpack/container/reference/pokedex`]
  - This happens because of a **variable name conflict**. The browser creates global variables with the same name as *element IDs* (this "feature" has nothing to do with webpack at all). On the other 
- Navigate to /profile/settings. Then click on the "Profile" link from the container app. The browser still renders "Profile settings" instead of "This is your profile".
---
Original document: https://github.com/gdebojyoti/101-mfe-webpack
=== 101-mfe-webpack  [last commit (committer): 2025-01-31]
## My experiments with Micro Front-end (MFE) architecture
Random stuff related to micro front-end architecture with Webpack's Module Federation plugin
### Gotchas
- Element "id" (in host/container's index.html) cannot be the same as the remote app's "name" (in remote's webpack config)
[Error: `SES_UNHANDLED_REJECTION: TypeError: fn is not a function while loading ./output from webpack/container/reference/ttt`]
=== 101-node  [last commit (committer): 2026-09-23]
(no README)
PKG: undefined |  | deps: 
=== 101-react-parcel  [last commit (committer): 2024-12-13]
(no README)
PKG: 101-react-parcel |  | deps: react,react-dom,react-router
=== 101-react-state-management  [last commit (committer): 2025-02-16]
# 101 Series: React state management
Experiments with different state management systems in React
---
**List**
- [ ] Redux toolkit
- [ ] Jotai
- [ ] Zustand
- [ ] Context (not a state management library per se)
=== 101-react-webpack  [last commit (committer): 2025-02-05]
# 101 Series: React Webpack - 2025 Edition
##### Implemented
- [x] **SSR** (server-side rendered) web application using **React 19**, **Webpack 5** and **Express**
- [x] Support for multiple SSR routes / pages
- [x] **Linaria** (CSS-in-JS library) for styles
##### Pending
- [ ] **MFE** (micro-frontend architecture) using Webpack's **module federation** plugin
- [ ] Enable **atomic CSS** in Linaria
- [ ] **Minify images** at build time
- [ ] Deploy assets (JS / CSS / images / fonts) to **S3**
- [ ] **Separate builds** for mobile & desktop
- [ ] **Custom Webpack plugin** to support "global" variables
- [ ] State management library (**redux** may be?)
- [ ] A/B testing using **cookies** on the server
- [ ] Unit testing using **Jest**
- [ ] Auth
- [ ] Accessibility
- [ ] Localization using **React i18n**
PKG: 101-react-webpack |  | deps: @linaria/core,@linaria/react,express,react,react-dom,react-router
=== 101-ts  [last commit (committer): 2026-06-02]
Embarking on the path of mastering TypeScript. 🤪
## Important topics
* What is the point of void (especially in function return types)? void vs undefined
  * 19 function types & callbacks
* any vs unknown
  * 20 unknown type
* check for real scenarios where `never` should be used
* type vs interface vs abstract class
  * 17 using interfaces with classes
  * 21 interfaces as function types
* `readonly` attribute on interface vs that on implementing class
  * 17 using interfaces with classes
PKG: 101-ts |  | deps: 
=== CS2Mod  [last commit (committer): 2024-07-21]
# CS2Mod
=== boilerplate-react-vite  [last commit (committer): 2025-02-04]
# Boilerplate: React + Vite
**Get up & running with your env *fast*!**
The base template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. This repo contains the following updates on top of it -
- [x] React & ReactDOM updated to v19
- [x] React Router v7 added to support pages
>Currently, two official plugins are available:
>
>- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
>- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
## Steps
* `git clone https://github.com/gdebojyoti/boilerplate-react-vite`
* `cd boilerplate-react-vite`
* `npm i`
* `npm run dev`
PKG: vite-react |  | deps: react,react-dom,react-router
=== bricklink-price-finder-firefox-extension  [last commit (committer): 2024-12-11]
# BrickLink Price Finder 🧱💰🔍
###### A browser extension for Mozilla Firefox 🦊
This is my first attempt at creating a browser extension. Its purpose is to let you automate the process of going through multiple BrickLink product URLs and fetching the best price of each item. 😍
I don't think such an extension already exists. 🤞🏼
But hey - I really wanted to learn how to build a browser extension, and I could not think of a better way to get started. 🤣
This extension will work on Mozilla Firefox only for now (Firefox FTW! 🤘🏼). I am not sure whether I will (read: "want to") build one for Chrome in the future. 🤷🏼‍♂️
Cheers! 🍻
---
**Disclaimer:**
**THIS EXTENSION IS STILL IN BETA; CERTAIN FEATURES MIGHT NOT WORK AS EXPECTED. ⚒️**
If you encounter a bug (or have a feature request 😊), please raise an "issue" in this GitHub repo itself.
Alternatively, you can reach out to me at **bpf [at] debojyotighosh [dot] com**.
=== calcul8  [last commit (committer): 2023-12-19]
# Welcome to Project CALCUL8
The all-in-one destination for making informed choices and planning your financial future effortlessly. Get accurate insights for smarter money management.
URL: https://calcul8.in
PKG: calcul8 |  | deps: @vercel/speed-insights,next,react,react-dom
=== charmander  [last commit (committer): 2020-04-27]
# Project Charmander
The #1 Card Game Web App
### Upcoming features
* [ ] Revamp UI & UX; animations
* [ ] Sound
* [ ] Timer
* [ ] Settings screen (change name)
* [ ] Prevent screen lock (NoSleep.js)
* [ ] Host settings (game config; kick player from match)
* [ ] FB, Google Login; invites
* [ ] Emoji, chat, taunts
* [ ] Leaderboard
* [ ] New cards, leagues
* [ ] Virtual currency, cosmetics, themes
* [ ] FB & Google Play achievements
* [ ] AI; Single player
* [ ] PWA; Offline capabilities
* [ ] Facebook & Play Store upload
PKG: charmander |  | deps: react,react-dom,react-redux,react-router-dom,redux,redux-thunk,socket.io-client
=== charmeleon  [last commit (committer): 2020-04-25]
(no README)
PKG: charmeleon |  | deps: esm,express,mongodb,nodemon,socket.io
=== chat-gpt-bot  [last commit (committer): 2023-04-11]
# Chat GPT Bot - using Node.js example app
This app is a work-in-progress and is built on top of the example pet name generator app used in the OpenAI API [quickstart tutorial](https://platform.openai.com/docs/quickstart). It uses the [Next.js
## Setup
1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)
2. Clone this repository
   ```
   git clone https://github.com/gdebojyoti/chat-gpt-bot
   ```
3. Navigate into the project directory
   ```
   cd chat-gpt-bot
   ```
4. Install the requirements
   ```
   npm i
   ```
5. Make a copy of the example environment variables file
   On Linux systems: 
PKG: openai-quickstart-node |  | deps: next,openai,react,react-dom
=== css-reset  [last commit (committer): 2016-02-22]
# css-reset
Resetting CSS styles
=== css-stopwatch  [last commit (committer): ]
(no README)
=== ext-chrome-bricklink-price-finder  [last commit (committer): 2025-11-15]
(no README)
=== fantasy-football-wc26  [last commit (committer): 2026-06-12]
# Welcome to React Router!
A modern, production-ready template for building full-stack React applications using React Router.
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)
## Features
- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)
## Getting Started
### Installation
Install the dependencies:
```bash
npm install
```
### Development
PKG: fantasy-football-wc26 |  | deps: @react-router/node,@react-router/serve,isbot,react,react-dom,react-router
=== flappy-bird  [last commit (committer): 2019-04-06]
(no README)
=== gdebojyoti  [last commit (committer): 2022-02-04]
![Debojyoti Ghosh's GitHub Stats](https://github-readme-stats.vercel.app/api?username=gdebojyoti&show_icons=true)
### Hi there 👋
<!-- ![Your Repository's Stats](https://github-readme-stats.vercel.app/api/top-langs/?username=gdebojyoti&theme=blue-green) -->
<!-- #### Hi there 👋 Here is a random joke that'll make you laugh! 😂
![Jokes Card](https://readme-jokes.vercel.app/api) -->
<!--
**gdebojyoti/gdebojyoti** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.
Here are some ideas to get you started:
- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
=== genshin-db  [last commit (committer): 2021-11-28]
(no README)
PKG: genshin-db |  | deps: @emotion/react,express,react,react-dom,react-helmet,react-router-dom
=== geralt-shopify  [last commit (committer): 2023-09-03]
# Geralt Shopify Theme
An upcoming theme for, well, Shopify!
Base project - https://github.com/polidario/Elizabeth_Clean
Tech stack - Liquid, Scss, AlpineJS
## Setup
* Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) on your system
* Run `npm i`
* Run `npm start`
## Troubleshooting
* ```The compiler failed to generate an executable file. (RuntimeError) You have to install development tools first```
If you are on Windows, try installing "Ruby+Devkit".
PKG: geralt-shopify | Base project - https://github.com/polidario/Elizabeth_Clean | deps: 
=== goodreads-rating-compiler-firefox-extension  [last commit (committer): 2024-12-31]
# GoodReads Rating Compiler
###### A browser extension for Mozilla Firefox 🦊
{TBD}
---
Disclaimer:
THIS EXTENSION IS FOR MY PERSONAL USE; USE IT AT YOUR OWN RISK. 🔴
=== internal-apis  [last commit (committer): 2023-04-08]
(no README)
PKG: internal-apis | APIs for my personal projects | deps: @google-cloud/local-auth,express,googleapis
=== interview-fe  [last commit (committer): 2026-07-14]
# Welcome to React Router!
A modern, production-ready template for building full-stack React applications using React Router.
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)
## Features
- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)
## Getting Started
### Installation
Install the dependencies:
```bash
npm install
```
### Development
PKG: interview-fe |  | deps: @react-router/node,@react-router/serve,isbot,react,react-dom,react-router
=== java-api-test  [last commit (committer): 2024-08-20]
(no README)
=== lg-remote-be  [last commit (committer): 2024-07-05]
(no README)
PKG: lg-remote |  | deps: bonjour,express,lgtv2,ping
=== linted  [last commit (committer): 2026-09-29]
# Linted
A modern resume builder app
PKG: linted |  | deps: @base-ui/react,class-variance-authority,cn,lucide-react,next,react,react-dom,shadcn,tw-animate-css
=== ludo  [last commit (committer): 2019-09-14]
## Discontinued!
This repository is no longer maintained. It exists only for reference, and will be deleted in the future.
The project is continued in a different repository - https://github.com/gdebojyoti/ludo-pikachu
PKG: ludo | Ludo - a PWA | deps: auto-bind,react,react-dom,react-redux,react-router-dom,redux,redux-thunk
=== ludo-blastoise  [last commit (committer): 2019-09-21]
# Ludo Blastoise
Backend for [Ludo Pikachu](https://github.com/gdebojyoti/ludo-pikachu). Enables multiplayer using Socket IO.
#### Disclaimer
I don't own Pikachu or Blastoise. They are just names of these Git repositories. Please don't sue me.
PKG: ludo-blastoise |  | deps: express,mongodb,socket.io
=== ludo-pikachu  [last commit (committer): 2019-09-22]
# Ludo Pikachu
Frontend repo for a ludo game (PWA). Tech stack includes React JS.
You can find the backend here - [Ludo Blastoise](https://github.com/gdebojyoti/ludo-blastoise/).
## Please keep the following in mind.
- The host can choose any color; other players (who join the match) can choose any of the remaining colors
- Player on **red** goes _first_
- Order of turn: **red**, **blue**, **yellow**, **green**
## Features / Roadmap
- [x] Basic game is ready
- [x] Basic features: Start screen (new game); player name; color choice; invite others
- [ ] Better UI (coins in cells; prevent invalid selections; dice rolls; responsive; fit for mobile devices) & sounds
- [ ] Better UX (resume playing; multiple games simultaneously)
- [ ] Facebook login
- [ ] Scores & Leaderboard
- [ ] Chat
- [ ] Emojis & themes
- [ ] PWA; offline multiplayer (locally)
- [ ] Create bot; enable single player (during offline play)
PKG: ludo | Ludo - a PWA | deps: react,react-dom,react-redux,react-router-dom,redux,redux-thunk,socket.io-client
=== ludo-pikachu-v2  [last commit (committer): 2023-01-15]
# Ludo Pikachu (2023)
Frontend repo for a ludo game. Tech stack includes React 18.
This is a newer version of the old app (https://github.com/gdebojyoti/ludo-pikachu).
PKG: ludo-pikachu-v2 | Ludo web app (2023) | deps: @linaria/core,@linaria/react,react,react-dom
=== main-site  [last commit (committer): 2026-09-28]
## Requirements
- [x] VS Code look-alike
- [x] Themes & theme switcher
- [x] Middle click closes files
- [x] Option to pin open files; pinned files will re-open on page refresh (use local storage; do consider cookies though - [ ] will help with SSR)
- [x] "Home" will remain pinned by default; unpin will be disabled
- [x] Right click context menu on file titles -> close, pin
- [ ] Tooltip at bottom right will have a link to "contact" file
- [x] Terminal
  - [x] most commands will return a "currently disabled" error
  - [x] some commands will have pre-defined results
    - [x] whoami => ~i am spiderman~ (strikethrough) currently disabled
      - [x] this will be shown only once
  - [x] maintain a counter; when it exceeds 10 (for example), do rickroll (line by line). this will happen only once
  - [x] on page refresh, all counters get reset (i.e., no data persistence)
  - [x] Ctrl + ~ should toggle the terminal
- [x] "Files"
  - Home (tsx)
PKG: main-site |  | deps: bowser,lucide-react,next,react,react-dom
=== mini-apps  [last commit (committer): 2026-07-13]
List of mini apps -
- [ ] OTP input
- [ ] Gmail "to" field
PKG: mini-apps |  | deps: react,react-dom
=== project-almond  [last commit (committer): 2024-10-19]
# Welcome to your Expo app 👋
This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).
## Get started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the app
   ```bash
    npx expo start
   ```
In the output, you'll find options to open the app in a
- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).
## Get a fresh project
PKG: project-almond |  | deps: @expo/vector-icons,@react-navigation/native,expo,expo-constants,expo-font,expo-linking,expo-router,expo-splash-screen,expo-status-bar,expo-system-ui,expo-web-browser,react
=== project-pipes  [last commit (committer): 2024-06-08]
## Project Pipes
Waiting for ChatGPT to write a description
### Scope
- [x] Next.js app setup
- [x] Explore AWS EC2. Host the app on EC2 instance and access it using IPv4 address & port
- [x] Setup nginx on EC2. Access the app from anywhere using a sub-domain (https://pipes.debojyotighosh.com)
- [ ] Create a CI / CD pipeline using Jenkins for deploying the Next.js app
- [ ] Auto deploy `master` branch (on branch update)
- [ ] Explore PM2. Start the Next.js app using PM2 and manage instances
- [ ] Explore Docker. Deploy the app using Docker
- [ ] Monitor error logs using New Relic & ELK
- [ ] Explore K8s
PKG: project-pipes |  | deps: next,react,react-dom
=== project-tiles  [last commit (committer): 2024-03-30]
# What is Project Tiles?
**Project Tiles** is an immersive web-based game. It offers a tranquil and engaging puzzle experience filled with vibrant colors. Whether you are on the go with your mobile phone or at home on your co
## List of features
- [X] Basic game
- [x] Panning scene
- [x] Connect multiple puzzles
- [x] Home screen & Menu
- [x] Tutorial
- [x] Analytics
- [ ] Scores
- [ ] Settings: Themes & Music
- [ ] User accounts
- [ ] Leaderboards
- [ ] User generated puzzles
- [ ] Zoom scene
PKG: project-tiles | Project Tiles is an immersive web-based game that offers a tranquil and engaging puzzle experience filled with vibrant colors | deps: 
=== projekt  [last commit (committer): 2024-12-31]
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
## Getting Started
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Verce
## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
PKG: projekt |  | deps: next,react,react-dom
=== r-Cayde  [last commit (committer): 2020-12-05]
(no README)
PKG: r-Cayde |  | deps: discord.js
=== react-experiments  [last commit (committer): 2023-04-08]
# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.
### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
PKG: react-experiments |  | deps: @testing-library/jest-dom,@testing-library/react,@testing-library/user-event,react,react-dom,react-router-dom,react-scripts,web-vitals
=== react-forms-dx  [last commit (committer): 2021-12-26]
# React Forms Dx
A simple light-weight form component for React that will handle most real world use cases.
PKG: react-forms-dx |  | deps: react,react-dom
=== react-ui  [last commit (committer): 2024-01-29]
# React UI
Accessible and customizable UI components for your React JS projects.
PKG: react-ui | A set of UI components for your next ReactJS project | deps: 
=== sapient-project  [last commit (committer): 2025-01-26]
## Getting Started
First, install the packages:
```bash
npm install
```
Then, run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
PKG: projekt |  | deps: next,react,react-dom
=== secret-santa  [last commit (committer): 2021-12-27]
## UI
- [ ] welcome page
- insert email
- verify
- verification succeeded / failed
- [ ] login page
- [ ] Create new Secret santa event (reach this URL after login if user has 0 projects)
- [ ] customize event
- name of event
- list of names; email IDs / phone numbers
- preview
- save to draft
- dispatch / confirmation
- [ ] List of secret santa events (reach this URL after logiin if user has 1 or more projects)
- name, members, date of creation, status (draft / started)
----
### tech stuff
- @babel/transform-runtime -> to enable async
PKG: secret-santa | - [ ] welcome page - insert email - verify - verification succeeded / failed | deps: @emotion/react,express,react,react-dom,react-ga,react-helmet,react-router-dom,webpack
=== secret-santa-api  [last commit (committer): 2021-12-21]
## API
- [x] signup ~ send verification email
- send: email, name, password
- receive: status
- [ ] verify-user
- send: code
- receive: status
- [x] login
- send: username, password
- receive: status, token
- [x] get-events
- GET
- send: token
- receive: [events]
- [x] create-new-event
- send: token, name, [users]
- receive: status, event-id
- [x] trigger-event
PKG: secret-santa-api |  | deps: @sendgrid/mail,cors,dotenv,express,mongodb,nodemon
=== shopify-hello-world  [last commit (committer): 2022-02-03]
# Dawn
[![Build status](https://github.com/shopify/dawn/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Shopify/dawn/actions/workflows/ci.yml?query=branch%3Amain)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?color=informational)](/.github/CONTRIBUTING.md)
[Getting started](#getting-started) |
[Staying up to date with Dawn changes](#staying-up-to-date-with-dawn-changes) |
[Developer tools](#developer-tools) |
[Contributing](#contributing) |
[Code of conduct](#code-of-conduct) |
[Theme Store submission](#theme-store-submission) |
[License](#license)
Dawn represents a HTML-first, JavaScript-only-as-needed approach to theme development. It's Shopify's first source available theme with performance, flexibility, and [Online Store 2.0 features](https:
* **Web-native in its purest form:** Themes run on the [evergreen web](https://www.w3.org/2001/tag/doc/evergreen-web/). We leverage the latest web browsers to their fullest, while maintaining support 
* **Lean, fast, and reliable:** Functionality and design defaults to “no” until it meets this requirement. Code ships on quality. Themes must be built with purpose. They shouldn’t support each a
* **JavaScript not required, fails gracefully:** We extract every bit of speed and functionality out of HTTP, semantic HTML, and CSS before writing our first line of JavaScript. JavaScript can only be
* **Server-rendered:** HTML must be rendered by Shopify servers using Liquid. Business logic and platform primitives such as translations and money formatting don’t belong on the client. Async and o
* **Functional, not pixel-perfect:** The Web doesn’t require each page to be rendered pixel-perfect by each browser engine. Using semantic markup, progressive enhancement, and clever design, we ensu
You can find a more detailed version of our theme code principles in the [contribution guide](https://github.com/Shopify/dawn/blob/main/.github/CONTRIBUTING.md#theme-code-principles).
## Getting started
=== simpliforms  [last commit (committer): 2021-12-26]
# Simpliforms
The best way to build modern forms in 2022.
----
### tech stuff
- @babel/transform-runtime -> to enable async
- react-router-dom v5 used instead of v6 (`withRouter`)
PKG: secret-santa | - [ ] welcome page - insert email - verify - verification succeeded / failed | deps: @emotion/react,express,react,react-dom,react-forms-dx,react-ga,react-helmet,react-router-dom,webpack
=== spring-boot-101  [last commit (committer): 2024-10-01]
(no README)
=== stonks-2000-be  [last commit (committer): 2026-09-03]
(no README)
=== stonks-2000-fe  [last commit (committer): 2026-09-02]
# stonks-2000
=== tactris  [last commit (committer): 2018-06-15]
(no README)
=== tanks-2d  [last commit (committer): 2022-04-24]
(no README)
=== unity-level-maker  [last commit (committer): 2021-06-25]
## Ultimate Level Builder Dx
The ultimate "Mario Maker" alternative for non-Switch devices.
**Overall Features**
- [x] Basic layout editor
- [x] Enemy AI
- [x] Save & load levels
- [ ] Player controller
- [ ] Play mode
- [ ] Advanced editor features
- [ ] UI 1.0
- [ ] Start screen
- [ ] Accounts & profiles
- [ ] Search results
- [ ] Rating & reviews
- [ ] Help & guides
**Editor Features**
- [ ] Block types - ground, water, enemy
- [ ] More ground types
=== unity-tpa  [last commit (committer): 2024-08-10]
# The Platformer Architect
"**The Platformer Architect**" invites you to unleash your creativity in a world where your imagination is the only limit. Design, build, and share your very own challenging platformer levels with int
[Wishlist "The Platformer Architect" on Steam today!](https://store.steampowered.com/app/1990700/The_Platformer_Architect/)
=== whitefangcards  [last commit (committer): 2023-05-28]
(no README)
=== wp-plugin-dx-forms  [last commit (committer): 2021-08-15]
## Primary features
- [x] ~~Plugin setup for creating new forms~~
- [x] ~~Create single table for plugin. Save form submissions~~
- [x] ~~Add / edit fields~~
- [x] Admin panel page to access / delete form submissions
- [x] Nested blocks
- [ ] Styles for FE
- [ ] Delete fields
- [ ] Additional fields types - checkbox, radio, url, slider, datepicker
- [ ] Reorder fields
- [ ] Send email after each submission
## Admin panel features
- [ ] UI overhaul
- [ ] Pagination & AJAX requests
- [ ] Delete entries
## Secondary features
- [ ] Add to newsletter
- [ ] Conditional fields
PKG: forms-dx |  | deps: 
=== wzq  [last commit (committer): 2025-03-02]
# WZQ (front-end)
URL: https://wzq.debojyotighosh.com/
---
## What is Wuziqi?
**Wuziqi** (also called _Gomoku_ or _Five in a row_) is a turn-based strategy game. Imagine Tic-Tac-Toe; but you need to occupy 5 consecutive cells - instead of 3 - to win.
## Roadmap
- [ ] `connect` HOC
- [ ] Profile & login
- [ ] Leaderboard
- [ ] Customization
- [ ] Simultaneous matches
- [x] ~~Base game (v1)~~
PKG: wzq | Wuziqi is a turn-based multiplayer game where the goal is to be the first to occupy five consecutive cells - either horizontally, vertically, or diagonally | deps: @reduxjs/toolkit,next,react,react-dom,react-redux,socket.io-client
=== wzq.socket  [last commit (committer): 2025-03-02]
# WZQ (back-end)
FE: https://wzq.debojyotighosh.com/
PKG: wzq.socket | BE service for the WZQ app | deps: cors,express,socket.io
=== xentropolis  [last commit (committer): 2021-11-06]
## Xentropolis
Meow meow
**Task tracker**
- [ ] Player movement
- [ ] Plant / sow / harvest
- [ ] Grid
- [ ] Chop
- [ ] Inventory
- [ ] Vendor & currency
- [ ] Housing
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] Time of day
- [ ] 
**Points to remember during development**
=== xentropoly  [last commit (committer): 2018-04-22]
[![CodeFactor](https://www.codefactor.io/repository/github/gdebojyoti/xentropoly/badge)](https://www.codefactor.io/repository/github/gdebojyoti/xentropoly)
# xentropoly
Web based multiplayer board game
=== xentropoly-backend  [last commit (committer): 2018-05-15]
[![CodeFactor](https://www.codefactor.io/repository/github/gdebojyoti/xentropoly-backend/badge)](https://www.codefactor.io/repository/github/gdebojyoti/xentropoly-backend) [![Build Status](https://tra
# xentropoly-backend
Backend for Xentropoly
PKG: monopoly-backend |  | deps: express,socket.io
=== zeplyn-project  [last commit (committer): 2025-02-24]
# The Zeplyn Editor
Available at: https://zeplyn-project.vercel.app/
## Setup
Run the following commands in your terminal:
1. `git clone https://github.com/gdebojyoti/zeplyn-project`
2. `cd zeplyn-project`
3. `npm i`
4. `npm run dev`
## Notes
My reasoning behind certain "shortcuts" / decisions:
1. Using **Redux** to manage global state and have a single source of truth.
2. Using **Linaria - a compile time CSS-in-JS library**. It provides modularity. It being compile time has performance benefits over something like EmotionJS. There is also the option to enable "atomi
3. While the Right sidebar is modular and will easily support more panels (as and when required), the left sidebar (i.e., "Explorer") is less so. This was the way I originally built the application du
4. Instead of separate PRs for all of the "features" (like adding Linaria / Redux; or code refactor), I made a **single PR** (https://github.com/gdebojyoti/zeplyn-project/pull/1) to make it easy for a
5. A prod-ready project should also ideally have all strings in a single file / folder - in order to be ready for future internationalization. This was skipped for lack of time. I did however make a c
PKG: zeplyn-project |  | deps: @linaria/core,@linaria/react,@reduxjs/toolkit,react,react-dom,react-redux
=== zombie-runner  [last commit (committer): 2021-07-16]
## Zombie Runner
The ultimate endless runner - involving Zombies, Laser guns, Katanas & Tanks.
**Task tracker**
https://trello.com/b/nPw8wUSF/zombie-runner
**Points to remember during development**
- [ ] Move the ground, and not the player (issues when position > 100000)
- [ ] Reposition world elements instead of instantiating them in run time
- [ ] Try "object pooling"
