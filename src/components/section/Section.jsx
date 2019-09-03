import React from 'react';

import { SectionNav } from '../sectionNav';
import { Catalog } from '../catalog';
import { Pager } from '../pager';

export class Section extends React.Component {
  render() {
    return (
      <section className="ftco-section">
        <div className="container">
          <SectionNav />
          <Catalog />
          <Pager pages={100} activePage={4} />
        </div>
      </section>
    );
  }
}
