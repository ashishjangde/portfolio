import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ashish Jangde | Full-Stack & Backend Software Engineer",
  description:
    "Freelance Full-Stack Software Engineer specializing in Next.js, React, Python, FastAPI, APIs, real-time systems, databases, and SaaS development.",
  keywords: [
    "Ashish Jangde",
    "Ashish Jangde Portfolio",
    "Full-Stack Developer Indore",
    "Freelance Full-Stack Developer",
    "Python Developer",
    "FastAPI Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Engineer",
    "SaaS Developer",
    "Backend Engineer India",
    "Fintech Engineer",
  ],
  authors: [{ name: "Ashish Jangde", url: "https://ashishjangde.vercel.app" }],
  creator: "Ashish Jangde",
  publisher: "Ashish Jangde",
  metadataBase: new URL("https://ashishjangde.vercel.app"),
  alternates: {
    canonical: "https://ashishjangde.vercel.app",
  },
  openGraph: {
    title: "Ashish Jangde | Full-Stack & Backend Software Engineer",
    description:
      "I help startups and businesses build production-ready SaaS products, custom web applications, APIs, and real-time systems.",
    url: "https://ashishjangde.vercel.app",
    siteName: "Ashish Jangde Portfolio",
    images: [
      {
        url: "https://ashishjangde.vercel.app/assets/ashish-jangde.png",
        width: 1200,
        height: 630,
        alt: "Ashish Jangde - Full-Stack & Backend Software Engineer",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Jangde | Full-Stack & Backend Software Engineer",
    description:
      "Freelance Full-Stack Software Engineer building Next.js, Python, FastAPI & real-time SaaS applications.",
    creator: "@ashishjangde",
    images: [
      {
        url: "https://ashishjangde.vercel.app/assets/ashish-jangde.png",
        alt: "Ashish Jangde - Full-Stack & Backend Software Engineer",
      },
    ],
  },
  icons: { icon: "/favicon.svg", apple: "/assets/ashish-jangde.png" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ashishjangde.vercel.app/#person",
      name: "Ashish Jangde",
      givenName: "Ashish",
      familyName: "Jangde",
      jobTitle: "Full-Stack & Backend Software Engineer",
      description: "Freelance Full-Stack Software Engineer building Next.js, Python, FastAPI & real-time SaaS applications.",
      url: "https://ashishjangde.vercel.app",
      image: "https://ashishjangde.vercel.app/assets/ashish-jangde.png",
      email: "ashishjangde54@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/ashishjangde",
        "https://www.linkedin.com/in/ashishjangde",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Kalpi.ai",
        url: "https://kalpi.ai",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Shri Vaishnav Institute of Management & Science",
      },
      knowsAbout: [
        "Full-Stack Web Development",
        "Python",
        "FastAPI",
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "ClickHouse",
        "Redis",
        "WebSockets",
        "Docker",
        "AWS",
        "AI Agents",
        "Vector Databases",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://ashishjangde.vercel.app/#service",
      name: "Ashish Jangde - Software Engineering Services",
      url: "https://ashishjangde.vercel.app",
      image: "https://ashishjangde.vercel.app/assets/ashish-jangde.png",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "22.7196",
        longitude: "75.8577",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark", "font-sans", inter.variable)} suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        <meta name="geo.position" content="22.7196;75.8577" />
        <meta name="ICBM" content="22.7196, 75.8577" />
        <meta name="theme-color" content="#050b08" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-primary/20 selection:text-primary">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
