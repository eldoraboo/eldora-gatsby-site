import React from 'react'

import netlify from '../assets/netlify.png'
import gatsby from '../assets/gatsby.png'
import github from '../assets/nav-github.png'

const links = [
  { url: 'https://eldoraboo.substack.com/subscribe', label: 'Newsletter' },
  { url: 'https://ko-fi.com/eldoraboo', label: 'Ko-Fi' },
  { url: 'https://patreon.com/eldoraboo', label: 'Patreon' },
  { url: 'https://eldoraboo.github.io/rss.xml', label: 'RSS' },
]
const madeWithLinks = [
  { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/eldoraboo', label: 'GitHub', icon: github },
  { url: 'https://www.netlify.com', label: 'Netlify', icon: netlify },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <nav>
          <span className="desktop-only">Made by Eldora Boo</span>
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <nav>
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              <span>{link.label}</span>
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
        </nav>
      </section>
    </footer>
  )
}
