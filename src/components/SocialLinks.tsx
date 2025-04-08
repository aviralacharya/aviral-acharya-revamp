
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <>
      <div className="fixed bottom-0 left-6 hidden md:block">
        <div className="flex flex-col items-center space-y-6">
          <a 
            href="https://github.com/aviral-acharya" 
            target="_blank" 
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/aviral-acharya" 
            target="_blank" 
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://twitter.com/aviral_acharya" 
            target="_blank" 
            rel="noreferrer"
            className="social-link"
            aria-label="Twitter Profile"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="https://instagram.com/aviral_acharya" 
            target="_blank" 
            rel="noreferrer"
            className="social-link"
            aria-label="Instagram Profile"
          >
            <Instagram size={20} />
          </a>
          <div className="h-24 w-px bg-slate-dark"></div>
        </div>
      </div>
      <div className="fixed bottom-0 right-6 hidden md:block">
        <div className="flex flex-col items-center space-y-6">
          <a 
            href="mailto:hello@aviralacharya.com" 
            className="font-mono text-xs tracking-widest social-link vertical-text"
          >
            hello@aviralacharya.com
          </a>
          <div className="h-24 w-px bg-slate-dark"></div>
        </div>
      </div>
      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </>
  );
};

export default SocialLinks;
