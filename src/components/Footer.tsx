
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 text-center">
      <div className="flex justify-center space-x-8 mb-6">
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
      </div>
      <div className="font-mono text-xs text-slate">
        <p>Designed & Built by Aviral Acharya</p>
        <p>© {year} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
