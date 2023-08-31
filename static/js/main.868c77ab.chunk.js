(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(8),s=c.n(i),a=(c(15),c(10)),n=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=c(9),m=c(6),b=c.n(m),u=c(7),v=c.n(u);c(21);var h=function(e){var t=e.setFoundMovie,c=Object(r.useState)(!1),i=Object(n.a)(c,2),s=i[0],a=i[1],d=Object(r.useState)(""),m=Object(n.a)(d,2),u=m[0],h=m[1],O=Object(r.useState)(null),p=Object(n.a)(O,2),x=p[0],f=p[1],N=Object(r.useState)(null),g=Object(n.a)(N,2),y=g[0],w=g[1],F=Object(r.useState)(!1),S=Object(n.a)(F,2),I=S[0],k=S[1],C=function(){var e=Object(j.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),k(!0),e.prev=2,e.next=5,i=u.trim(),fetch("".concat("https://www.omdbapi.com/?apikey=dbfa1d8e","&t=").concat(i)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}));case 5:"Response"in(c=e.sent)&&"False"===c.Response?(a(!0),f(null)):(a(!1),f(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a(!0);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}var i}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){if(x&&"Title"in x){var e={title:x.Title,description:x.Plot,imgUrl:x.Poster&&"N/A"!==x.Poster?x.Poster:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:"".concat("https://www.imdb.com/title","/").concat(x.imdbID),imdbId:x.imdbID};w(e)}}),[x]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:C,children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:v()("input",{"is-danger":s}),value:u,onChange:function(e){h(e.target.value),a(!1)}})}),s&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:v()("button","is-light",{"is-loading":I}),onClick:C,disabled:""===u,children:y?"Search again":"Find a movie"})}),y&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){y&&(t(y),h(""),f(null),w(null))},children:"Add to the list"})})]})]}),y&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:y})]})]})},O=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1],s=Object(r.useState)(null),o=Object(n.a)(s,2),j=o[0],m=o[1];return Object(r.useEffect)((function(){j&&c.every((function(e){return j.imdbId!==e.imdbId}))&&i([].concat(Object(a.a)(c),[j]))}),[j]),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{setFoundMovie:m})})]})};s.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.868c77ab.chunk.js.map