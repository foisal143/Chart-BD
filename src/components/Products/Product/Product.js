import React from 'react';

const Product = ({ product }) => {
  const { imageUrl, price, name, features } = product;
  return (
    <div className="border flex justify-center items-center shadow-md border-slate-200 rounded-md p-2 ">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p>Price: ${price}</p>
        <ul className="list-disc">
          <span className="font-semibold">Features</span>
          {features.map((feature, indx) => (
            <li className="ms-5" key={indx}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
