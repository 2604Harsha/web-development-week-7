import { ArrowUpRight, Clock3, MapPin } from "lucide-react";

export default function JobCard({ job, index = 0 }) {
  const subject = encodeURIComponent(`Application: ${job.title}`);
  const body = encodeURIComponent(`Hello ${job.company},\n\nI am interested in applying for the ${job.title} opportunity. Please share the application process and next steps.\n\nThank you.`);
  return (
    <article className={`job-card ${job.accent}`} style={{ "--delay": `${index * 70}ms` }}>
      <div className="job-card-top">
        <div className="company-avatar">{job.company.split(" ").map((word) => word[0]).join("").slice(0, 2)}</div>
        <span className="posted">{job.posted}</span>
      </div>
      <p className="job-company">{job.company} <span>·</span> {job.category}</p>
      <h3>{job.title}</h3>
      <p className="job-description">{job.description}</p>
      <div className="job-meta">
        <span><MapPin size={14} /> {job.type}</span>
        <span><Clock3 size={14} /> {job.duration}</span>
      </div>
      <div className="skill-list">
        {job.skills.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}
      </div>
      <div className="job-card-bottom">
        <div><small>STIPEND</small><strong>{job.stipend}</strong></div>
        <a className="apply-button" href={`mailto:careers@dginternshub.com?subject=${subject}&body=${body}`} aria-label={`Apply for ${job.title}`}>
          Apply <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}