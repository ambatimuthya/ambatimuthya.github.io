import React from 'react';
import PropTypes from 'prop-types';

const Publications = ({ data }) => (
  <div className="education">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Patents and Publications</h3>
    </div>
    {data.map((item) => (
      <article className="degree-container" key={item.title}>
        <header>
          <h4 className="degree">{item.title}</h4>
          <p className="school">{item.detail}</p>
        </header>
      </article>
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    detail: PropTypes.string,
  })),
};

Publications.defaultProps = {
  data: [],
};

export default Publications;
