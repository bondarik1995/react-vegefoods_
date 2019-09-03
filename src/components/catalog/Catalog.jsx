import React from 'react';

import { CatalogItem } from '../catalogItem';
import product1Img from './images/product-1.jpg';
import product2Img from './images/product-2.jpg';
import product3Img from './images/product-3.jpg';
import product4Img from './images/product-4.jpg';
import product5Img from './images/product-5.jpg';
import product6Img from './images/product-6.jpg';
import product7Img from './images/product-7.jpg';
import product8Img from './images/product-8.jpg';
import product9Img from './images/product-9.jpg';
import product10Img from './images/product-10.jpg';
import product11Img from './images/product-11.jpg';
import product12Img from './images/product-12.jpg';

const catalog = [
  {
    name: 'Bell Pepper',
    discount: '30%',
    price: '80.00',
    oldPrice: '120.00',
    image: product1Img
  },
  {
    name: 'STRAWBERRY',
    price: '120.00',
    image: product2Img
  },
  {
    name: 'GREEN BEANS',
    price: '120.00',
    image: product3Img
  },
  {
    name: 'PURPLE CABBAGE',
    price: '120.00',
    image: product4Img
  },
  {
    name: 'TOMATOE',
    discount: '30%',
    price: '80.00',
    oldPrice: '120.00',
    image: product5Img
  },
  {
    name: 'BROCOLLI',
    price: '120.00',
    image: product6Img
  },
  {
    name: 'CARROTS',
    price: '120.00',
    image: product7Img
  },
  {
    name: 'FRUIT JUICE',
    price: '120.00',
    image: product8Img
  },
  {
    name: 'ONION',
    discount: '30%',
    price: '80.00',
    oldPrice: '120.00',
    image: product9Img
  },
  {
    name: 'APPLE',
    price: '120.00',
    image: product10Img
  },
  {
    name: 'GARLIC',
    price: '120.00',
    image: product11Img
  },
  {
    name: 'CHILLI',
    price: '120.00',
    image: product12Img
  }
];

export class Catalog extends React.Component {
  render() {
    return (
      <div className="row">
        {catalog.map((item, index) => (
          <CatalogItem
            key={index}
            name={item.name}
            discount={item.discount}
            price={item.price}
            oldPrice={item.oldPrice}
            image={item.image}
          />
        ))}
      </div>
    );
  }
}
