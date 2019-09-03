import React from 'react';

const navLinks = [
  {
    anchor: 'Home',
    link: 'index.html'
  },
  {
    anchor: 'Shop',
    link: '/',
    children: [
      { anchor: 'Shop', link: 'shop.html' },
      { anchor: 'Wishlist', link: 'wishlist.html' },
      { anchor: 'Single Product', link: 'product-single.html' },
      { anchor: 'Cart', link: 'cart.html' },
      { anchor: 'Checkout', link: 'checkout.html' }
    ]
  },
  {
    anchor: 'About',
    link: 'about.html'
  },
  {
    anchor: 'Blog',
    link: 'blog.html'
  },
  {
    anchor: 'Contact',
    link: 'contact.html'
  }
];

export class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">Vegefoods</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" />
              Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                {navLinks.map((navLink, index) => (
                  <li key={index} className={`nav-item${(navLink.children !== undefined ? ' active dropdown' : '')}`}>
                    <a
                      href={navLink.link}
                      className={`nav-link${(navLink.children !== undefined ? ' dropdown-toggle' : '')}`}
                      id={(navLink.children !== undefined ? 'dropdown04' : '')}
                      // {(navLink.children !== undefined ?
                      //   id="dropdown04"
                      //   // dataToggle="dropdown"
                      //   // aria-haspopup="true"
                      //   // aria-expanded="false"
                      // : '')}
                    >
                      {navLink.anchor}
                    </a>
                    {(navLink.children !== undefined ? 
                      <div className="dropdown-menu" aria-labelledby="dropdown04">
                        {navLink.children.map((child, index) => (
                          <a key={index} className="dropdown-item" href={child.link}>{child.anchor}</a>
                        ))}
                      </div>
                    : '')}
                    
                  </li>
                ))}
                
                <li className="nav-item cta cta-colored">
                  <a href="cart.html" className="nav-link">
                    <span className="icon-shopping_cart" />
                    [0]
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
