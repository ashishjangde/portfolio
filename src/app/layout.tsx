import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ashish Jangde | Full-Stack & Backend Software Engineer",
  description:
    "Freelance Full-Stack Software Engineer specializing in Next.js, React, Python, FastAPI, APIs, real-time systems, databases, and SaaS development.",
  keywords: [
    "Ashish Jangde",
    "Freelance Full-Stack Developer",
    "Python Developer",
    "FastAPI Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Engineer",
    "SaaS Developer",
    "Backend Engineer",
  ],
  authors: [{ name: "Ashish Jangde", url: "https://ashishjangde.com" }],
  creator: "Ashish Jangde",
  metadataBase: new URL("https://ashishjangde.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ashish Jangde | Full-Stack & Backend Software Engineer",
    description:
      "I help startups and businesses build production-ready SaaS products, custom web applications, APIs, and real-time systems.",
    url: "https://ashishjangde.com",
    siteName: "Ashish Jangde Portfolio",
    images: [
      {
        url: "/assets/ashish-jangde.png",
        width: 1200,
        height: 630,
        alt: "Ashish Jangde - Full-Stack & Backend Software Engineer",
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
    images: ["/assets/ashish-jangde.png"],
  },
  icons: { icon: "/favicon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ashish Jangde",
  jobTitle: "Freelance Full-Stack & Backend Software Engineer",
  url: "https://ashishjangde.com",
  sameAs: [
    "https://github.com/ashishjangde",
    "https://www.linkedin.com/in/ashishjangde",
  ],
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
      </body>
    </html>
  );
}
