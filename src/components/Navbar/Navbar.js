import React, { useEffect, useState } from 'react';
import Link from '../Link/Link';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetch('nav.json')
      .then(res => res.json())
      .then(link => setLinks(link));
  }, []);
  return (
    <nav className="h-20 sticky top-0 z-10 flex px-5 md:px-12 justify-between items-center bg-blue-950 text-white">
      <div>
        <a className="text-2xl font-semibold" href="/">
          CHART-BD
        </a>
      </div>
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden cursor-pointer"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-white" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-white" />
        )}
      </span>
      <ul
        className={`md:flex z-10 justify-center bg-blue-950 top-20 md:top-0 items-center fixed h-full duration-500 md:static ${
          isOpen ? 'right-0' : '-right-96'
        }`}
      >
        {links.map(link => (
          <Link link={link} key={link.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
