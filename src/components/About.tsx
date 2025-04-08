
import { useEffect, useRef } from 'react';

const skills = [
  "JavaScript (ES6+)", 
  "TypeScript", 
  "React", 
  "Node.js", 
  "Express",
  "Next.js",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "AWS"
];

const About = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-24 px-6 sm:px-12 md:px-24 lg:px-32 opacity-0"
    >
      <h2 className="section-heading text-2xl md:text-3xl mb-12">
        <span className="numbered-heading">01.</span>
        About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 text-lg">
          <p className="mb-4">
            Hello! I'm Aviral, a full stack developer based in Nepal with a passion for creating 
            digital experiences that are both functional and beautiful. I enjoy solving 
            complex problems with clean, efficient code.
          </p>
          
          <p className="mb-4">
            My journey in web development started back in 2018 when I decided to try creating custom themes 
            for Tumblr blogs — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          
          <p className="mb-4">
            Fast-forward to today, and I've had the privilege of working at a 
            <a href="#" className="styled-link mx-1">software agency</a>, 
            <a href="#" className="styled-link mx-1">a startup</a>, and 
            <a href="#" className="styled-link mx-1">a tech company</a>. 
            My main focus these days is building accessible, inclusive products and digital experiences.
          </p>
          
          <p className="mb-8">
            Here are a few technologies I've been working with recently:
          </p>
          
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
            {skills.map((skill) => (
              <li 
                key={skill} 
                className="flex items-center font-mono text-sm relative pl-6 before:content-['▹'] before:text-primary before:absolute before:left-0"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative group">
          <div className="relative rounded overflow-hidden w-full max-w-xs mx-auto">
            <div className="absolute w-full h-full bg-primary/30 rounded z-10 transition-opacity duration-300 opacity-40 group-hover:opacity-0"></div>
            <img 
              src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fme.jpg&w=384&q=75" 
              alt="Aviral Acharya" 
              className="rounded grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
            />
          </div>
          <div className="absolute -inset-0.5 rounded-lg bg-primary/20 opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
