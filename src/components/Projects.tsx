
import { useRef, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Halcyon Theme",
    description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    links: {
      github: "https://github.com/bchiang7/halcyon-site",
      external: "https://halcyon-theme.netlify.app/"
    },
    image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&w=1920&q=75"
  },
  {
    title: "Spotify Profile",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    tech: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
    links: {
      github: "https://github.com/bchiang7/spotify-profile",
      external: "https://spotify-profile.herokuapp.com/"
    },
    image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fspotify.png&w=1920&q=75"
  },
  {
    title: "Build a Spotify Connected App",
    description: "A comprehensive guide for building a Spotify connected app with the Spotify Web API, featuring user authentication and fetching of user data from the Spotify API. The guide demonstrates how to best leverage React, Express, and the Spotify API.",
    tech: ["React", "Express", "Spotify API", "Styled Components"],
    links: {
      github: "https://github.com/bchiang7/spotify-profile",
      external: "https://www.newline.co/courses/build-a-spotify-connected-app"
    },
    image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=1920&q=75"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 px-6 sm:px-12 md:px-24 lg:px-32 opacity-0"
    >
      <h2 className="section-heading text-2xl md:text-3xl mb-16">
        <span className="numbered-heading">03.</span>
        Some Things I've Built
      </h2>
      
      <div className="space-y-32">
        {projects.map((project, i) => (
          <div 
            key={i}
            className={`relative grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
              i % 2 === 1 ? 'md:text-right' : ''
            }`}
          >
            {/* Content */}
            <div className={`md:col-span-6 md:col-start-${i % 2 === 1 ? '7' : '1'} z-10`}>
              <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
              <h3 className="text-2xl font-semibold mb-5">
                <a href={project.links.external} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  {project.title}
                </a>
              </h3>
              <div className="bg-navy-light p-6 rounded shadow-xl mb-5 text-left">
                <p>{project.description}</p>
              </div>
              <ul className={`flex flex-wrap mb-6 gap-x-4 gap-y-2 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                {project.tech.map((tech) => (
                  <li key={tech} className="project-tech">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className={`flex text-white space-x-5 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label={`GitHub link for ${project.title}`}
                >
                  <Github size={20} />
                </a>
                <a 
                  href={project.links.external} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label={`External link for ${project.title}`}
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            {/* Image */}
            <div className={`md:col-span-7 md:col-start-${i % 2 === 1 ? '1' : '6'} md:row-start-1`}>
              <a 
                href={project.links.external}
                target="_blank"
                rel="noreferrer"
                className="relative block group"
              >
                <div className="absolute inset-0 bg-primary/20 rounded group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded shadow-lg filter brightness-75 contrast-100 group-hover:brightness-100 transition-all duration-300"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
