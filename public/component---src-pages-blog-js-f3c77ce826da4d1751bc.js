"use strict";(self.webpackChunktaniarascia_com=self.webpackChunktaniarascia_com||[]).push([[7],{2072:function(e,t,a){a.d(t,{V:function(){return i}});var n=a(5785);var r=a(7294),c=a(5444),l=function(e){var t,a=e.node,n=e.prefix,l=e.newspaper;if(a.date){var s=a.date.split(" ");s.pop(),s[0]=s[0].slice(0,3),t=s.join(" ").slice(0,-1)}return r.createElement(c.Link,{to:n?"/"+n+a.slug:a.slug,key:a.id,className:"post"},l?r.createElement(r.Fragment,null,r.createElement("time",null,t),r.createElement("h3",null,a.title)):r.createElement(r.Fragment,null,r.createElement("h3",null,a.title),r.createElement("time",{style:{marginLeft:"auto"}},t)))},s=["data","showYears","query","prefix","hideDate","yearOnly"],i=function(e){var t=e.data,a=void 0===t?[]:t,c=e.showYears,i=e.query,m=e.prefix,u=e.hideDate,o=e.yearOnly,d=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,s),f=(0,r.useMemo)((function(){var e={};return a.forEach((function(t){var a,r=null===(a=t.date)||void 0===a?void 0:a.split(", ")[1];e[r]=[].concat((0,n.Z)(e[r]||[]),[t])})),e}),[a]),E=(0,r.useMemo)((function(){return Object.keys(f).reverse()}),[f]);return c?E.map((function(e){return r.createElement("section",{key:e,className:"segment"},r.createElement("h2",{className:"year"},e),r.createElement("div",{className:"posts"},f[e].map((function(e){return r.createElement(l,{key:e.id,node:e,query:i,prefix:m})}))))})):r.createElement("div",{className:d.newspaper?"posts newspaper":"posts"},a.map((function(e){return r.createElement(l,Object.assign({key:e.id,node:e,query:i,prefix:m,hideDate:u,yearOnly:o},d))})))}},7917:function(e,t,a){a.d(t,{C:function(){return s}});var n=a(7294),r=a(5444),c=a(8415),l=function(){var e=(0,r.useStaticQuery)("523315755"),t=e.categories.group,a=e.tags.group;return n.createElement("aside",{className:"post-sidebar"},n.createElement("div",{className:"post-sidebar-card"},n.createElement("h2",null,"Categories"),n.createElement("div",{className:"list"},t.filter((function(e){return"Highlight"!==e.name})).map((function(e){return n.createElement(r.Link,{key:e.name,to:"/categories/"+(0,c.lV)(e.name),className:"category",activeClassName:"active"},n.createElement("div",{className:"name"},e.name),n.createElement("div",{className:"count"},e.totalCount))})))),n.createElement("div",{className:"post-sidebar-card"},n.createElement("h2",null,"Tags"),n.createElement("div",{className:"tags"},a.map((function(e){return n.createElement(r.Link,{key:e.name,to:"/tags/"+(0,c.lV)(e.name),className:"tag",activeClassName:"active"},e.name)})))))},s=function(e){var t=e.children;return n.createElement("section",{className:"container markdown-content"},n.createElement("div",{className:"grid"},n.createElement("div",{className:"article-content"},t),n.createElement("div",{className:"sidebar-content"},n.createElement(l,null))))}},223:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),r=a(5414),c=a(7165),l=a(2072),s=a(2248),i=a(7917),m=a(8415),u=a(5501);function o(e){var t=e.data.posts.edges,a=(0,n.useMemo)((function(){return(0,m.Nx)(t)}),[t]),c="Writing";return n.createElement("div",null,n.createElement(r.Z,{title:c+" | "+u.Z.siteTitle}),n.createElement(s.H,{customDescription:"Notes & tutorials"}),n.createElement(i.C,null,n.createElement("header",{className:"hero"},n.createElement("h1",null,c)),n.createElement(l.V,{data:a,showYears:!0})))}o.Layout=c.A}}]);
//# sourceMappingURL=component---src-pages-blog-js-f3c77ce826da4d1751bc.js.map