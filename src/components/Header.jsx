import React from "react";
import "./Header.css";

function Header() {
  const NavLink = [
    {
      href: "/",
      link: "Home",
    },
    {
      href: "/about",
      link: "About",
    },
    {
      href: "/contact",
      link: "Contact",
    },
  ];
  return (
    <div className="relative z-[9999] w-full text-white">
      <nav className="fixed -translate-x-1/2 top-8 left-1/2 ">
        <ul className="flex items-center gap-3 px-4 py-2 bg-white border-[0.5px] border-[#9797976d] rounded-full bg-opacity-10 backdrop-blur-lg">
          {NavLink.map((link) => (
            <li className="transition-all ease-linear hover:text-sky-500">
              <a href={link.href}>{link.link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div class="brutalist-card__actions">
        <a
          class="brutalist-card__button brutalist-card__button--mark text-white rounded-full"
          href="#"
        >
          Hire Me!
        </a>
      </div>
    </div>
  );
}

export default Header;
