'use client';
import { ArrowDown, ArrowUpRight, Check, Play, Quote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';
import { CustomCursor, ScrollProgress } from '../components/Effects';
import { programs, sports, stats } from '../data/site';

const heroImage = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85';
const campusImage = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85';
const studentImage = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85';

export default function Home() {
  return <main id="top">
    <ScrollProgress/><CustomCursor/><Navbar/>

    <section className="hero">
      <div className="hero-noise"/>
      <div className="container hero-inner">
        <Reveal><p className="eyebrow"><span className="dot"/> Dehradun · Uttarakhand · India</p></Reveal>
        <Reveal delay={0.08}><h1>Education that<br/><em>shapes</em> who you become.</h1></Reveal>
        <Reveal delay={0.16}><div className="hero-bottom"><p>Tula&apos;s International School is a modern gurukul where academic excellence, character and curiosity grow together.</p><div className="hero-actions"><a className="btn btn-light" href="#admissions">Explore admissions <ArrowUpRight size={17}/></a><a className="text-link" href="#why-tis"><span className="play"><Play size={13} fill="currentColor"/></span> Discover TIS</a></div></div></Reveal>
      </div>
      <div className="hero-image-wrap"><img src={heroImage} alt="Students learning together"/><div className="image-caption">THE MODERN GURUKUL <span>↓</span></div></div>
      <div className="hero-scroll"><ArrowDown size={17}/> Scroll to explore</div>
    </section>

    <section className="statement section-pad">
      <div className="container statement-grid">
        <Reveal><p className="kicker">01 — THE TIS DIFFERENCE</p></Reveal>
        <Reveal delay={0.08}><div><h2>Not just a school.<br/><span>A place to <i>belong.</i></span></h2><p className="lead">TIS combines the warmth of traditional values with the possibilities of modern education. Students are encouraged to question, create, compete, collaborate and discover their own direction.</p><a className="arrow-link" href="#campus">Why families choose TIS <ArrowUpRight size={18}/></a></div></Reveal>
      </div>
    </section>

    <section id="why-tis" className="stats-section">
      <div className="container"><div className="stats-grid">{stats.map((s,i)=><Reveal key={s.label} delay={i*.06}><div className="stat"><strong>{s.value}</strong><span>{s.label}</span></div></Reveal>)}</div></div>
    </section>

    <section id="academics" className="programs section-pad">
      <div className="container"><div className="section-head"><Reveal><p className="kicker">02 — HOW WE LEARN</p><h2>Room to <i>grow.</i><br/>Reasons to <i>stay curious.</i></h2></Reveal><Reveal delay={0.1}><p>From the classroom to the sports field, every experience is designed to develop independent thinkers and confident young people.</p></Reveal></div>
      <div className="program-list">{programs.map((p,i)=><Reveal key={p.number} delay={i*.08}><article className="program"><span>{p.number}</span><h3>{p.title}</h3><p>{p.text}</p><ArrowUpRight size={22}/></article></Reveal>)}</div></div>
    </section>

    <section id="campus" className="campus section-pad">
      <div className="container campus-grid"><Reveal><div className="photo-card tall"><img src={campusImage} alt="TIS campus"/><div className="photo-tag">22 ACRES · DEHRADUN</div></div></Reveal><Reveal delay={0.1}><div className="campus-copy"><p className="kicker">03 — LIFE AT TIS</p><h2>A campus built for <i>possibility.</i></h2><p>From well-equipped laboratories and digital classrooms to a library of 20,000+ books and an expansive sports ecosystem, the campus gives students space to find what they love.</p><div className="check-list">{['CBSE curriculum · Grades IV–XII','16+ Olympic sports & activities','Residential and day-school experience','24/7 medical assistance'].map(x=><div key={x}><Check size={17}/>{x}</div>)}</div><a className="arrow-link" href="#admissions">Take a virtual tour <ArrowUpRight size={18}/></a></div></Reveal></div>
    </section>

    <section className="sports"><div className="sports-image"><img src={studentImage} alt="Student life at TIS"/></div><div className="sports-content"><Reveal><p className="kicker">04 — BEYOND THE CLASSROOM</p><h2>Find your <i>field.</i></h2><p>Sport at TIS is more than a facility. It builds discipline, confidence, resilience and joy.</p><div className="sport-cloud">{sports.map(s=><span key={s}>{s}</span>)}</div></Reveal></div></section>

    <section className="quote-section section-pad"><div className="container quote-grid"><Reveal><Quote size={34}/><p className="quote">“When students are inspired, they don&apos;t just learn — they grow, explore and shape their own futures.”</p><p className="quote-by">— Tula&apos;s International School</p></Reveal><Reveal delay={0.12}><div className="quote-side"><Sparkles size={21}/><p>Learning should feel like an adventure — where curiosity leads and creativity thrives.</p></div></Reveal></div></section>

    <section id="admissions" className="admissions"><div className="container admissions-inner"><Reveal><p className="kicker">05 — YOUR NEXT CHAPTER</p><h2>Ready to see<br/><i>what&apos;s possible?</i></h2><p>Registrations are open for Grades IV–IX and XI. Start a conversation with our admissions team.</p><a className="btn btn-dark" href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">Start your application <ArrowUpRight size={17}/></a></Reveal><div className="admission-orbit"><div>IV</div><div>V</div><div>VI</div><div>VII</div><div>VIII</div><div>IX</div><div>XI</div></div></div></section>

    <footer className="footer"><div className="container"><div className="footer-top"><div><a href="#top" className="brand footer-brand"><span className="brand-mark">T</span><span>TULA&apos;S<span className="brand-sub">INTERNATIONAL SCHOOL</span></span></a><p>Enlightening through education,<br/>ensuring a promising future.</p></div><div className="footer-links"><div><span>Explore</span><a href="#why-tis">Why TIS</a><a href="#academics">Academics</a><a href="#campus">Campus</a></div><div><span>Connect</span><a href="mailto:info@tis.edu.in">info@tis.edu.in</a><a href="tel:+919837983791">+91 98379 83791</a><a href="https://tis.edu.in/" target="_blank" rel="noreferrer">tis.edu.in ↗</a></div></div></div><div className="footer-bottom"><span>© 2026 Tula&apos;s International School</span><span>Dhoolkot, Selaqui, Dehradun — Uttarakhand</span></div></div></footer>
  </main>;
}
