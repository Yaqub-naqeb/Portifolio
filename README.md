# Yaqwb Naqeb — Frontend Developer Portfolio

Live site: **[yaqwb.vercel.app](https://yaqwb.vercel.app/)**

Portfolio of **Yaqwb Naqeb** (also spelled *Yaqub Naqeb*), a Frontend Developer based in Iraq / Kurdistan who builds production web applications with React, Next.js, and React Router. B.Sc. Software Engineering, University of Koya.

For a plain-text machine-readable summary (used by AI assistants and crawlers), see [`public/llms.txt`](public/llms.txt) and [`public/llms-full.txt`](public/llms-full.txt), or visit `/llms.txt` on the live site.

## About

Yaqwb builds the frontend for real, shipping products — e-commerce, travel, and business-communication platforms — with a focus on clean UI, solid performance, and modern React architecture. He's comfortable owning a frontend end-to-end: architecture, state management, and responsive, accessible interfaces.

**Services:** Web Development · UI/UX Implementation · Frontend Architecture · Performance Optimization

## Shipped projects

| Project | Live | Stack |
|---|---|---|
| **iZone** — Apple products platform for Iraq | [izoneiraq.com](https://www.izoneiraq.com/) | React Router, Laravel, Tailwind CSS |
| **Botolon** — business chatbot / communication platform | [botolon.com](https://www.botolon.com/) | Next.js, Node.js, Sass |
| **ErbilianWay** — travel company website | [erbiliantravel.com](https://erbiliantravel.com/) | Laravel, Bootstrap, Vue.js |
| **LinkPlus** — professional networking platform | [link-plus.vercel.app](https://link-plus.vercel.app/) | Next.js, React, Redux Toolkit |
| **AVIBOOKS** — book e-commerce platform | [avibooks.vercel.app](https://avibooks.vercel.app/) | React, Context API, Tailwind CSS |

## Contact

- Email: [yaqub.009448401@gmail.com](mailto:yaqub.009448401@gmail.com)
- GitHub: [github.com/Yaqub-naqeb](https://github.com/Yaqub-naqeb)
- LinkedIn: [linkedin.com/in/yaqwb-naqib-b9894b238](https://www.linkedin.com/in/yaqwb-naqib-b9894b238/)
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
  index.html      # metadata, Open Graph, JSON-LD structured data
  llms.txt         # plain-text AI/LLM-readable summary
  llms-full.txt      # extended AI/LLM-readable dossier
  robots.txt        # crawler rules (incl. AI crawlers) + sitemap pointer
  sitemap.xml        # section-level sitemap
src/
  components/
    route/Rout.js    # assembles the single-page scroll layout
    navigation/       # navbar
    homeComponent/    # hero section pieces
    cards/           # project card + project data (Info.js)
    store/           # theme (light/dark) context
  pages/           # one component per section (About, Projects, Skills, ...)
```

The site is a single-page scroll layout (`Home → About → Statistics → Services → Skills → Experience → Projects → FAQ → Contacts`) rendered by [`src/components/route/Rout.js`](src/components/route/Rout.js).

### Deployment

Deployed on [Vercel](https://vercel.com/). Pushing to `main` triggers a redeploy. After any change to metadata, `llms.txt`, or `sitemap.xml`, redeploy and re-submit the sitemap in Google Search Console.
