import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { slugify } from '../utils/helpers'
import me from '../../static/profile.jpg'

export const PostSidebar = ({
  tags = [],
  date,
  categories = [],
  thumbnail,
}) => {
  const category = categories?.filter((category) => category !== 'Highlight')

  return (
    <aside className="post-sidebar">
      {thumbnail && (
        <div className="post-image">
          <Img fixed={thumbnail.childImageSharp?.fixed} />
        </div>
      )}
      <div className="post-sidebar-card">
        <h2>About me</h2>
        <img src={me} alt="Eldora" className="sidebar-avatar" />
        <p>
          Hello and thanks for visiting! My name is{' '}
          <Link to="/me">Eldora Boo</Link>, and this is my website and digital
          garden. 🌱
        </p>
        <p>
          I'm a software developer who creates open-source projects and writes
          about code, design, and life. This site is and has always been free of
          ads, trackers, social media, affiliates, and sponsored posts.
        </p>
      </div>
      <div className="post-sidebar-card">
        <h2>Details</h2>
        <ul>
          <li>Published {date}</li>
        </ul>

        <h2>Categories</h2>
        <div className="tags">
          {categories.map((category) => {
            return (
              <Link
                key={category}
                to={`/categories/${slugify(category)}`}
                className="tag"
                activeClassName="active"
              >
                {category}
              </Link>
            )
          })}
        </div>
        
        <br></br>

        <h2>Tags</h2>
        <div className="tags">
          {tags.map((tag) => {
            return (
              <Link
                key={tag}
                to={`/tags/${slugify(tag)}`}
                className="tag"
                activeClassName="active"
              >
                {tag}
              </Link>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
