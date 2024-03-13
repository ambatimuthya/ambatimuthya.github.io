import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Muthya's personal website. NC State based Computer engineering graduate, "
    + 'with a special interest in SoC Design/Verification to enable high computing systems'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome</Link></h2>
          {/* <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p> */}
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats"> statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      {/* <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
