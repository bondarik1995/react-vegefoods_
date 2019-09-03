import React from 'react';

import bg_1 from './images/bg_1.jpg';

export class Slider extends React.Component {
  render() {
    return (
      <div className="hero-wrap hero-bread" style={{ backgroundImage: `url(${bg_1})` }}>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Products</span></p>
              <h1 className="mb-0 bread">Products</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
