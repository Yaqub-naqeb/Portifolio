import { Poppins } from "next/font/google";
import { jsonLd } from "@/data/jsonLd";
import { PROFILE } from "@/data/profile";
import { ThemeProvider } from "@/components/store/ContextTheme";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = PROFILE.portfolio.replace(/\/$/, "");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${PROFILE.name} | ${PROFILE.headline}`,
  description: PROFILE.summary,
  authors: [{ name: PROFILE.name, url: siteUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: PROFILE.portfolio,
    types: { "text/plain": "/llms.txt" },
  },
  openGraph: {
    type: "profile",
    url: PROFILE.portfolio,
    siteName: PROFILE.name,
    locale: "en_US",
    title: `${PROFILE.name} | ${PROFILE.headline}`,
    description: `${PROFILE.role} in ${PROFILE.location}. React, TypeScript, Remix, and Next.js.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1920,
        height: 1080,
        alt: `${PROFILE.name}, frontend developer in Erbil`,
      },
    ],
    firstName: PROFILE.firstName,
    lastName: PROFILE.lastName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | ${PROFILE.headline}`,
    description: `${PROFILE.role} in ${PROFILE.location}. React, TypeScript, Remix, and Next.js.`,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#9cd5ee",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const themeInit = `(function(){try{var s=localStorage.getItem('yaqwb-theme-mode');var dark=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(dark){var d=document.documentElement;d.classList.add('dark','dark-scrollbar');d.style.colorScheme='dark';}else{document.documentElement.style.colorScheme='light';}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="me" href={PROFILE.github} />
        <link rel="me" href={PROFILE.linkedin} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="App" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
