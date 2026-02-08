import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nimesh Madhusanka - Full Stack Developer & Creative Technologist',
  description: 'Nimesh Madhusanka is a passionate full stack developer and creative technologist specializing in modern web development, React, Next.js, and innovative digital solutions. Based in Sri Lanka, delivering exceptional user experiences.',
  keywords: 'Nimesh Madhusanka, Full Stack Developer, Web Developer, React Developer, Next.js, JavaScript, TypeScript, Frontend Developer, Backend Developer, Sri Lanka Developer, Creative Technologist, Software Engineer',
  authors: [{ name: 'Nimesh Madhusanka' }],
  creator: 'Nimesh Madhusanka',
  publisher: 'Nimesh Madhusanka',
  openGraph: {
    title: 'Nimesh Madhusanka - Full Stack Developer & Creative Technologist',
    description: 'Passionate full stack developer creating innovative digital solutions with modern technologies. Specializing in React, Next.js, and creative web development.',
    url: 'https://nimeshmadhusanka.me',
    siteName: 'Nimesh Madhusanka Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/profile1.png',
        width: 1200,
        height: 630,
        alt: 'Nimesh Madhusanka - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nimesh Madhusanka - Full Stack Developer & Creative Technologist',
    description: 'Passionate full stack developer creating innovative digital solutions with modern technologies.',
    creator: '@nimeshmadhusanka',
    images: ['/profile1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://nimeshmadhusanka.me'),
  alternates: {
    canonical: 'https://nimeshmadhusanka.me',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Nimesh Madhusanka",
        "jobTitle": "Full Stack Developer",
        "description": "Passionate full stack developer and creative technologist specializing in modern web development, React, Next.js, and innovative digital solutions.",
        "url": "https://nimeshmadhusanka.me",
        "sameAs": [
          "https://github.com/nimeshmadhusanka",
          "https://linkedin.com/in/nimesh-madhusanka",
          "https://twitter.com/nimeshmadhusanka"
        ],
        "knowsAbout": [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Full Stack Development",
          "Web Development",
          "Frontend Development",
          "Backend Development",
          "Creative Technology"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Sri Lanka"
        },
        "email": "madhusankan19@gmail.com",
        "image": "https://nimeshmadhusanka.me/profile1.png",
        "alumniOf": "Software Engineering",
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full Stack Developer",
          "occupationLocation": {
            "@type": "Country",
            "name": "Sri Lanka"
          }
        }
      },
      {
        "@type": "WebSite",
        "name": "Nimesh Madhusanka - Portfolio",
        "url": "https://nimeshmadhusanka.me",
        "author": {
          "@type": "Person",
          "name": "Nimesh Madhusanka"
        },
        "description": "Official portfolio website of Nimesh Madhusanka, full stack developer from Sri Lanka specializing in React, Next.js, and modern web development.",
        "inLanguage": "en-US",
        "copyrightHolder": {
          "@type": "Person",
          "name": "Nimesh Madhusanka"
        },
        "copyrightYear": "2024"
      },
      {
        "@type": "ProfessionalService",
        "name": "Nimesh Madhusanka Web Development Services",
        "provider": {
          "@type": "Person", 
          "name": "Nimesh Madhusanka"
        },
        "serviceType": [
          "Web Development",
          "Full Stack Development", 
          "React Development",
          "Frontend Development",
          "Backend Development"
        ],
        "areaServed": "Worldwide",
        "url": "https://nimeshmadhusanka.me",
        "description": "Professional web development services by Nimesh Madhusanka, specializing in modern JavaScript frameworks and full stack solutions."
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="author" content="Nimesh Madhusanka" />
        <meta name="copyright" content="Nimesh Madhusanka" />
        <meta name="geo.region" content="LK" />
        <meta name="geo.country" content="Sri Lanka" />
        <meta name="geo.placename" content="Sri Lanka" />
        <meta name="theme-color" content="#4CAF50" />
        <link rel="alternate" hrefLang="en" href="https://nimeshmadhusanka.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://nimeshmadhusanka.me" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body>
        <div className="main-container">
          {children}
        </div>
      </body>
    </html>
  )
}