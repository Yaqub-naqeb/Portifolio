# Yaqub Naqib — Frontend Developer Portfolio

Live site: **[yaqwb.vercel.app](https://yaqwb.vercel.app/)**

Portfolio of **Yaqub Naqib** (also spelled *Yaqwb Naqeb*), a Frontend Developer in Erbil, Kurdistan Region, Iraq. 3+ years shipping production e-commerce and SaaS with React, TypeScript and React Router v7. BSc Software Engineering, Koya University.

Machine-readable files for crawlers and assistants:

- [`/llm.txt`](https://yaqwb.vercel.app/llm.txt) — short identity card
- [`/llms.txt`](https://yaqwb.vercel.app/llms.txt) — structured summary ([llmstxt.org](https://llmstxt.org))
- [`/llms-full.txt`](https://yaqwb.vercel.app/llms-full.txt) — full dossier
- [`/YaqubNaqibFrontendDeveloperCV.md`](https://yaqwb.vercel.app/YaqubNaqibFrontendDeveloperCV.md) — CV

## About

Yaqub owns the TypeScript frontend at **iZone Iraq** (15,000+ monthly users across five storefronts) and previously built the web client for **Botolon**. Selected work also includes **ErbilianWay**.

**Services:** Web Development · UI/UX Implementation · Frontend Architecture · Performance Optimization

## Shipped work

| Project | Live | Stack |
|---|---|---|
| **iZone Iraq** — multi-brand commerce (15,000+ monthly users) | [izoneiraq.com](https://www.izoneiraq.com/) | TypeScript, React Router v7, Tailwind, Laravel |
| **Botolon** — chatbot platform (50+ business accounts) | [botolon.com](https://www.botolon.com/) | Next.js, Sass, Meta Graph API |
| **ErbilianWay** — travel booking | [erbiliantravel.com](https://erbiliantravel.com/) | Vue.js, Bootstrap, Laravel |

## Contact

- Email: [yaqub.009448401@gmail.com](mailto:yaqub.009448401@gmail.com)
- Phone: [+964 750 829 9544](tel:+9647508299544)
- GitHub: [github.com/Yaqub-naqeb](https://github.com/Yaqub-naqeb)
- LinkedIn: [linkedin.com/in/yaqub-naqib-b9894b238](https://www.linkedin.com/in/yaqub-naqib-b9894b238/)
- Facebook: [facebook.com/YaqubEng](https://www.facebook.com/YaqubEng)
- Instagram: [instagram.com/Yaqub_321_](https://www.instagram.com/Yaqub_321_/)

Open to freelance work, collaborations, and full-time frontend roles.

---

## Running this project

This portfolio is a [Create React App](https://github.com/facebook/create-react-app) project styled with Tailwind CSS and animated with Framer Motion. The contact form uses [EmailJS](https://www.emailjs.com/) — see [`EMAILJS_SETUP.md`](EMAILJS_SETUP.md) for setup.

### Prerequisites

Node.js 18+ (see `engines` in `package.json`).

### Scripts

```bash
npm install       # install dependencies
npm start          # run dev server at http://localhost:3000
npm run start:mobile  # dev server bound to 0.0.0.0, for testing on a phone on the same Wi-Fi
npm run ip          # print your local IP address (pair with start:mobile)
npm run build        # production build to ./build
npm test           # run the test runner
```

### Project structure

```
public/
  index.html      # metadata, Open Graph, JSON-LD, noscript CV for crawlers
  llm.txt          # short AI identity card
  llms.txt         # structured AI summary
  llms-full.txt    # extended AI dossier
  robots.txt       # crawler rules (search + AI) + sitemap
  sitemap.xml      # homepage, LLM files, CV
  humans.txt       # human-readable credits
src/
  data/profile.js  # name, links, contact — single source of truth
  components/
    route/Rout.js    # assembles the single-page scroll layout
    navigation/       # navbar
    homeComponent/    # hero section pieces
    cards/           # project card + project data (Info.js)
    store/           # theme (light/dark) context
  pages/           # one component per section (About, Projects, Skills, ...)
```

The site is a single-page scroll layout (`Home → About → Services → Skills → Experience → Projects → Contacts`) rendered by [`src/components/route/Rout.js`](src/components/route/Rout.js).

### Deployment

Deployed on [Vercel](https://vercel.com/). Pushing to `main` triggers a redeploy. After any change to metadata, `llms.txt`, or `sitemap.xml`, redeploy and re-submit the sitemap in Google Search Console.
