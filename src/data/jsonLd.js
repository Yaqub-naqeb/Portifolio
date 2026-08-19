import { PROFILE } from "./profile";
import { PROJECTS } from "./content";

const site = PROFILE.portfolio.replace(/\/$/, "");

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site}/#person`,
      name: PROFILE.name,
      givenName: PROFILE.firstName,
      familyName: PROFILE.lastName,
      jobTitle: PROFILE.role,
      description: PROFILE.summary,
      url: PROFILE.portfolio,
      image: {
        "@type": "ImageObject",
        url: `${site}/og-image.jpg`,
        width: 1920,
        height: 1080,
      },
      email: `mailto:${PROFILE.email}`,
      telephone: "+9647508299544",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Erbil",
        addressRegion: "Kurdistan Region",
        addressCountry: "IQ",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: PROFILE.education.school,
      },
      worksFor: {
        "@type": "Organization",
        name: "iZone Iraq",
        url: "https://www.izoneiraq.com/",
      },
      knowsAbout: [
        "React",
        "TypeScript",
        "Remix",
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "Mapbox",
      ],
      sameAs: [PROFILE.github, PROFILE.linkedin, PROFILE.facebook, PROFILE.instagram],
      workExample: PROJECTS.map((project) => ({
        "@id": `${site}/#${project.htmlId}`,
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${site}/#website`,
      url: PROFILE.portfolio,
      name: `${PROFILE.name} — ${PROFILE.role}`,
      description: `Portfolio of ${PROFILE.name}, a frontend developer in ${PROFILE.location}.`,
      publisher: { "@id": `${site}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${site}/#webpage`,
      url: PROFILE.portfolio,
      name: `${PROFILE.name} | ${PROFILE.headline}`,
      isPartOf: { "@id": `${site}/#website` },
      about: { "@id": `${site}/#person` },
      mainEntity: { "@id": `${site}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      "@id": `${site}/#projects`,
      name: `Projects by ${PROFILE.name}`,
      itemListElement: PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          "@id": `${site}/#${project.htmlId}`,
          name: project.title,
          url: project.demo,
          applicationCategory:
            project.id === "erbilianway"
              ? "TravelApplication"
              : "BusinessApplication",
          description: project.description[0].p,
          creator: { "@id": `${site}/#person` },
        },
      })),
    },
  ],
};
