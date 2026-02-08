'use client'
import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  twitterHandle?: string
  canonicalUrl?: string
}

export default function SEO({
  title = 'Nimesh Madhusanka- Full Stack Developer & Creative Technologist',
  description = 'Nimesh Madhusanka is a passionate full stack developer and creative technologist specializing in modern web development, React, Next.js, and innovative digital solutions. Based in Sri Lanka, delivering exceptional user experiences.',
  keywords = 'Pabasara Fernando, Full Stack Developer, Web Developer, React Developer, Next.js, JavaScript, TypeScript, Frontend Developer, Backend Developer, Sri Lanka Developer, Creative Technologist, Software Engineer',
  ogImage = '/profile1.png',
  twitterHandle = '@pabasarafernando',
  canonicalUrl = 'https://nimeshmadhusanka.me'
}: SEOProps) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Pabasara Fernando" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://pabasarafernando.me${ogImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pabasara Fernando Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://pabasarafernando.me${ogImage}`} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preload Important Resources */}
      <link rel="preload" href="/profile.png" as="image" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Pabasara Fernando",
            "jobTitle": "Full Stack Developer",
            "description": description,
            "url": canonicalUrl,
            "sameAs": [
              "https://github.com/pabasarafernando",
              "https://linkedin.com/in/pabasarafernando",
              "https://twitter.com/pabasarafernando"
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
              "UI/UX Design"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Sri Lanka"
            },
            "email": "madhusankan19@gmail.com.me",
            "image": `https://pabasarafernando.me${ogImage}`
          })
        }}
      />
    </Head>
  )
}
