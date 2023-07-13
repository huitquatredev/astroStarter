# Astro Starter Kit for huitquatre websites

```
git clone git@github.com:huitquatredev/astroStarter.git MY-NEW-PROJECT
```

## 💄 Dependencies

- ![sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) you can use it with `<style lang=scss>`.
- ![tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) you can even use `@apply` directives.
- [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) : automatic sitemap generation.
- [icon](https://github.com/natemoo-re/astro-icon#readme) : use it with `import {Icon} from 'astro-icon'` and `<Icon pack="mdi" name="account" />`. List of icons [here](https://iconify.design/).
- [critters](https://github.com/astro-community/astro-critters#readme) : inline critical CSS.
- [compress](https://github.com/astro-community/astro-compress#readme) : compress all assets (html, css, js etc) after build.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon/
│   │   └── All favicons live here
│   └── ogImage/
│   │   └── fallback OG image
│   └── robots.txt
├── src/
│   └── components/
│   │   └── All astro components live here
│   └── layouts/
│   │   └── All layouts live here
│   └── pages/
│       └── All pages live here
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📌 TODO List

- ✅ Uploads the favicons
- ✅ Upload the OG fallback image
- ✅ Change the robots.txt for production
- ✅ Change the "site" value in astro.config.mjs
