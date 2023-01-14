
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/eldoraboo/Desktop/eldora-gatsby-site/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/eldoraboo/Desktop/eldora-gatsby-site/src/pages/blog.js")),
  "component---src-pages-design-js": preferDefault(require("/Users/eldoraboo/Desktop/eldora-gatsby-site/src/pages/design.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/eldoraboo/Desktop/eldora-gatsby-site/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/eldoraboo/Desktop/eldora-gatsby-site/src/pages/projects.js")),
  "component---src-templates-category-js": preferDefault(require("/Users/eldoraboo/Desktop/eldora-gatsby-site/src/templates/category.js")),
  "component---src-templates-page-js": preferDefault(require("/Users/eldoraboo/Desktop/eldora-gatsby-site/src/templates/page.js")),
  "component---src-templates-post-js": preferDefault(require("/Users/eldoraboo/Desktop/eldora-gatsby-site/src/templates/post.js")),
  "component---src-templates-tag-js": preferDefault(require("/Users/eldoraboo/Desktop/eldora-gatsby-site/src/templates/tag.js"))
}

