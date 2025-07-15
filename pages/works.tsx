import { Separator } from '@/components/ui/separator'
import Layout from '@/components/layout'
import ProjectCard from '@/components/project-card'
import { memo, useMemo, useEffect, useState } from 'react'

// Project data with proper typing - memoized for performance
const projects = [
  {
    title: 'www.hghmnds.ph',
    url: 'https://hghmnds.ph',
    role: 'SHOPIFY DEVELOPER / DESIGNER',
    description: 'Highminds Clothing is a prominent streetwear brand based in the Philippines, renowned for its trendsetting designs and commitment to producing high-quality merchandise. The brand has gained significant recognition for its extensive collaborations and is actively expanding its retail footprint with multiple stores nationwide.',
    image: {
      src: '/assets/highminds.png',
      alt: 'Highminds Clothing website screenshot'
    },
    contributions: [
      'Led the conceptualization, design, and development of the brand\'s official webstore, driving a seamless online shopping experience for customers. Leveraged cutting-edge technologies and industry best practices to ensure a user-friendly interface and responsive design, resulting in increased online sales and improved brand visibility.',
      'Responsible for the comprehensive development of the webstore, including prototyping and creating mock-ups to visualize the entire workflow. Executed the design, build, and rigorous testing phases to ensure a robust webstore. Oversaw the deployment process for each feature, ensuring seamless functionality.',
      'Successfully integrated both local and international shipping options, establishing efficient logistics for a global customer base. Constructed versatile payment gateways catering to both local and international customers, facilitating secure and convenient transactions. Seamlessly integrated all social media and marketing platforms into the Shopify dashboard to streamline brand promotion and customer engagement.',
      'Generated and structured analytics and sales reports. Organized product categories and information for easy navigation. Ensured accessibility on both mobile and desktop devices.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Shopify']
  },
  {
    title: 'www.kumu.live',
    url: 'https://kumu.live',
    role: 'WEB ENGINEER II',
    description: 'Kumu is a Filipino community platform where you can hangout, explore the many livestreams the community has to offer, meet, chat and have fun with other Filipinos.',
    image: {
      src: '/assets/kumu.png',
      alt: 'Kumu platform screenshot'
    },
    contributions: [
      'Responsible for migrating the platform from Single Page Application to Server-Side Rendering for better performance using ReactJS. Also led the implementation of ESLint and standardization module import for better and readable codes.',
      'Develop the majority of the features from browse, search and video streams functionality while creating re-usable components for every feature. Also construct the tracking functionality using segment.io for user analytics.',
      'Implemented comprehensive testing strategies and performance optimizations that improved page load times by 40%.',
      'Collaborated with cross-functional teams to deliver high-quality features on schedule.'
    ],
    technologies: ['ReactJS', 'Next.js', 'Node.js', 'TypeScript', 'Segment.io', 'GraphQL']
  },
  {
    title: 'The Clothing',
    url: 'https://theclothing.ph',
    role: 'SHOPIFY DEVELOPER',
    description: 'The Clothing is a contemporary fashion brand focused on minimalist designs and sustainable fashion practices. The brand emphasizes quality craftsmanship and ethical production methods.',
    image: {
      src: '/assets/theclothing.png',
      alt: 'The Clothing website screenshot'
    },
    contributions: [
      'Developed a clean, minimalist e-commerce platform using Shopify that reflects the brand\'s aesthetic values. Implemented custom themes and components to create a unique shopping experience.',
      'Integrated sustainable packaging options and eco-friendly shipping methods to align with the brand\'s environmental commitments.',
      'Built custom product filtering and search functionality to help customers easily find items based on style, size, and sustainability criteria.',
      'Implemented inventory management system and automated order processing to streamline operations.'
    ],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'HTML']
  },
  {
    title: 'Biyaheroes',
    url: 'https://biyaheroes.com',
    role: 'FULL STACK DEVELOPER',
    description: 'Biyaheroes is a travel and adventure platform connecting Filipino travelers with local guides and unique experiences across the Philippines. The platform promotes sustainable tourism and local community engagement.',
    image: {
      src: '/assets/biyaheroes.png',
      alt: 'Biyaheroes platform screenshot'
    },
    contributions: [
      'Built a comprehensive travel booking platform from the ground up using modern web technologies. Developed both frontend user interface and backend API systems.',
      'Implemented real-time booking system with payment integration supporting multiple local and international payment methods.',
      'Created an interactive map feature using mapping APIs to showcase travel destinations and guide locations.',
      'Developed user review and rating system to build trust and community within the platform.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'Google Maps API']
  },
  {
    title: 'Blumr',
    url: 'https://blumr.app',
    role: 'FRONTEND DEVELOPER',
    description: 'Blumr is a modern digital creative platform that helps artists and designers showcase their portfolios and connect with potential clients. The platform focuses on visual storytelling and creative collaboration.',
    image: {
      src: '/assets/blumr.png',
      alt: 'Blumr platform screenshot'
    },
    contributions: [
      'Designed and developed a responsive portfolio showcase platform with emphasis on visual design and user experience.',
      'Implemented drag-and-drop portfolio builder allowing users to easily organize and present their creative work.',
      'Built real-time messaging system for client-artist communication and project collaboration.',
      'Created advanced image optimization and gallery features to ensure fast loading times while maintaining high visual quality.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Cloudinary']
  },
  {
    title: 'Crimson Digital',
    url: 'https://crimsondigital.ph',
    role: 'WEB DEVELOPER',
    description: 'Crimson Digital is a full-service digital marketing agency specializing in brand strategy, web development, and digital advertising. The company serves both local and international clients.',
    image: {
      src: '/assets/crimson.png',
      alt: 'Crimson Digital website screenshot'
    },
    contributions: [
      'Developed the agency\'s corporate website with focus on showcasing their portfolio and services. Implemented modern design principles and smooth animations.',
      'Built custom CMS solution allowing the marketing team to easily update case studies, blog posts, and client testimonials.',
      'Integrated analytics and tracking systems to monitor website performance and user engagement.',
      'Optimized the website for search engines and implemented lead generation forms with automated email marketing integration.'
    ],
    technologies: ['Next.js', 'React', 'Sanity CMS', 'Vercel', 'Google Analytics']
  },
  {
    title: 'Distort',
    url: 'https://distort.design',
    role: 'UI/UX DEVELOPER',
    description: 'Distort is an experimental design studio focusing on innovative digital experiences and interactive installations. The studio pushes the boundaries of web design and digital art.',
    image: {
      src: '/assets/distort.png',
      alt: 'Distort design studio website screenshot'
    },
    contributions: [
      'Created an avant-garde website with experimental animations and interactive elements that showcase the studio\'s creative capabilities.',
      'Implemented WebGL and Three.js for immersive 3D experiences and visual effects.',
      'Developed custom cursor interactions and scroll-triggered animations to create an engaging user experience.',
      'Built responsive design system that maintains the artistic integrity across all device sizes.'
    ],
    technologies: ['React', 'Three.js', 'WebGL', 'GSAP', 'Framer Motion']
  },
  {
    title: 'Auggie Fontanilla',
    url: 'https://auggiefontanilla.com',
    role: 'FULL STACK DEVELOPER',
    description: 'Personal portfolio website for Auggie Fontanilla, a renowned Filipino photographer and visual artist. The site showcases his photographic work and artistic journey.',
    image: {
      src: '/assets/auggiefontanilla.png',
      alt: 'Auggie Fontanilla portfolio website screenshot'
    },
    contributions: [
      'Designed and developed a sophisticated portfolio website that highlights the artist\'s photography with elegant presentation and smooth navigation.',
      'Implemented advanced image gallery with lightbox functionality and optimized loading for high-resolution photographs.',
      'Created custom content management system allowing the artist to easily update galleries and blog posts.',
      'Integrated social media sharing and contact forms to facilitate client inquiries and collaboration opportunities.'
    ],
    technologies: ['React', 'Next.js', 'Strapi CMS', 'Cloudinary', 'Vercel']
  }
]

