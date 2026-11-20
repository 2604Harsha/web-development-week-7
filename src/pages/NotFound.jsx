import { Link } from "react-router-dom";
export default function NotFound() {
  return <section className="not-found container"><span className="eyebrow">404 — WRONG TURN</span><h1>This page took<br /><em>a different path.</em></h1><Link className="button button-dark" to="/">Back to home</Link></section>;
}