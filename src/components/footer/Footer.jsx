import React from 'react';

import { Copyright } from '../copyright';

const menuLinks = [
  { anchor: 'Shop', link: '/' },
  { anchor: 'About', link: '/' },
  { anchor: 'Journal', link: '/' },
  { anchor: 'Contact Us', link: '/' }
];

const helpLinksBig = [
  { anchor: 'Shipping Information', link: '/' },
  { anchor: 'Returns \& Exchange', link: '/' },
  { anchor: 'Terms \& Conditions', link: '/' },
  { anchor: 'Privacy Policy', link: '/' }
];

const helpLinksShort = [
  { anchor: 'FAQs', link: '/' },
  { anchor: 'Contact', link: '/' }
];

const socialNetworks = [
  { link: '/', icon: 'map-marker' },
  { link: '/', icon: 'phone' },
  { link: '/', icon: 'envelope' }
];

const contacts = [
  {
    anchor: '203 Fake St. Mountain View, San Francisco, California, USA',
    link: '/',
    icon: 'map-marker'
  },
  {
    anchor: '+2 392 3929 210',
    link: '/',
    icon: 'phone'
  },
  {
    anchor: 'info@yourdomain.com',
    link: '/',
    icon: 'envelope'
  }
];

export class Footer extends React.Component {
  render() {
    return (
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row">
            <div className="mouse">
              <a href="/" className="mouse-icon">
                <div className="mouse-wheel"><span className="ion-ios-arrow-up" /></div>
              </a>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Vegefoods</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  {socialNetworks.map((socialNetwork, index) => (
                    <li key={index}><a href={socialNetwork.link}><span className={`icon-${socialNetwork.icon}`} /></a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Menu</h2>
                <ul className="list-unstyled">
                  {menuLinks.map((menuLink, index) => (
                    <li key={index}><a href={menuLink.link} className="py-2 d-block">{menuLink.anchor}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Help</h2>
                <div className="d-flex">
                  <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                    {helpLinksBig.map((helpLink, index) => (
                      <li key={index}><a href={helpLink.link} className="py-2 d-block">{helpLink.anchor}</a></li>
                    ))}
                  </ul>
                  <ul className="list-unstyled">
                    {helpLinksShort.map((helpLink, index) => (
                      <li key={index}><a href={helpLink.link} className="py-2 d-block">{helpLink.anchor}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    {contacts.map((contact, index) => (
                      <li key={index}>
                        <a href={contact.link}>
                          <span className={`icon icon-${contact.icon}`}></span>
                          <span className="text">{contact.anchor}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <Copyright text="All rights reserved | This template is made with" />
        </div>
      </footer>
    );
  }
}