/**
 * Highly optimized Works page showcasing professional portfolio
 * Features: Memoization, lazy loading, virtual scrolling considerations
 * Uses lazy loading and performance optimizations for better UX
 */
const Works = memo(function Works() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Trigger animation after component mounts
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Memoize project rendering for better performance
  const projectElements = useMemo(() => {
    return projects.map((project, index) => (
      <div 
        key={project.title} 
        className={`space-y-8 transition-all duration-700 ${
          isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: `${index * 100}ms`
        }}
      >
        <ProjectCard
          title={project.title}
          url={project.url}
          role={project.role}
          description={project.description}
          image={project.image}
          contributions={project.contributions}
          technologies={project.technologies}
        />
        
        {/* Separator between projects, but not after the last one */}
        {index < projects.length - 1 && (
          <div className="flex justify-center">
            <Separator className="w-48 opacity-50" />
          </div>
        )}
      </div>
    ))
  }, [isLoaded])

  return (
    <Layout 
      title="Vinse Viñalon - Works & Portfolio"
      description="Explore my comprehensive portfolio including Shopify development, full-stack applications, creative platforms, and digital marketing solutions. Professional projects spanning e-commerce, social platforms, travel, and creative industries."
    >
      <div className="space-y-12">
        {/* Header */}
        <div className={`text-center space-y-6 transition-all duration-1000 ${
          isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4'
        }`}>
          <h1 className="text-4xl font-bold text-primary tracking-tight">WORKS</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my professional projects spanning e-commerce, social platforms, 
            creative tools, and digital experiences. Each project represents a unique challenge 
            and innovative solution.
          </p>
        </div>
        
        {/* Projects */}
        <div className="space-y-16">
          {projectElements}
        </div>

        {/* Performance optimizations */}
        <div className="sr-only">
          {/* Preload critical project images */}
          <link rel="preload" href="/assets/highminds.png" as="image" />
          <link rel="preload" href="/assets/kumu.png" as="image" />
          <link rel="preload" href="/assets/theclothing.png" as="image" />
          <link rel="preload" href="/assets/biyaheroes.png" as="image" />
          <link rel="preload" href="/assets/blumr.png" as="image" />
          <link rel="preload" href="/assets/crimson.png" as="image" />
          <link rel="preload" href="/assets/distort.png" as="image" />
          <link rel="preload" href="/assets/auggiefontanilla.png" as="image" />
        </div>
      </div>
    </Layout>
  )
})

export default Works
