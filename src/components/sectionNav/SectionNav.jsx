import React from 'react';

const categories = [
  { anchor: 'All', link: '/', classes: 'active' },
  { anchor: 'Vegetables', link: '/' },
  { anchor: 'Fruits', link: '/' },
  { anchor: 'Juice', link: '/' },
  { anchor: 'Dried', link: '/' }
];

export class SectionNav extends React.Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-10 mb-5 text-center">
          <ul className="product-category">
            {categories.map((category, index) => (
              <li key={index}><a href={category.link} className={category.classes}>{category.anchor}</a></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
