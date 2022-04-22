(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__6bVGu",control:"Checkout_control__hKRIo",actions:"Checkout_actions__1itCT",submit:"Checkout_submit__337Ly",invalid:"Checkout_invalid__258JW"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2miVn",total:"Cart_total__2PfBx",actions:"Cart_actions__1gssu","button--alt":"Cart_button--alt__UZf5g",button:"Cart_button__3gTXl"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3DlYz",summary:"CartItem_summary__3fNzd",price:"CartItem_price__3vsNn",amount:"CartItem_amount__2wUPl",actions:"CartItem_actions__2jr1U"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__zDkUy",icon:"HeaderCartButton_icon__3NOY6",badge:"HeaderCartButton_badge__3tPmF",bump:"HeaderCartButton_bump__37k5v"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__u38m9",modal:"Modal_modal__3ZJgM","slide-down":"Modal_slide-down__1DdiH"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3XtCp","meals-appear":"AvailableMeals_meals-appear__224FK",MealsError:"AvailableMeals_MealsError__3dfOJ",MealsLoading:"AvailableMeals_MealsLoading__1dCHD"}},function(e,t,n){e.exports={meal:"MealItem_meal__3LCfm",description:"MealItem_description__1mNkS",price:"MealItem_price__1vkWX"}},,,function(e,t,n){e.exports={header:"Header_header__2UYc2","main-image":"Header_main-image__3GXch"}},function(e,t,n){e.exports={card:"Card_card__1QHLm"}},function(e,t,n){e.exports={input:"Input_input__1QYcG"}},function(e,t,n){e.exports={form:"MealItemForm_form__3dYFT"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__K7iDA"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(27),n(2)),s=n(1),i=n.n(s),o=n(12),l=n(6),u=n.n(l),d=n(13),j=n.n(d),m=n(0),b=function(e){return Object(m.jsx)("div",{className:j.a.backdrop,onClick:e.onClose})},O=function(e){return Object(m.jsx)("div",{className:j.a.modal,children:Object(m.jsx)("div",{className:j.a.content,children:e.children})})},h=document.getElementById("overlays"),x=function(e){return Object(m.jsxs)(s.Fragment,{children:[a.a.createPortal(Object(m.jsx)(b,{onClose:e.onClose}),h),a.a.createPortal(Object(m.jsx)(O,{children:e.children}),h)]})},p=n(5),f=n.n(p),_=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),v=n(7),C=n.n(v),N=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:C.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:C.a.summary,children:[Object(m.jsx)("span",{className:C.a.price,children:t}),Object(m.jsxs)("span",{className:C.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:C.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},y=n(3),g=n.n(y),k=function(e){return""===e.trim()},A=function(e){var t=Object(s.useState)({name:!0,street:!0,postalCode:!0,city:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)();return Object(m.jsxs)("form",{className:g.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=o.current.value,r=l.current.value,s=u.current.value,d=!k(n),j=!k(c),m=5===r.trim().length,b=!k(s);a({name:d,street:j,postalCode:m,city:b}),d&&j&&m&&b&&e.onConfirm({name:n,street:c,postalCode:r,city:s})},children:[Object(m.jsxs)("div",{className:"".concat(g.a.control," ").concat(c.name?"":g.a.invalid),children:[Object(m.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(m.jsx)("input",{type:"text",id:"name",ref:i}),!c.name&&Object(m.jsx)("p",{children:"Please enter a valid name!"})]}),Object(m.jsxs)("div",{className:"".concat(g.a.control," ").concat(c.street?"":g.a.invalid),children:[Object(m.jsx)("label",{htmlFor:"street",children:"Street"}),Object(m.jsx)("input",{type:"text",id:"street",ref:o}),!c.street&&Object(m.jsx)("p",{children:"Please enter a valid street!"})]}),Object(m.jsxs)("div",{className:"".concat(g.a.control," ").concat(c.postalCode?"":g.a.invalid),children:[Object(m.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(m.jsx)("input",{type:"text",id:"postal",ref:l}),!c.postalCode&&Object(m.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(m.jsxs)("div",{className:"".concat(g.a.control," ").concat(c.city?"":g.a.invalid),children:[Object(m.jsx)("label",{htmlFor:"city",children:"City"}),Object(m.jsx)("input",{type:"text",id:"city",ref:u}),!c.city&&Object(m.jsx)("p",{children:"Please enter a valid city!"})]}),Object(m.jsxs)("div",{className:g.a.actions,children:[Object(m.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(m.jsx)("button",{className:g.a.submit,children:"Confirm"})]})]})},M=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(!1),l=Object(r.a)(i,2),d=l[0],j=l[1],b=Object(s.useState)(!1),O=Object(r.a)(b,2),h=O[0],p=O[1],v=Object(s.useContext)(_),C="$".concat(v.totalAmount.toFixed(2)),y=v.items.length>0,g=function(e){v.removeItem(e)},k=function(e){v.addItem(e)},M=Object(m.jsx)("ul",{className:f.a["cart-items"],children:v.items.map((function(e){return Object(m.jsx)(N,{name:e.name,amount:e.amount,price:e.price,onRemove:g.bind(null,e.id),onAdd:k.bind(null,e)},e.id)}))}),I=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("https://react-http-c7de8-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:v.items})});case 3:j(!1),p(!0),v.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(m.jsxs)("div",{className:f.a.actions,children:[Object(m.jsx)("button",{className:f.a["button--alt"],onClick:e.onClose,children:"Close"}),y&&Object(m.jsx)("button",{className:f.a.button,onClick:function(e){a(!0)},children:"Order"})]}),S=Object(m.jsxs)(m.Fragment,{children:[M,Object(m.jsxs)("div",{className:f.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsxs)("span",{children:[" ",C," "]})]}),c&&Object(m.jsx)(A,{onConfirm:I,onCancel:e.onClose}),!c&&w]}),F=Object(m.jsx)("p",{children:"Sending order data..."}),H=Object(m.jsxs)(m.Fragment,{children:["Successfully sent the order!",Object(m.jsx)("div",{className:f.a.actions,children:Object(m.jsx)("button",{className:f.a.button,onClick:e.onClose,children:"Close"})})]});return Object(m.jsxs)(x,{onClose:e.onClose,children:[!d&&!h&&S,d&&F,!d&&h&&H]})},I=n(18),w=n.n(I),S=n.p+"static/media/meals.2971f633.jpg",F=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},H=n(10),D=n.n(H),E=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useContext)(_),o=i.items.reduce((function(e,t){return e+t.amount}),0),l="".concat(D.a.button," ").concat(c?D.a.bump:""),u=i.items;return Object(s.useEffect)((function(){if(0!==u.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[u]),Object(m.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(m.jsx)("span",{className:D.a.icon,children:Object(m.jsx)(F,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:D.a.badge,children:o})]})},P=function(e){return Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsxs)("header",{className:w.a.header,children:[Object(m.jsx)("h1",{children:"Meals"}),Object(m.jsx)(E,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:w.a["main-image"],children:Object(m.jsx)("img",{src:S,alt:"A table full of delicious food!"})})]})},R=n(19),T=n.n(R),B=function(e){return Object(m.jsx)("div",{className:T.a.card,children:e.children})},L=n(14),Y=n.n(L),z=n(15),J=n.n(z),U=n(4),V=n(20),X=n.n(V),G=i.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:X.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(U.a)({ref:t},e.input))]})})),K=n(21),$=n.n(K),Q=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)();return Object(m.jsxs)("form",{className:$.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(m.jsx)(G,{ref:i,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!c&&Object(m.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},W=function(e){var t=Object(s.useContext)(_),n="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:J.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:J.a.description,children:e.description}),Object(m.jsx)("div",{className:J.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(Q,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,description:e.description,amount:n,price:e.price})}})})]})},Z=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!0),i=Object(r.a)(a,2),l=i[0],d=i[1],j=Object(s.useState)(),b=Object(r.a)(j,2),O=b[0],h=b[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-c7de8-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),d(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){d(!1),h(e.message)}))}),[]),l)return Object(m.jsx)("section",{className:Y.a.MealsLoading,children:Object(m.jsx)("p",{children:"Loading..."})});if(O)return Object(m.jsx)("section",{className:Y.a.MealsError,children:Object(m.jsx)("p",{children:O})});var x=n.map((function(e){return Object(m.jsx)(W,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:Y.a.meals,children:Object(m.jsx)(B,{children:Object(m.jsx)("ul",{children:x})})})},q=n(22),ee=n.n(q),te=function(e){return Object(m.jsxs)("section",{className:ee.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},ne=function(){return Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsx)(te,{}),Object(m.jsx)(Z,{})]})},ce=n(16),ae={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,c,a=e.totalAmount+t.item.price*t.item.amount,r=e.items.findIndex((function(e){return e.id===t.item.id})),s=e.items[r];return s?(n=Object(U.a)(Object(U.a)({},s),{},{amount:s.amount+1}),(c=Object(ce.a)(e.items))[r]=n):(n=Object(U.a)({},t.item),c=e.items.concat(n)),{items:c,totalAmount:a}}if("REMOVE"===t.type){var i,o,l=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[l],d=e.totalAmount-u.price;return u.amount>1?(i=Object(U.a)(Object(U.a)({},u),{},{amount:u.amount-1}),(o=Object(ce.a)(e.items))[l]=i):(o=Object(ce.a)(e.items)).splice(l,1),{items:o,totalAmount:d}}return t.type,ae},se=function(e){var t=Object(s.useReducer)(re,ae),n=Object(r.a)(t,2),c=n[0],a=n[1],i={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(m.jsx)(_.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(se,{children:[n&&Object(m.jsx)(M,{onClose:function(){c(!1)}}),Object(m.jsx)(P,{onShowCart:function(){c(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(ne,{})})]})};a.a.render(Object(m.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.820ef996.chunk.js.map