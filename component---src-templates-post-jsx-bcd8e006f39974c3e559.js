(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Bl7J:function(e,t,n){"use strict";var r=n("q1gF"),a=n("q1tI"),i=n.n(a),o=n("Wbzz"),l=n("YwZP"),u=n("ma3e"),s=(n("YT/5"),n("kiQV"));t.a=function(e){var t=e.page,n=e.children,a=r.data,c=a.site,f=a.allOrgContent,m=c.siteMetadata,p=m.title,d=m.description,b=f.nodes;return i.a.createElement(i.a.Fragment,null,i.a.createElement("title",null,p+(t?" - "+t:"")),i.a.createElement("div",{className:"header"},i.a.createElement(o.a,{to:"/",style:{float:"left"}},i.a.createElement("h1",null,p)),i.a.createElement("p",{style:{float:"right"}},i.a.createElement("i",null,d))),i.a.createElement("div",{className:"header"},i.a.createElement("div",{style:{float:"left"}},i.a.createElement("button",{onClick:function(){return Object(l.navigate)("/")}},"Home"),i.a.createElement("button",{onClick:function(){return Object(l.navigate)("/tags")}},"Tags"),i.a.createElement("button",{onClick:function(){return Object(l.navigate)("/archive")}},"Archive")),i.a.createElement("div",{style:{float:"right"}},b.map((function(e){return i.a.createElement("button",{key:e.fields.slug,onClick:function(){return Object(l.navigate)(e.fields.slug)}},e.metadata.title)})),i.a.createElement("button",{onClick:function(){return Object(l.navigate)("/rss.xml")}},i.a.createElement(u.e,null)),i.a.createElement("button",{onClick:function(){return Object(l.navigate)("https://github.com/randomrambler/dwim")}},i.a.createElement(u.d,null)))),n,i.a.createElement("footer",null,"© 2020 ",i.a.createElement("a",{href:"mailto:"+s.email},s.author),", v",s.version))}},GNkg:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return b}));n("91GP");var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=n("tcVi"),l=n.n(o),u=n("ma3e"),s=n("Bl7J"),c=n("AYpS"),f=n.n(c);function m(e){var t=e.children;return a.a.createElement("a",{href:"/tags#"+t},t)}function p(e){var t=e.tags,n=e.children;return t.length<=0?a.a.createElement("p",null):a.a.createElement("p",{className:f.a.tags},n," ",t.map((function(e,t){return[t>0&&", ",a.a.createElement(m,{key:t},e)]})))}function d(e){var t=e.fields,n=e.metadata,r=e.side;return t?a.a.createElement("div",{style:{float:r}},a.a.createElement(i.a,{to:t.slug},"left"===r?a.a.createElement(u.a,null):null," ",n.title," ","right"===r?a.a.createElement(u.b,null):null)):""}t.default=function(e){var t=e.data,n=e.pageContext,r=t.orgContent,i=r.metadata,o=r.html,u=n.previous,c=n.next;return a.a.createElement(s.a,{page:i.title},a.a.createElement("p",{style:{textAlign:"right",fontSize:"80%"}},i.date),a.a.createElement("h1",null,i.title),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}}),a.a.createElement(p,{tags:i.tags},"tags:"),a.a.createElement("div",{style:{overflow:"hidden"}},a.a.createElement(d,Object.assign({},u,{side:"left"})),a.a.createElement(d,Object.assign({},c,{side:"right"}))),a.a.createElement(l.a,{repo:"randomrambler/dwim",type:"pathname"}))};var b="3107745853"},J5OX:function(e,t,n){"use strict";n("Tze0"),n("V+eJ"),n("hHhE"),n("/SS/"),n("rE2o"),n("ioFf"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.identifierTypes=void 0;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("q1tI")),i=(r=n("17x9"))&&r.__esModule?r:{default:r};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=["pathname","url","title","og:title","issue-number","issue-term"],m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,s(t).call(this,e))).myRef=a.default.createRef(),n.state={pending:!0},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.repo,r=t.type,a=t.specificTerm,i=t.issueNumber,o=function(e){if(!(f.indexOf(e)<0))return"issue-number"===e?"issue-number":"issue-term";console.warn("Wrong type: "+e)}(r),l=function(e,t,n){if(!(f.indexOf(e)<0))return"pathname"===e?"pathname":"url"===e?"url":"title"===e?"title":"og:title"===e?"og:title":"issue-term"===e?t:"issue-number"===e?n:void 0;console.warn("Wrong type: "+e)}(r,a,i);if("issue-term"!==r||l)if("issue-number"===r&&(isNaN(l)||l<1))console.warn("When type is '".concat(r,"', valid 'issueNumber' prop must be provided"));else{var u=document.createElement("script");u.src="https://utteranc.es/client.js",u.async=!0,u.setAttribute("repo",n),u.setAttribute("crossorigin","anonymous"),u.setAttribute(o,l),u.onload=function(){return e.setState({pending:!1})},this.myRef.current.appendChild(u)}else console.warn("When type is '".concat(r,"', 'specificTerm' prop must be provided"))}},{key:"render",value:function(){return a.default.createElement("div",{className:"react-utterences",ref:this.myRef},this.props.debug&&a.default.createElement("pre",{style:{background:"#cccccc",padding:10}},"\nthis.props: ".concat(JSON.stringify(this.props,null,2),'\nlocation.pathname: "').concat(window.location.pathname,'"\nlocation.href: "').concat(window.location.href,'"\n          ').trim()),this.props.debug&&a.default.createElement("div",null,"👇👇If the settings are valid, the comment widget appear below👇👇"),this.state.pending&&a.default.createElement("div",null,"Loading script..."))}}])&&l(n.prototype,r),i&&l(n,i),t}(a.Component);t.identifierTypes={pathname:{attrValue:"",summary:"Issue title contains page pathname"},url:{attrValue:"url",summary:"Issue title contains page URL"},title:{attrValue:"title",summary:"Issue title contains page title"},"og:title":{attrValue:"og:title",summary:"Issue title contains page og:title"},"issue-number":{attrValue:-1,summary:"Specific issue number"},"issue-term":{attrValue:"",summary:"Issue title contains specific term"}},m.propTypes={type:i.default.string.isRequired,repo:i.default.string.isRequired,specificTerm:i.default.string,issueNumber:i.default.number,hashKey:i.default.string,debug:i.default.bool};var p=m;t.default=p},Wbzz:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("+ZDr"),o=n.n(i);n.d(t,"a",(function(){return o.a}));n("lw3w"),n("emEt").default.enqueue,a.a.createContext({})},kiQV:function(e){e.exports=JSON.parse('{"name":"dwim","version":"0.2.0","description":"Do What I Mean","main":"index.js","scripts":{"start":"gatsby develop -o","build":"gatsby build","serve":"gatsby serve -o"},"keywords":["blog","gatsby"],"author":"Vrind","email":"vrind@dwim.nl","license":"ISC","dependencies":{"@mdx-js/mdx":"^1.5.7","@mdx-js/react":"^1.5.7","gatsby":"^2.20.2","gatsby-plugin-feed":"^2.4.0","gatsby-source-filesystem":"^2.2.1","gatsby-transformer-orga":"^1.8.4","prism-react-renderer":"^1.0.2","react":"^16.13.1","react-dom":"^16.13.1","react-icons":"^3.9.0","react-utterances":"^0.6.4"}}')},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},q1gF:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"DWIM(.nl)","description":"Do What I Mean"}},"allOrgContent":{"nodes":[{"id":"fda0bb5e-5d35-5401-9fb5-994f9bcecd3c >>> OrgFile >>> OrgContent[31]","metadata":{"title":"About me","date":"2021 June 11th"},"fields":{"slug":"/about-me"}}]}}}')},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},tcVi:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"identifierTypes",{enumerable:!0,get:function(){return r.identifierTypes}});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("J5OX"))}}]);
//# sourceMappingURL=component---src-templates-post-jsx-bcd8e006f39974c3e559.js.map