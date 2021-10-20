import { useState } from "react";
import Link from "next/link";
import AnimateHeight from "react-animate-height";

export const NavbarItem = (props) => {
  return (
    <Link href={props.href}>
      <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-700 items-center justify-center hover:bg-gray-900 hover:text-white">
        {props.children}
      </a>
    </Link>
  );
};

export default function Navbar() {
  const [height, setHeight] = useState('auto');

  const toggleHeight = () => {
    setHeight(height === 0 ? "auto" : 0);
  };

  return (
    <nav className="z-10 fixed top-0 left-0 right-0 py-3 px-7 lg:px-32 bg-white">
      <div className="container max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap items-center justify-evenly w-full">
        <Link href="/">
          <a className="p-2 mr-4 flex items-center">
            <img
              className="w-60"
              src="../assets/logo.jpg"
              alt="bellshade"
              title="Bellshade - Learn with Our Community"
            />
          </a>
        </Link>

        <button
          className="inline-flex p-2 text-gray-700 bg-gray-100 text-lg hover:bg-gray-900 rounded lg:hidden ml-auto mr-4 hover:text-white outline-none nav-toggler"
          onClick={toggleHeight}
          aria-expanded={height !== 0}
          aria-controls="navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>

        <AnimateHeight
          className="h-0 lg:h-auto w-full lg:inline-flex lg:flex-grow lg:w-full lg:justify-center"
          duration={500}
          height={height}
          id="navigation"
        >
          <div className="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start text-lg flex flex-col lg:h-auto">
            <NavbarItem href="#homes">
              <span>Home</span>
            </NavbarItem>
            <NavbarItem href="#about">
              <span>About</span>
            </NavbarItem>
            <NavbarItem href="#projects">
              <span>Projects</span>
            </NavbarItem>
            <NavbarItem href="#teams">
              <span>Our Team</span>
            </NavbarItem>
            <NavbarItem href="#contact">
              <span>Contact</span>
            </NavbarItem>
            <a
              href="https://github.com/bellshade"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden text-white inline-block px-4 py-1 bg-blue-600 text-lg hover:bg-gray-900 rounded lg:right-8 hover:text-white outline-none lg:absolute"
            >
              Github
            </a>
          </div>
        </AnimateHeight>
        <a
          href="https://github.com/bellshade"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-white lg:inline-block px-4 py-1 lg:ml-10 bg-blue-600 text-lg hover:bg-gray-900 rounded lg:right-8 hover:text-white outline-none"
        >
          Github
        </a>
      </div>
    </nav>
  );
}
