
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 lg:px-32"
    >
      <div>
        <h1 
          className={`font-mono text-primary text-sm mb-5 ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          style={{ transitionDelay: '100ms' }}
        >
          Hi, my name is
        </h1>
        <h2 
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          style={{ transitionDelay: '200ms' }}
        >
          Aviral Acharya.
        </h2>
        <h3 
          className={`text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          style={{ transitionDelay: '300ms' }}
        >
          I build things for the web.
        </h3>
        <p 
          className={`max-w-lg text-lg mb-12 ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          style={{ transitionDelay: '400ms' }}
        >
          I'm a full-stack developer specializing in building (and occasionally designing) 
          exceptional digital experiences. Currently, I'm focused on building accessible, 
          human-centered products.
        </p>
        <div 
          className={`${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          style={{ transitionDelay: '500ms' }}
        >
          <Button asChild className="bg-transparent text-primary hover:bg-primary/10 border border-primary rounded px-7 py-5 text-base">
            <a href="#projects">Check out my work!</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
