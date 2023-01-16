import React, { useMemo } from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
import Img from "gatsby-image";

import { ExternalLinkIcon } from "../assets/ExternalLinkIcon";
import { Layout } from "../components/Layout";
import { Posts } from "../components/Posts";
import { SEO } from "../components/SEO";
import { Heading } from "../components/Heading";
import { Hero } from "../components/Hero";
import { projectsList } from "../data/projectsList";
import { getSimplifiedPosts } from "../utils/helpers";
import config from "../utils/config";

export default function Index({ data }) {
  const latest = data.latest.edges;
  const highlights = data.highlights.edges;
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest]);

  return (
    <div>
      <Helmet title={config.siteTitle} />
      <SEO />

      <div className="container">
        <div className="hero-wrapper">
          <Hero title="Hey, I'm Eldora!" index>
            <p className="hero-description small width">
              Welcome to my digital garden. 🌱
              <br />
              <br />
              I'm a software developer in Singapore. I make{" "}
              <Link to="/projects">open-source projects</Link> and{" "}
              <Link to="/blog">write</Link> about code, design, and life. I like
              playing the piano, crocheting, synthwave, makeup, and coding.
              <br />
              <br />
              More <Link to="/me">about me</Link>.
            </p>
          </Hero>
          <div className="decoration">
            <img
              src="/ram.png"
              alt="RAM Ram"
              className="image"
              title="RAM Ram"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <section className="segment first">
          <Heading title="Latest Posts" slug="/blog" />

          <div className="highlight-preview">
            {simplifiedLatest.map((post) => {
              return (
                <div className="muted card flex" key={`${post.slug}`}>
                  <img src={post.thumbnail} />
                  <div>
                    <time>{post.date}</time>
                    <Link className="card-header" to={post.slug}>
                      {post.title}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="segment large">
          <Heading title="Projects" slug="/projects" />

          <div className="post-preview">
            {projectsList
              .filter((project) => project.highlight)
              .map((project) => {
                return (
                  <div className="anchored card" key={project.slug}>
                    <div>
                      <time>{project.date}</time>
                      <a
                        className="card-header"
                        href={`https://github.com/eldoraboo/${project.slug}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.name}
                      </a>
                      <p>{project.tagline}</p>
                    </div>
                    <div className="links anchored">
                      {project.writeup && (
                        <Link className="button small" to={project.writeup}>
                          Article
                        </Link>
                      )}
                      {project.url && (
                        <a
                          className="button small flex"
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo <ExternalLinkIcon />
                        </a>
                      )}
                      <a
                        className="button small flex"
                        href={`https://github.com/eldoraboo/${project.slug}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source <ExternalLinkIcon />
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
        {/*<section className="segment large">
          <Heading title="Newsletter" />
          <p>
            If I write something new, I'll let you know via newsletter. I don't
            update often, and don't spam ever.
          </p>
          <p>
            <a
              href="https://eldoraboo.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="button large"
            >
              Subscribe to the Newsletter
            </a>
          </p>
        </section>*/}
      </div>
    </div>
  );
}

Index.Layout = Layout;

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
          }
        }
      }
    }
    highlights: allMarkdownRemark(
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Highlight" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            shortTitle
            tags
            thumbnail {
              childImageSharp {
                fixed(width: 45, height: 45) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
