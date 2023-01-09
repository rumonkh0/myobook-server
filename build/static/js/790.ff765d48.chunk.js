"use strict";(self.webpackChunkbackbook=self.webpackChunkbackbook||[]).push([[790],{3624:function(e,s,n){n.d(s,{i:function(){return o}});var t=n(1413),r=n(4165),i=n(5861),a=n(3418),c=n(2388),l=n(6260),d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(s){var n,t,i,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.id,t=s.type,e.next=3,c.Z.put("".concat("","/api/v1/friends/").concat(t,"/").concat(n),{},{withCredentials:!0});case 3:return i=e.sent,a=i.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),o=function(e){return(0,a.D)({mutationKey:"useRelationship",mutationFn:d,onSuccess:function(s){l.E.setQueryData(["getProfile",e],(function(e){if(!e)return e;var n=e;return n.data.friendship=s.data.friendship,e?(0,t.Z)((0,t.Z)({},e),{},{newData:n}):e}))}})}},9790:function(e,s,n){n.r(s),n.d(s,{default:function(){return C}});var t=n(4165),r=n(5861),i=n(2791),a=n(7689),c=n(1087),l="style_main__k8hc1",d="style_left__17Oqo",o="style_right__e5p9I",u="style_header__u5aBE",h="style_friends_left_header__3PSLU",m="style_menu_item__SuumE",f="style_rArrow__Y8wWs",v="style_active_friends__2cJeV",_="style_req_card__I8cnn",p="style_friends_right_wrap__x9kqd",x="style_flex_wrap__V6wgl",j="style_see_link__lkva4",N="style_photo__32-Mv",y="style_req_name__7YODf",g="style_btns__UMXrp",b=n(5439),q=n(2388),Z=n(3624),w=n(184);function k(e){var s=e.user,n=e.type,a=e.requestId,l=e.refetch,d=(0,Z.i)(s.username),o=d.mutate,u=d.data,h=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(s){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o({id:s,type:"acceptRequest"});case 1:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(s){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o({id:a,type:"cancel"});case 1:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){"success"===(null===u||void 0===u?void 0:u.status)&&l()}),[u]),(0,w.jsxs)("div",{className:_,children:[(0,w.jsxs)(c.rU,{to:"/profile/".concat(s.username),className:N,children:[(0,w.jsx)("img",{src:s.photo,alt:""}),(0,w.jsxs)("div",{className:y,children:[s.first_name," ",s.last_name]})]}),"sent"===n?(0,w.jsx)("div",{className:g,children:(0,w.jsx)("button",{className:"btn_blue",onClick:function(){return m(a)},children:"Cancel Request"})}):"request"===n?(0,w.jsxs)("div",{className:g,children:[(0,w.jsx)("button",{className:"btn_blue",onClick:function(){return h(a)},children:"Confirm"}),(0,w.jsx)("button",{className:"gray_btn",onClick:function(){return m(a)},children:"Delete"})]}):""]})}var R=n(2579);var C=function(){var e=(0,a.UO)().type,s=(0,b.a)({queryKey:["getFriendsPage"],queryFn:function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){var s,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.Z.get("".concat("","/api/v1/friends/friendsPage"),{withCredentials:!0});case 2:return s=e.sent,n=s.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),refetchOnWindowFocus:!1}),n=s.isLoading,i=s.isFetching,N=s.data,y=s.refetch,g=s.isSuccess,Z=n||i;return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{className:l,children:[(0,w.jsx)("div",{}),(0,w.jsxs)("div",{className:d,children:[(0,w.jsxs)("div",{className:u,children:[(0,w.jsx)("h3",{children:"Friends"}),(0,w.jsx)("div",{className:"small_circle",children:(0,w.jsx)("i",{className:"settings_filled_icon"})})]}),(0,w.jsxs)("div",{className:"friends_left_wrap",children:[(0,w.jsxs)(c.rU,{to:"/friends",className:"".concat(m," hover3 ").concat(void 0===e&&v),children:[(0,w.jsx)("div",{className:"small_circle",children:(0,w.jsx)("i",{className:"friends_home_icon "})}),(0,w.jsx)("span",{children:"Home"}),(0,w.jsx)("div",{className:f,children:(0,w.jsx)("i",{className:"right_icon"})})]}),(0,w.jsxs)(c.rU,{to:"/friends/requests",className:"".concat(m," hover3 ").concat("requests"===e&&v),children:[(0,w.jsx)("div",{className:"small_circle",children:(0,w.jsx)("i",{className:"friends_requests_icon"})}),(0,w.jsx)("span",{children:"Friend Requests"}),(0,w.jsx)("div",{className:f,children:(0,w.jsx)("i",{className:"right_icon"})})]}),(0,w.jsxs)(c.rU,{to:"/friends/sent",className:"".concat(m," hover3 ").concat("sent"===e&&v),children:[(0,w.jsx)("div",{className:"small_circle",children:(0,w.jsx)("i",{className:"friends_requests_icon"})}),(0,w.jsx)("span",{children:"Sent Requests"}),(0,w.jsx)("div",{className:f,children:(0,w.jsx)("i",{className:"right_icon"})})]}),(0,w.jsxs)(c.rU,{to:"/friends/all",className:"".concat(m," hover3 ").concat("all"===e&&v),children:[(0,w.jsx)("div",{className:"small_circle",children:(0,w.jsx)("i",{className:"all_friends_icon"})}),(0,w.jsx)("span",{children:"All Friends"}),(0,w.jsx)("div",{className:f,children:(0,w.jsx)("i",{className:"right_icon"})})]}),(0,w.jsxs)("div",{className:"".concat(m," hover3 ").concat("all"===e&&"active_friends"),children:[(0,w.jsx)("div",{className:"small_circle",children:(0,w.jsx)("i",{className:"friends_suggestions_icon"})}),(0,w.jsx)("span",{children:"Suggestions"}),(0,w.jsx)("div",{className:f,children:(0,w.jsx)("i",{className:"right_icon"})})]})]})]}),(0,w.jsxs)("div",{className:o,children:[(void 0===e||"requests"===e)&&(0,w.jsxs)("div",{className:p,children:[(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)("h3",{children:"Friend Requests"}),void 0===e&&(0,w.jsx)(c.rU,{to:"/friends/requests",className:"".concat(j," hover3"),children:"See all"})]}),(0,w.jsxs)("div",{className:x,children:[Z&&(0,w.jsx)(R.Z,{className:_,height:200}),null!==N&&void 0!==N&&N.data.recivedRequests&&(null===N||void 0===N?void 0:N.data.recivedRequests.length)>0?null===N||void 0===N?void 0:N.data.recivedRequests.map((function(e){return(0,w.jsx)(k,{user:e.sender,type:"request",requestId:e._id,refetch:y},e._id)})):g&&!n&&(0,w.jsx)("p",{children:"No friend requests"})]})]}),(void 0===e||"sent"===e)&&(0,w.jsxs)("div",{className:p,children:[(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)("h3",{children:"Sent Requests"}),void 0===e&&(0,w.jsx)(c.rU,{to:"/friends/sent",className:"".concat(j," hover3"),children:"See all"})]}),(0,w.jsxs)("div",{className:x,children:[Z&&(0,w.jsx)(R.Z,{className:_,height:200}),null!==N&&void 0!==N&&N.data.sentRequests&&(null===N||void 0===N?void 0:N.data.sentRequests.length)>0?null===N||void 0===N?void 0:N.data.sentRequests.map((function(e){return(0,w.jsx)(k,{user:e.recipient,type:"sent",requestId:e._id,refetch:y},e._id)})):g&&!n&&(0,w.jsx)("p",{children:"No sent requests"})]})]}),(void 0===e||"all"===e)&&(0,w.jsxs)("div",{className:p,children:[(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)("h3",{children:"Friends"}),void 0===e&&(0,w.jsx)(c.rU,{to:"/friends/all",className:"".concat(j," hover3"),children:"See all"})]}),(0,w.jsxs)("div",{className:x,children:[Z&&(0,w.jsx)(R.Z,{className:_,height:200}),null!==N&&void 0!==N&&N.data.friendLists&&(null===N||void 0===N?void 0:N.data.friendLists.length)>0?null===N||void 0===N?void 0:N.data.friendLists.map((function(e){return(0,w.jsx)(k,{user:e,type:"friends"},e._id)})):g&&!n&&(0,w.jsx)("p",{children:"No friends"})]})]})]})]})})}},2579:function(e,s,n){n.d(s,{Z:function(){return d}});var t=n(885),r=n(1413),i=n(4925),a=n(2791),c=["count","wrapper","className","containerClassName","containerTestId","circle","style"],l=a.createContext({});function d(e){for(var s,n,d,o=e.count,u=void 0===o?1:o,h=e.wrapper,m=e.className,f=e.containerClassName,v=e.containerTestId,_=e.circle,p=void 0!==_&&_,x=e.style,j=(0,i.Z)(e,c),N=a.useContext(l),y=(0,r.Z)({},j),g=0,b=Object.entries(j);g<b.length;g++){var q=(0,t.Z)(b[g],2),Z=q[0];"undefined"===typeof q[1]&&delete y[Z]}var w=(0,r.Z)((0,r.Z)((0,r.Z)({},N),y),{},{circle:p}),k=(0,r.Z)((0,r.Z)({},x),function(e){var s=e.baseColor,n=e.highlightColor,t=e.width,r=e.height,i=e.borderRadius,a=e.circle,c=e.direction,l=e.duration,d=e.enableAnimation,o=void 0===d||d,u={};return"rtl"===c&&(u["--animation-direction"]="reverse"),"number"===typeof l&&(u["--animation-duration"]="".concat(l,"s")),o||(u["--pseudo-element-display"]="none"),"string"!==typeof t&&"number"!==typeof t||(u.width=t),"string"!==typeof r&&"number"!==typeof r||(u.height=r),"string"!==typeof i&&"number"!==typeof i||(u.borderRadius=i),a&&(u.borderRadius="50%"),"undefined"!==typeof s&&(u["--base-color"]=s),"undefined"!==typeof n&&(u["--highlight-color"]=n),u}(w)),R="react-loading-skeleton";m&&(R+=" ".concat(m));for(var C=null!==(s=w.inline)&&void 0!==s&&s,F=[],U=Math.ceil(u),S=0;S<U;S++){var E=k;if(U>u&&S===U-1){var I=null!==(n=E.width)&&void 0!==n?n:"100%",D=u%1,L="number"===typeof I?I*D:"calc(".concat(I," * ").concat(D,")");E=(0,r.Z)((0,r.Z)({},E),{},{width:L})}var O=a.createElement("span",{className:R,style:E,key:S},"\u200c");C?F.push(O):F.push(a.createElement(a.Fragment,{key:S},O,a.createElement("br",null)))}return a.createElement("span",{className:f,"data-testid":v,"aria-live":"polite","aria-busy":null===(d=w.enableAnimation)||void 0===d||d},h?F.map((function(e,s){return a.createElement(h,{key:s},e)})):F)}}}]);
//# sourceMappingURL=790.ff765d48.chunk.js.map