import React from 'react';

const Link = ({ link }) => {
  return (
    <>
      <li className="mx-5 my-5 md:my-0">{link.name}</li>
    </>
  );
};

export default Link;
