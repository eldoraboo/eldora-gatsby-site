"use strict";(self.webpackChunkeldoraboo_github_io=self.webpackChunkeldoraboo_github_io||[]).push([[969],{3270:function(e,t,a){a.d(t,{V:function(){return r}});var n=a(7294),r=function(e){var t=e.highlight,a=e.subTitle,r=e.title,l=e.children,c=e.index;return n.createElement("header",{className:"hero "+(c?"index":"")},a&&n.createElement("div",{className:"sub-title"},t&&n.createElement("span",{className:"highlight"},t),a),r&&n.createElement("h1",null,r),l&&l)}},2072:function(e,t,a){a.d(t,{V:function(){return s}});var n=a(5785);var r=a(7294),l=a(5444),c=function(e){var t,a=e.node,n=e.prefix,c=e.newspaper;if(a.date){var i=a.date.split(" ");i.pop(),i[0]=i[0].slice(0,3),t=i.join(" ").slice(0,-1)}return r.createElement(l.Link,{to:n?"/"+n+a.slug:a.slug,key:a.id,className:"post"},c?r.createElement(r.Fragment,null,r.createElement("time",null,t),r.createElement("h3",null,a.title)):r.createElement(r.Fragment,null,r.createElement("h3",null,a.title),r.createElement("time",{style:{marginLeft:"auto"}},t)))},i=["data","showYears","query","prefix","hideDate","yearOnly"],s=function(e){var t=e.data,a=void 0===t?[]:t,l=e.showYears,s=e.query,u=e.prefix,m=e.hideDate,o=e.yearOnly,d=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,i),f=(0,r.useMemo)((function(){var e={};return a.forEach((function(t){var a,r=null===(a=t.date)||void 0===a?void 0:a.split(", ")[1];e[r]=[].concat((0,n.Z)(e[r]||[]),[t])})),e}),[a]),E=(0,r.useMemo)((function(){return Object.keys(f).reverse()}),[f]);return l?E.map((function(e){return r.createElement("section",{key:e,className:"segment"},r.createElement("h2",{className:"year"},e),r.createElement("div",{className:"posts"},f[e].map((function(e){return r.createElement(c,{key:e.id,node:e,query:s,prefix:u})}))))})):r.createElement("div",{className:d.newspaper?"posts newspaper":"posts"},a.map((function(e){return r.createElement(c,Object.assign({key:e.id,node:e,query:s,prefix:u,hideDate:m,yearOnly:o},d))})))}},7917:function(e,t,a){a.d(t,{C:function(){return i}});var n=a(7294),r=a(5444),l=a(8415),c=function(){var e=(0,r.useStaticQuery)("523315755"),t=e.categories.group,a=e.tags.group;return n.createElement("aside",{className:"post-sidebar"},n.createElement("div",{className:"post-sidebar-card"},n.createElement("h2",null,"Categories"),n.createElement("div",{className:"list"},t.filter((function(e){return"Highlight"!==e.name})).map((function(e){return n.createElement(r.Link,{key:e.name,to:"/categories/"+(0,l.lV)(e.name),className:"category",activeClassName:"active"},n.createElement("div",{className:"name"},e.name),n.createElement("div",{className:"count"},e.totalCount))})))),n.createElement("div",{className:"post-sidebar-card"},n.createElement("h2",null,"Tags"),n.createElement("div",{className:"tags"},a.map((function(e){return n.createElement(r.Link,{key:e.name,to:"/tags/"+(0,l.lV)(e.name),className:"tag",activeClassName:"active"},e.name)})))))},i=function(e){var t=e.children;return n.createElement("section",{className:"container markdown-content"},n.createElement("div",{className:"grid"},n.createElement("div",{className:"article-content"},t),n.createElement("div",{className:"sidebar-content"},n.createElement(c,null))))}},5847:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(5414),l=a(8496),c=a(2248),i=a(2072),s=a(3270),u=a(7917),m=a(8415),o=a(5501);function d(e){var t=e.data,a=e.pageContext.tag,l=t.allMarkdownRemark.totalCount,d=t.allMarkdownRemark.edges,f=(0,n.useMemo)((function(){return(0,m.Nx)(d)}),[d]),E=1===l?" post tagged:":" posts tagged:";return n.createElement("div",null,n.createElement(r.Z,{title:"Posts tagged: "+a+" | "+o.Z.siteTitle}),n.createElement(c.H,null),n.createElement(u.C,null,n.createElement(s.V,{highlight:l,subTitle:E,title:a}),n.createElement(i.V,{data:f,showYears:!0})))}d.Layout=l.A}}]);
//# sourceMappingURL=component---src-templates-tag-js-f35731e1e7295ab0c657.js.map