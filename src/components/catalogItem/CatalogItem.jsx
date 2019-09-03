import React from 'react';

const navigationLinks = [
  { addClassesLink: 'add-to-cart text-center', link: '/', iconKind: 'menu' },
  { addClassesLink: 'buy-now mx-1', link: '/', iconKind: 'cart' },
  { addClassesLink: 'heart', link: '/', iconKind: 'heart' }
];

export class CatalogItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      discount: props.discount !== undefined ? props.discount : '',
      price: props.price,
      oldPrice: props.oldPrice,
      image: props.image
    }
  }

  render() {
    const {
      name, discount, price, oldPrice, image
    } = this.state;
    
    return (
      <div className="col-md-6 col-lg-3">
        <div className="product">
          <a href="/" className="img-prod">
            <img className="img-fluid" src={image} alt={name} />
            {discount !== '' ? <span className="status">{discount}</span> : ''}
            <div className="overlay" />
          </a>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3><a href="/">{name}</a></h3>
            <div className="d-flex">
              <div className="pricing">
                <p className="price">
                  <span className="mr-2 price-dc">{oldPrice}</span>
                  <span className="price-sale">{price}</span>
                </p>
              </div>
            </div>
            <div className="bottom-area d-flex px-3">
              <div className="m-auto d-flex">
                {navigationLinks.map((navigationLink, index) => (
                  <a
                    key={index}
                    href={navigationLink.link}
                    className={`d-flex justify-content-center align-items-center ${navigationLink.addClassesLink}`}
                  >
                    <span><i className={`ion-ios-${navigationLink.iconKind}`} /></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
