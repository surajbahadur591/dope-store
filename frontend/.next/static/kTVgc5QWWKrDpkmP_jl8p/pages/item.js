(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{13:function(e,t,n){e.exports=n(50)},26:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var r="https://dopestore-yoga-prod.herokuapp.com/",o=4},335:function(e,t,n){__NEXT_REGISTER_PAGE("/item",function(){return e.exports=n(355),{page:e.exports.default}})},355:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=(n(8),n(23),n(45),n(1)),a=n(3),u=n.n(a),c=n(2),l=n(13),f=n.n(l);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    query SINGLE_ITEM_QUERY($id: ID!) {\n        item(where : {id : $id}){\n            id\n            title\n            description\n            largeImage\n        }\n    }\n"]);return b=function(){return e},e}var g=c.b.div.withConfig({displayName:"SingleItem__SingleItemStyles",componentId:"mflgtv-0"})(["max-width:1200px;margin:2rem auto;box-shadow:",";display:grid;grid-auto-columns:1fr;grid-auto-flow:column;min-height:800px;img{width:100%;height:100%;object-fit:cover;}.details{margin:1rem;font-size:2rem;}"],function(e){return e.theme.bs}),h=u()(b()),v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,d(t).apply(this,arguments))}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement(i.Query,{query:h,variables:{id:this.props.id}},function(e){var t=e.error,n=e.loading,r=e.data;return t?o.a.createElement("p",null,"Error!"):n?o.a.createElement("p",null,"Loading...."):r.item?o.a.createElement(g,null,o.a.createElement(f.a,null,o.a.createElement("title",null," Dope Strore | ",r.item.title)),o.a.createElement("img",{src:r.item.largeImage}),o.a.createElement("div",{className:"details"},o.a.createElement("h2",null," ",r.item.title),o.a.createElement("p",null," ",r.item.description))):o.a.createElement("p",null,"No item found")})}}])&&s(n.prototype,a),u&&s(n,u),t}();t.default=function(e){return o.a.createElement("div",null,o.a.createElement(v,{id:e.query.id}))}},45:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n(3),u=n.n(a),c=n(2),l=n(8),f=n.n(l),p=(n(6),c.b.h3.withConfig({displayName:"Title",componentId:"sc-16nq74k-0"})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:",";display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"],function(e){return e.theme.red})),s=c.b.div.withConfig({displayName:"ItemStyles__Item",componentId:"sc-16pk14u-0"})(["background:white;border:1px solid ",";box-shadow:",";position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid ",";grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:",";& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"],function(e){return e.theme.offWhite},function(e){return e.theme.bs},function(e){return e.theme.lightgrey},function(e){return e.theme.lightgrey}),m=c.b.span.withConfig({displayName:"PriceTag",componentId:"nwbk6t-0"})(["background:",";transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"],function(e){return e.theme.red}),d=n(14);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\nmutation DELETE_ITEM_MUTATION($id: ID!){\n    deleteItem(id: $id){\n        id\n    }\n\n}\n    \n"]);return w=function(){return e},e}var E=u()(w()),O=function(e){function t(){var e,n,r,o,i,a,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,l=new Array(c),f=0;f<c;f++)l[f]=arguments[f];return r=this,n=!(o=(e=g(t)).call.apply(e,[this].concat(l)))||"object"!==y(o)&&"function"!=typeof o?v(r):o,i=v(v(n)),u=function(e,t){var n=e.readQuery({query:V});console.log(n),n.items=n.items.filter(function(e){return e.id!=t.data.deleteItem.id}),e.writeQuery({query:V,data:n})},(a="update")in i?Object.defineProperty(i,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[a]=u,n}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this;return o.a.createElement(i.Mutation,{mutation:E,variables:{id:this.props.id},update:this.update},function(t,n){n.error;return o.a.createElement("button",{onClick:function(){confirm("are you sure?")&&t().catch(function(e){alert(e.message)})}}," ",e.props.children)})}}])&&b(n.prototype,a),u&&b(n,u),t}(),_=n(5);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    mutation addToCart($id: ID!){\n        addToCart(id: $id){\n            id\n            quantity\n        }\n    }\n"]);return k=function(){return e},e}var C=u()(k()),T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,P(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.id;return o.a.createElement(i.Mutation,{mutation:C,variables:{id:e},refetchQueries:[{query:_.a}]},function(e,t){var n=t.loading;return o.a.createElement("button",{disabled:n,onClick:e},"+Add",n&&"ing"," to Cart")})}}])&&x(n.prototype,r),a&&x(n,a),t}();function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,R(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props.item;return o.a.createElement(s,null,e.image&&o.a.createElement("img",{src:e.image,alt:e.title}),o.a.createElement(p,null,o.a.createElement(f.a,{href:{pathname:"/item",query:{id:e.id}}},o.a.createElement("a",null,e.title))),o.a.createElement(m,null,Object(d.a)(e.price)),o.a.createElement("p",null,e.description),o.a.createElement("div",{className:"buttonList"},o.a.createElement(f.a,{href:{pathname:"/update",query:{id:e.id}}},o.a.createElement("a",null,"Edit")),o.a.createElement(T,{id:e.id}),o.a.createElement(O,{id:e.id}," Delete This Item")))}}])&&N(n.prototype,i),a&&N(n,a),t}(),A=c.b.div.withConfig({displayName:"PaginationStyles",componentId:"aduuar-0"})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:2px solid ",";& > *{margin:0;background-color:white;padding:15px 30px;border-right:1px solid ",";&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"],function(e){return e.theme.red},function(e){return e.theme.lightgrey}),D=n(26),M=n(13),$=n.n(M);function G(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n\nquery PAGINATION_QUERY {\n    itemsConnection {\n        aggregate {\n            count\n        }\n    }\n}\n"]);return G=function(){return e},e}var U=u()(G()),Y=function(e){return o.a.createElement(i.Query,{query:U},function(t){var n=t.data,r=t.loading;if(t.error,r)return o.a.createElement("p",null," loading....");var i=n.itemsConnection.aggregate.count,a=Math.ceil(i/D.a),u=e.page;return o.a.createElement("div",null,o.a.createElement(A,null,o.a.createElement($.a,null,o.a.createElement("title",null,"Dope Store | Page ",u," of ",a)),o.a.createElement(f.a,{prefetch:!0,href:{pathname:"items",query:{page:u-1}}}," Prev "),o.a.createElement("p",null,"You are on Page ",e.page," of ",a),o.a.createElement("p",null,i,"  Items Total"),o.a.createElement(f.a,{prefetch:!0,href:{pathname:"items",query:{page:u+1}}}," Next ")))})};function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    query ALL_ITEMS_QUERY {\n        items {\n            id\n            title\n            price\n            description\n            image\n            largeImage\n        }\n    }\n"]);return H=function(){return e},e}n.d(t,"a",function(){return V});var K=c.b.div.withConfig({displayName:"Items__Center",componentId:"tikday-0"})(["text-align:center;"]),V=u()(H()),Z=c.b.div.withConfig({displayName:"Items__ItemsList",componentId:"tikday-1"})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:50px;max-width:",";margin:0 auto;"],function(e){return e.theme.maxWidth}),ee=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),X(this,B(t).apply(this,arguments))}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement(K,null,o.a.createElement(Y,{page:this.props.page}),o.a.createElement(i.Query,{query:V},function(e){var t=e.data,n=e.error;return e.loading?o.a.createElement("p",null,"Loading..."):n?o.a.createElement("p",null,"Error... ",n.message):o.a.createElement(Z,null,t.items.map(function(e){return o.a.createElement(Q,{key:e.id,item:e})}))}),o.a.createElement(Y,{page:this.props.page}))}}])&&W(n.prototype,a),u&&W(n,u),t}();t.b=ee}},[[335,1,0]]]);