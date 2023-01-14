import React from "react";
import { Link } from "gatsby";

import { ExternalLinkIcon } from "../assets/ExternalLinkIcon";
import blog from "../assets/nav-blog.png";
import floppyLogo from "../assets/floppylogo.png";
import floppy from "../assets/nav-floppy.png";
import github from "../assets/nav-github.png";
import projects from "../assets/nav-projects.png";
import moon from "../assets/moon.png";
import { slugify } from "../utils/helpers";

const mainNavItems = [
  { url: "/", icon: floppy, label: "Home", mobileOnly: true },
  { url: "/me", icon: floppy, label: "About" },
  { url: "/blog", icon: blog, label: "Blog" },
  { url: "/projects", icon: projects, label: "Projects" },
  { url: "/design", icon: projects, label: "Design" },
];

const socialNavItems = [
  { url: "https://github.com/eldoraboo", icon: github, label: "GitHub" },
  { url: "https://linkedin.com/in/eldoraboo", icon: github, label: "LinkedIn" },
];

export const Navigation = ({ theme, onUpdateTheme }) => {
  return (
    <section className="navigation">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="item brand">
            <img src={floppyLogo} className="logo" alt="Eldora Boo" />
            <span>Eldora Boo</span>
          </Link>
          <nav>
            {mainNavItems.map((item) => (
              <div className="nav-item-outer" key={item.url}>
                <Link
                  to={item.url}
                  key={item.label}
                  activeClassName="active"
                  className={`item ${slugify(item.label)} ${
                    item.mobileOnly ? "mobile-only" : ""
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              </div>
            ))}

            {socialNavItems.map((item) => (
              <div className="nav-item-outer" key={item.url}>
                <img src={item.icon} alt={item.label} className="nav-image" />
                <a
                  href={item.url}
                  key={item.label}
                  className={`desktop-only item ${slugify(item.label)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.label}</span>
                  <ExternalLinkIcon />
                </a>
              </div>
            ))}
          </nav>
        </div>
        <div className="theme-toggle">
          <button onClick={onUpdateTheme}>
            <img src={moon} alt="Theme" />
          </button>
        </div>
      </div>
    </section>
  );
};
