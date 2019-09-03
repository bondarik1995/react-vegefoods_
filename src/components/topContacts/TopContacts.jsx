import React from 'react';

const contacts = [
  {
    data: '+ 1235 2355 98',
    classes: 'col-md',
    iconKind: 'phone2'
  },
  {
    data: 'youremail@email.com',
    classes: 'col-md',
    iconKind: 'paper-plane'
  },
  {
    data: '3-5 Business days delivery \& Free Returns',
    classes: 'col-md-5 text-lg-right'
  }
];

export class TopContacts extends React.Component {
  render() {
    return (
      <div>
        <div className="py-1 bg-primary">
          <div className="container">
            <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
              <div className="col-lg-12 d-block">
                <div className="row d-flex">
                  {contacts.map((contact, index) => (
                    <div key={index} className={`pr-4 d-flex topper align-items-center ${contact.classes}`}>
                      <div className="icon mr-2 d-flex justify-content-center align-items-center">
                        <span className={`icon-${contact.iconKind}`} />
                      </div>
                      <span className="text">{contact.data}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
