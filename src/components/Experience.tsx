
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const experiences = [
  {
    company: "Upstatement",
    title: "Lead Engineer",
    range: "May 2021 - Present",
    url: "https://upstatement.com",
    descriptions: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, and more",
      "Work alongside creative directors to lead the technical implementations of projects through the entire lifecycle",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into fully functioning websites and applications",
      "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship"
    ]
  },
  {
    company: "Apple",
    title: "UI Engineer",
    range: "July 2020 - May 2021",
    url: "https://www.apple.com",
    descriptions: [
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, and JavaScript",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      "Worked closely with designers and management team to develop, document, and manage websites"
    ]
  },
  {
    company: "Scout Studio",
    title: "Frontend Developer",
    range: "Jan 2019 - June 2020",
    url: "https://scout.camd.northeastern.edu/",
    descriptions: [
      "Collaborated with a team of student designers and engineers to create marketing websites and materials for local startups and nonprofits",
      "Built and delivered technical solutions according to stakeholder business requirements",
      "Participated in client meetings and design discussions to provide technical insights"
    ]
  }
];

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
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
      id="experience" 
      ref={sectionRef}
      className="py-24 px-6 sm:px-12 md:px-24 lg:px-32 opacity-0"
    >
      <h2 className="section-heading text-2xl md:text-3xl mb-12">
        <span className="numbered-heading">02.</span>
        Where I've Worked
      </h2>
      
      <div className="grid md:grid-cols-12 gap-y-8 md:gap-y-0 max-w-3xl">
        {/* Tab list */}
        <div className="md:col-span-3 flex md:block overflow-x-auto md:overflow-hidden mb-6 md:mb-0 scrollbar-hide">
          {experiences.map((experience, i) => (
            <button
              key={i}
              className={cn(
                "text-left px-4 py-3 border-b-2 md:border-b-0 md:border-l-2 text-sm font-mono whitespace-nowrap min-w-max md:w-full transition-all",
                activeTabId === i 
                  ? "text-primary border-primary bg-navy-light/50" 
                  : "text-slate border-slate-dark hover:text-primary hover:border-primary/50"
              )}
              onClick={() => setActiveTabId(i)}
              aria-label={`${experience.company} tab`}
            >
              {experience.company}
            </button>
          ))}
        </div>
        
        {/* Tab content */}
        <div className="md:col-span-9 md:pl-8">
          <h3 className="text-xl font-medium mb-1">
            {experiences[activeTabId].title}
            <span className="text-primary"> @ </span>
            <a 
              href={experiences[activeTabId].url} 
              className="inline-link hover:text-primary transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {experiences[activeTabId].company}
            </a>
          </h3>
          
          <p className="font-mono text-xs text-slate mb-6">
            {experiences[activeTabId].range}
          </p>
          
          <ul className="space-y-4">
            {experiences[activeTabId].descriptions.map((description, i) => (
              <li 
                key={i} 
                className="relative pl-6 before:content-['▹'] before:text-primary before:absolute before:left-0"
              >
                {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
