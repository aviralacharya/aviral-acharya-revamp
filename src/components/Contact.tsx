
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInSlow');
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
      id="contact" 
      ref={sectionRef}
      className="py-24 px-6 sm:px-12 md:px-24 lg:px-32 opacity-0"
    >
      <div className="max-w-xl mx-auto text-center">
        <p className="font-mono text-primary text-sm mb-4">04. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Get In Touch</h2>
        <p className="mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        <Button asChild className="bg-transparent text-primary hover:bg-primary/10 border border-primary rounded px-8 py-6 text-base">
          <a href="mailto:hello@aviralacharya.com">Say Hello</a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
