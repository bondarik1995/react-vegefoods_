import React from 'react';

import { Header } from '../header';
import { Section } from '../section';
import { Form } from '../form';
import { Footer } from '../footer';

export class App extends React.Component {
  render() {
    return (
      <div className="goto-here">
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}
