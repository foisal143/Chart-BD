import React, { useEffect, useState } from 'react';

import Chart from '../Chart/Chart';
import Product from './Product/Product';
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(product => setProducts(product));
  }, []);
  return (
    <div>
      <Chart products={products}></Chart>
      <div>
        <h1 className="text-center text-3xl font-semibold">
          All Products here
        </h1>
        <div className="grid my-12 w-10/12 mx-auto px-5 grid-cols-1 md:grid-cols-3 gap-5">
          {products.map(product => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
