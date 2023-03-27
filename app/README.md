# Jacando Shopping APP

#### This project was created with Vite (React, Typescript, Tailwind, GraphQL, zustand)

---

## Requirements

For development:

- you will need [Node.js](https://nodejs.org/en/) installed on your environment (LTS)
- you will need [PNPM](https://pnpm.io/) installed on your environment (LTS)

---

### Setup

Install [Node.js](https://nodejs.org/en/) as runtime environment  
Install [PNPM](https://pnpm.io/) as package manager

- You can find some instructions on how to install PNPM in Getting Started section

#### Checking everything is installed correctly

You should be able to run the following commands after the installation (versions can be higher).

```
$ node --version
v18.14.0
$ pnpm --version
7.30.3
```

---

## Getting started

- Install all project dependencies with `pnpm i` (alias for `pnpm install`)
- To run the app (development):
    - Start the development with `pnpm dev` (short for `pnpm run dev`)
- To build the app:
    - Build the app with `pnpm build` (short for `pnpm run build`)
- (check the `scripts` section in `package.json` for more commands)

**_TIPS_**:
> 1. Set up an alias for `pnpm` in your `~/.zshrc` or `~/.bashrc` file, simply add the following
     line: `alias pn=pnpm`
> 2. All scripts from package.json can omit `run` keyword, and if you use the alias, `pnpm run dev`
     becomes `pn dev`

---

## Languages, tools & libraries

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/en/main) - Declarative routing for React
- [Apollo Client](https://www.apollographql.com/docs/react/) - Apollo Client is a fully-featured, production ready caching GraphQL client for every UI
  framework and GraphQL server
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs
- [headlessui](https://headlessui.dev/) - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
- [zustand](https://github.com/pmndrs/zustand) - A small, fast and scalable bearbones state-management solution using simplified flux principles. Has
  a comfy API based on hooks, isn't boilerplatey or opinionated.
- [immer](https://immerjs.github.io/immer/) - Create the next immutable state by mutating the current one
- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming
  language that builds on JavaScript, giving you better tooling at any scale
- [Vite](https://vitejs.dev/) - Vite is a build tool that aims to provide a faster and leaner
  development experience for modern web projects
