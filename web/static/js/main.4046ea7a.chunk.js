(this["webpackJsonp@crypto-dev-amigos/client"]=this["webpackJsonp@crypto-dev-amigos/client"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(6),s=n.n(i),a=(n(11),n(12),n(13),n(2)),o=n.n(a),j=n(3),l=n(4);function u(e){return d.apply(this,arguments)}function d(){return(d=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout(e,t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=n(0),b=Date.now(),x=[],O=0,h=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O++,t=O,e.next=4,u(100);case 4:n=0;case 5:if(!(n<x.length&&t===O)){e.next=13;break}if(!(c=x[n])||!c()){e.next=10;break}return e.next=10,u(25);case 10:n++,e.next=5;break;case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();window.addEventListener("scroll",h),window.addEventListener("load",(function(){new IntersectionObserver(h).observe(document.getElementsByTagName("body")[0])}));var p=function(e){var t=e.children,n=e.onLoad,r=Object(c.useRef)(null),i=Object(c.useState)(!1),s=Object(l.a)(i,2),a=s[0],o=s[1],j=Object(c.useRef)(!1);return Object(c.useEffect)((function(){if(r.current){var e=r.current,t=x.length;x.push((function(){if(!r.current)return!1;if(j.current)return!1;var i=e.getBoundingClientRect(),s=window.scrollY+window.innerHeight,a=i.top<s;return!!a&&(console.log("isOnScreen",{time:Date.now()-b,iRelayout:t,divRect:i,screenBottom:s,isOnScreen:a}),j.current=!0,c(),o(!0),h(),null===n||void 0===n||n(),!0)}));var c=function(){x[t]=null};return function(){j.current=!0,c()}}}),[]),Object(f.jsxs)(f.Fragment,{children:[!a&&Object(f.jsx)("div",{ref:r,style:{minWidth:1e3,minHeight:1e3}}),a&&t]})},v=function(e){return"/data/".concat(e,"/project.json")},m=function(e,t){return"/data/".concat(e,"/").concat(t,".json")},y=function(e){return e.replace("ipfs://","https://gateway.pinata.cloud/ipfs/")},g=function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"nft-card",children:Object(f.jsx)("div",{style:{height:300},children:"Loading..."})})})},w=function(e){var t=e.nft;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"nft-card",children:[Object(f.jsx)("div",{children:Object(f.jsx)("b",{children:t.nft.name})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Rarity Score:"})," ",t.rarityScore.toFixed(2)]}),Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:y(t.nft.external_url),children:"External Link"})}),Object(f.jsx)("div",{className:"nft-card-image",children:Object(f.jsx)(p,{children:Object(f.jsx)("img",{alt:"nft",src:y(t.nft.image)})})}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"row",fontSize:"0.8em",color:"white"},children:[Object(f.jsx)("div",{style:{flex:1},children:"Content"}),Object(f.jsx)("div",{style:{flex:1},children:"Attribute"}),Object(f.jsx)("div",{style:{flex:1},children:"Commonality"}),Object(f.jsx)("div",{style:{flex:1},children:"Rarity Score"})]}),t.attributeRarities.map((function(e){return Object(f.jsx)(r.a.Fragment,{children:Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(f.jsx)("div",{style:{flex:1},children:e.trait_type}),Object(f.jsx)("div",{style:{flex:1},children:Object(f.jsx)("span",{style:"[Missing]"!==e.value?{fontWeight:"bold"}:{},children:e.value})}),Object(f.jsxs)("div",{style:{flex:1,position:"relative"},children:[Object(f.jsx)("div",{className:"bar-background",style:{position:"absolute",zIndex:0,width:"".concat((100*e.ratio).toFixed(0),"%"),height:"100%"}}),Object(f.jsx)("div",{style:{color:"#FFFFFF",position:"relative",zIndex:10},children:"".concat((100*e.ratio).toFixed(2),"%")})]}),Object(f.jsx)("div",{style:{flex:1},children:"".concat(e.ratioScore.toFixed(2))})]})},e.trait_type)}))]})]})})},F=function(e){var t=e.projectKey,n=e.tokenId,r=Object(c.useState)(null),i=Object(l.a)(r,2),s=i[0],a=i[1];return Object(c.useEffect)((function(){Object(j.a)(o.a.mark((function e(){var c,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=m(t,n),console.log("NftLoader",{nftUrl:c}),e.next=4,fetch(c);case 4:return r=e.sent,e.next=7,r.json();case 7:i=e.sent,a(i);case 9:case"end":return e.stop()}}),e)})))()}),[t,n]),Object(f.jsxs)(f.Fragment,{children:[!s&&Object(f.jsx)(g,{}),s&&Object(f.jsx)(w,{nft:s})]})},k=function(e){var t=e.items,n=e.getItemKey,r=e.ItemComponent,i=Object(c.useState)(12),s=Object(l.a)(i,2),a=s[0],o=s[1],j=Object(c.useRef)(12);j.current=a;var u=t.slice(0,a);return Object(f.jsx)(f.Fragment,{children:u.map((function(e,t){return Object(f.jsx)(p,{onLoad:function(){return function(e){j.current===a&&(e+3<a||(console.log("# LazyList: loadMore",{loadCount:a}),o((function(e){return e+12}))))}(t)},children:Object(f.jsx)(r,{item:e})},n(e))}))})},I=function(e){var t=e.projectKey,n=Object(c.useState)(null),r=Object(l.a)(n,2),i=r[0],s=r[1];return Object(c.useEffect)((function(){Object(j.a)(o.a.mark((function e(){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v(t),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,s(r);case 8:case"end":return e.stop()}}),e)})))()}),[t]),Object(f.jsx)(f.Fragment,{children:i&&Object(f.jsx)(K,{projectKey:t,projectRarity:i})})},K=function(e){var t=e.projectKey,n=e.projectRarity;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"nft-list",children:n&&Object(f.jsx)(k,{items:n.tokens,getItemKey:function(e){return"".concat(e.tokenId)},ItemComponent:function(e){var n=e.item;return Object(f.jsx)("div",{onClick:function(){return window.location.href="".concat(t,"/").concat(n.tokenId)},children:Object(f.jsx)(F,{projectKey:t,tokenId:"".concat(n.tokenId)})})}})})})},N=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/data/projects.json",e.next=3,fetch("/data/projects.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,i(n);case 8:case"end":return e.stop()}}),e)})))()}),[]),Object(f.jsx)(f.Fragment,{children:r&&Object(f.jsx)(S,{projects:r})})},S=function(e){var t=e.projects;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"nft-list",children:t&&Object(f.jsx)(k,{items:t.projects,getItemKey:function(e){return"".concat(e.projectKey)},ItemComponent:function(e){var t=e.item;return Object(f.jsx)(C,{projectKey:t.projectKey,project:t.projectMetadata})}})})})},C=function(e){var t=e.projectKey,n=e.project;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"nft-card",children:[Object(f.jsx)("div",{children:Object(f.jsx)("b",{children:n.name})}),Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:y(n.external_link),children:"External Link"})}),Object(f.jsx)("div",{className:"nft-card-image",onClick:function(){return window.location.href="".concat(t)},children:Object(f.jsx)(p,{children:Object(f.jsx)("img",{alt:"nft",src:y(n.image)})})})]})})};var L=function(){var e,t,n=window.location.pathname.split("/"),c=null!==(e=n[1])&&void 0!==e?e:void 0,r=null!==(t=n[2])&&void 0!==t?t:void 0;return console.log("route",{route:n,projectKey:c,tokenId:r}),c&&r?Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("div",{className:"nft-container-single",children:Object(f.jsx)(F,{projectKey:c,tokenId:r})})}):c?Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(I,{projectKey:c})}):Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(N,{})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),R()}},[[16,1,2]]]);
//# sourceMappingURL=main.4046ea7a.chunk.js.map