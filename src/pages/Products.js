import React from 'react';
import './Products.css';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';


const products = [
  {
    id: 1,
    name: 'منتج 1',
    description: 'وصف مختصر للمنتج 1',
    price: '100 ريال',
    image: img1,
  },
  {
    id: 2,
    name: 'منتج 2',
    description: 'وصف مختصر للمنتج 2',
    price: '150 ريال',
    image: img2,
  },
  {
    id: 3,
    name: 'منتج 3',
    description: 'وصف مختصر للمنتج 3',
    price: '200 ريال',
    image: img3,
  },
  {
    id: 4,
    name: 'منتج 4',
    description: 'وصف مختصر للمنتج 4',
    price: '250 ريال',
    image: img4,
  },
  {
    id: 5,
    name: 'منتج 5',
    description: 'وصف مختصر للمنتج 5',
    price: '300 ريال',
    image: img5,
  },
  {
    id: 6,
    name: 'منتج 6',
    description: 'وصف مختصر للمنتج 6',
    price: '350 ريال',
    image: img6,
  },
];

function Products() {
  return (
    <div>
      <h2>منتجاتنا</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
