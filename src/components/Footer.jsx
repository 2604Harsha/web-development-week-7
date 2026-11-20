import { ArrowUpRight, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark">Job<span>.</span></span>
            <span className="brand-name"> hub</span>
          </Link>
          <p className="footer-copy">Your first step doesn't need to be perfect.<br />It just needs to begin.</p>
        </div>
        <div className="footer-right">
          <span className="eyebrow">READY WHEN YOU ARE</span>
          <Link to="/jobs" className="footer-link">Explore opportunities <ArrowUpRight size={17} /></Link>
          <div className="socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Job Hub. Built for what’s next.</span>
        <span>Learn · Build · Launch</span>
      </div>
    </footer>
  );
}