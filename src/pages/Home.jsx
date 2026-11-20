import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Compass, Sparkles, Target, Zap } from "lucide-react";
import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="announcement"><span className="live-dot" /> YOUR NEXT CHAPTER STARTS HERE</div>
            <h1>Small steps.<br /><span>Big beginnings.</span></h1>
            <p className="hero-lead">Find internships that turn what you’re learning into what you can do. Your talent deserves a first opportunity.</p>
            <div className="hero-actions">
              <Link to="/jobs" className="button button-lime">Explore opportunities <ArrowUpRight size={18} /></Link>
              <a href="#how-it-works" className="text-link">How it works <ArrowDown size={16} /></a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack"><i>R</i><i>A</i><i>S</i><i>+</i></div>
              <p><strong>Made for curious minds</strong><br /><span>Students · Fresh graduates · Career switchers</span></p>
            </div>
          </div>
          <div className="hero-art" aria-label="Career growth illustration">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="hero-spark spark-one">✳</div><div className="hero-spark spark-two">✦</div>
            <div className="floating-note note-top"><Sparkles size={15} /> Your potential, in motion</div>
            <div className="growth-card">
              <div className="growth-card-label">THE NEXT MOVE</div>
              <div className="growth-number">01<span>/03</span></div>
              <div className="growth-line"><i></i></div>
              <p>Discover. Learn.<br /><b>Make it happen.</b></p>
              <div className="growth-stamp"><ArrowUpRight size={24} /></div>
            </div>
            <div className="floating-note note-bottom"><span className="mini-check">✓</span> Start where you are</div>
            <div className="hero-side-label">FUTURE IN PROGRESS — EST. 2026</div>
          </div>
        </div>
        <div className="hero-bottom container"><span>SCROLL TO EXPLORE</span><span className="hero-bottom-line"></span><span>01 / 03</span></div>
      </section>

      <section className="ticker" aria-label="Our focus">
        <div className="ticker-track"><span>FIND YOUR FIRST YES</span><b>✳</b><span>BUILD REAL SKILLS</span><b>✳</b><span>MAKE WORK MATTER</span><b>✳</b><span>FIND YOUR FIRST YES</span><b>✳</b><span>BUILD REAL SKILLS</span><b>✳</b></div>
      </section>

      <section className="section container" id="how-it-works">
        <div className="section-heading">
          <div><span className="eyebrow">A BETTER WAY TO BEGIN</span><h2>Opportunity meets<br /><em>possibility.</em></h2></div>
          <p className="section-intro">The first experience can shape everything that follows. We make it easier to find a place to learn, contribute and grow.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card"><span className="feature-icon"><Compass /></span><span className="feature-number">01</span><h3>Explore your lane</h3><p>Browse opportunities across development, data, design and more.</p></div>
          <div className="feature-card feature-highlight"><span className="feature-icon"><Target /></span><span className="feature-number">02</span><h3>Find your fit</h3><p>Compare skills, duration and work modes to find your next step.</p></div>
          <div className="feature-card"><span className="feature-icon"><Zap /></span><span className="feature-number">03</span><h3>Make your move</h3><p>Take the first step, apply and turn learning into experience.</p></div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="section-heading featured-heading">
            <div><span className="eyebrow">HANDPICKED STARTING POINTS</span><h2>Find your <em>next.</em></h2></div>
            <Link to="/jobs" className="outline-link">View all opportunities <ArrowRight size={17} /></Link>
          </div>
          <div className="jobs-grid home-jobs">{jobs.slice(0, 3).map((job, index) => <JobCard key={job.id} job={job} index={index} />)}</div>
        </div>
      </section>

      <section className="cta-section container">
        <div className="cta-inner"><div className="cta-decoration">✳</div><div><span className="eyebrow">NO PERFECT MOMENT REQUIRED</span><h2>Your future is not<br />waiting. <em>Neither should you.</em></h2></div><Link to="/jobs" className="button button-dark">Find an opportunity <ArrowUpRight size={18} /></Link></div>
      </section>
    </>
  );
}