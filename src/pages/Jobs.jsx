import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, BriefcaseBusiness } from "lucide-react";
import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";

const categories = ["All roles", "Development", "Data & AI", "Design", "Marketing"];

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All roles");
  const [workMode, setWorkMode] = useState("All modes");

  const filteredJobs = useMemo(() => jobs.filter((job) => {
    const query = search.toLowerCase().trim();
    const matchesSearch = !query || [job.title, job.company, job.category, ...job.skills].join(" ").toLowerCase().includes(query);
    const matchesCategory = category === "All roles" || job.category === category;
    const matchesMode = workMode === "All modes" || job.type === workMode;
    return matchesSearch && matchesCategory && matchesMode;
  }), [search, category, workMode]);

  return (
    <section className="jobs-page">
      <div className="jobs-hero"><div className="container jobs-hero-content"><span className="eyebrow"><BriefcaseBusiness size={14} /> THE OPPORTUNITY BOARD</span><h1>Find work that<br /><em>moves you forward.</em></h1><p>Real-world learning starts with one good opportunity. Find yours.</p><div className="jobs-count"><strong>{jobs.length.toString().padStart(2, "0")}</strong><span>opportunities to explore</span></div></div></div>
      <div className="container jobs-content">
        <div className="filter-panel">
          <div className="search-box"><Search size={19} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search role, skill or company..." aria-label="Search opportunities" /></div>
          <div className="filter-select"><SlidersHorizontal size={16} /><select value={workMode} onChange={(e) => setWorkMode(e.target.value)} aria-label="Filter by work mode"><option>All modes</option><option>Remote</option><option>Hybrid</option></select></div>
        </div>
        <div className="category-tabs">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <div className="results-line"><span>SHOWING <b>{filteredJobs.length.toString().padStart(2, "0")}</b> OPPORTUNITIES</span><span>Find the one that feels right <span className="lime-dot">✳</span></span></div>
        {filteredJobs.length ? <div className="jobs-grid">{filteredJobs.map((job, index) => <JobCard key={job.id} job={job} index={index} />)}</div> : <div className="empty-state"><Search size={30} /><h3>No matches just yet</h3><p>Try another keyword or clear your filters to see more opportunities.</p><button className="button button-dark" onClick={() => { setSearch(""); setCategory("All roles"); setWorkMode("All modes"); }}>Clear filters</button></div>}
      </div>
    </section>
  );
}