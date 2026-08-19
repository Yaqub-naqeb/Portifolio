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
      description: PROFILE.summary.replace(
        "builds production web applications with",
        "specializes in"
      ),
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
      workExample: [
        { "@id": `${site}/#project-izone` },
        { "@id": `${site}/#project-botolon` },
        { "@id": `${site}/#project-erbilianway` },
      ],
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
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            "@id": `${site}/#project-izone`,
            name: PROJECTS[0].title,
            url: PROJECTS[0].demo,
            applicationCategory: "BusinessApplication",
            description: PROJECTS[0].description[0].p,
            creator: { "@id": `${site}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            "@id": `${site}/#project-botolon`,
            name: PROJECTS[1].title,
            url: PROJECTS[1].demo,
            applicationCategory: "BusinessApplication",
            description: PROJECTS[1].description[0].p,
            creator: { "@id": `${site}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "SoftwareApplication",
            "@id": `${site}/#project-erbilianway`,
            name: PROJECTS[2].title,
            url: PROJECTS[2].demo,
            applicationCategory: "TravelApplication",
            description: PROJECTS[2].description[0].p,
            creator: { "@id": `${site}/#person` },
          },
        },
      ],
    },
  ],
};
