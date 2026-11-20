import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: "Internship enquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(form.topic);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:careers@dginternshub.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section className="contact-page">
      <div className="container contact-layout">
        <div className="contact-copy"><span className="eyebrow">LET’S START A CONVERSATION</span><h1>Good things<br />start with a <em>hello.</em></h1><p>Have a question about an opportunity, partnership or getting started? Send us a note. We’d love to hear from you.</p>
          <div className="contact-detail"><span><Mail size={19} /></span><div><small>DROP US A NOTE</small><a href="mailto:careers@dginternshub.com">careers@dginternshub.com</a></div></div>
          <div className="contact-detail"><span><MapPin size={19} /></span><div><small>OUR APPROACH</small><strong>Opportunities without boundaries</strong></div></div>
          <div className="contact-orbit">✳</div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span className="eyebrow">YOUR MESSAGE</span><span className="form-index">01 — 04</span></div>
          <label>Your name<input name="name" value={form.name} onChange={update} placeholder="What should we call you?" required /></label>
          <label>Email address<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label>
          <label>What’s this about?<select name="topic" value={form.topic} onChange={update}><option>Internship enquiry</option><option>Partnership</option><option>General question</option><option>Feedback</option></select></label>
          <label>Your message<textarea name="message" value={form.message} onChange={update} placeholder="Tell us a little more..." rows="4" required /></label>
          <button className="button button-lime form-submit" type="submit">Send message <Send size={17} /></button>
          {submitted && <p className="form-note">Your email app should open with your message ready to send.</p>}
          <p className="privacy-note">By sending this message, you agree to be contacted about your enquiry.</p>
        </form>
      </div>
    </section>
  );
}