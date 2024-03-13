import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/profile1.jpg`} alt="" />
      </Link>
      <header>
        <h2>Muthya Ambati</h2>
        <p><a href="mailto:ambatimuthya07@gmail.com">ambatimuthya07@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hey!, I&apos;m Muthya. I am a <a href="https://www.ece.ncsu.edu/">NC State</a> graduate student, <a href="https://www.vnit.ac.in/">NIT Nagpur</a> Alumni. Previously,
        I worked as a AI Engine Development Intern at <a href="https://www.xilinx.com/products/technology/ai-engine.html">AMD</a>
        , and as an Embedded Engineer at <a href="https://www.gilbarco.com/us/">Gilbarco Veeder-Root</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Muthya Ambati</p>
      {/* <p className="copyright">&copy; Nagaraj Madamshetti <Link to="/">
      nagaraj.madamshetti</Link>.</p> */}
    </section>
  </section>
);

export default SideBar;
