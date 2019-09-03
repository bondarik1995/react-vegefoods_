import React from 'react';

export class Copyright extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    }
  }

  render() {    
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            Copyright &copy;2019 {this.state.text}
            <i className="icon-heart color-danger" aria-hidden="true" />
            by
            <a href="https://colorlib.com" target="_blank">Colorlib</a>
          </p>
        </div>
      </div>
    );
  }
}
