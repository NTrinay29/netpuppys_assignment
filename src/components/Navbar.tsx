'use client';
import { Menu, ArrowUpRight, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap">
    <nav className="nav container">
      <a href="#top" className="brand" aria-label="TIS home"><span className="brand-mark">T</span><span>TULA&apos;S<span className="brand-sub">INTERNATIONAL SCHOOL</span></span></a>
      <div className="nav-links">{navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
      <a className="nav-cta" href="#admissions">Enquire <ArrowUpRight size={16}/></a>
      <button className="menu-btn" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    </nav>
    {open && <div className="mobile-menu">{navItems.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a href="#admissions" onClick={() => setOpen(false)}>Enquire ↗</a></div>}
  </header>;
}
