import React from 'react';

const countOfVisiblePages = 5;

export class Pager extends React.Component {
  constructor(props) {
    super(props);
		
    this.state = {
      pages: (props.pages !== undefined ? props.pages : 0),
			activePage: (props.activePage !== undefined ? props.activePage : 0)
		}

		this.makeActive = this.makeActive.bind(this);
	}

	makeActive(e) {
		e.preventDefault();
		
		this.setState({activePage: e.target.textContent});
  }
  
  render() {
    const {pages, activePage} = this.state;
		const middlePosition = Math.round(countOfVisiblePages/2);
		let startItem = activePage - middlePosition;
		if (activePage < middlePosition) {
			startItem = 0;
		} else if (activePage > pages - middlePosition) {
			startItem = pages - countOfVisiblePages;
		}
    const pagination = Array.from({length: pages}, (v, k) => k + 1).slice(startItem, startItem + countOfVisiblePages);
    
    return (
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              {(activePage > middlePosition ? <li><a href='/'>&lt;</a></li> : '')}

              {pagination.map((page, index) => {
                return (
                  <li key={index} className={String(page) === String(activePage) ? 'active' : ''}>
                      <a 
                        href='/'
                        
                        onClick={this.makeActive}
                      >{page}</a>
                  </li>
                );
              })}

              {(activePage < ((pages - 1) - middlePosition) ? <li><a href='/'>&gt;</a></li> : '')}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
