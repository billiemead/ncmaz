"use strict";(self.webpackChunkncmaz_core=self.webpackChunkncmaz_core||[]).push([[97],{220:function(e,t,r){var a=r(307);r(196),t.Z=({className:e="relative",name:t,color:r="pink",href:n=""})=>{const o=(e=!0)=>{switch(r){case"pink":default:return"text-pink-800 bg-pink-100 "+(e?"hover:bg-pink-800":"");case"red":return"text-red-800 bg-red-100 "+(e?"hover:bg-red-800":"");case"gray":return"text-gray-800 bg-gray-100 "+(e?"hover:bg-gray-800":"");case"green":return"text-green-800 bg-green-100 "+(e?"hover:bg-green-800":"");case"purple":return"text-purple-800 bg-purple-100 "+(e?"hover:bg-purple-800":"");case"indigo":return"text-indigo-800 bg-indigo-100 "+(e?"hover:bg-indigo-800":"");case"yellow":return"text-yellow-800 bg-yellow-100 "+(e?"hover:bg-yellow-800":"");case"blue":return"text-blue-800 bg-blue-100 "+(e?"hover:bg-blue-800":"")}},l="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs "+e;return n?(0,a.createElement)("a",{href:n||"",className:`transition-colors hover:text-white duration-300 ${l} ${o()}`},t):(0,a.createElement)("span",{className:`${l} ${o(!1)} ${e}`},t)}},171:function(e,t,r){var a=r(307),n=(r(196),r(797)),o=r(113),l=r(863),s=r(95),c=r(667),i=r(593);t.Z=({className:e="h-full",ratio:t="aspect-w-3 aspect-h-3 sm:aspect-h-4",post:r,hoverClass:m=""})=>{const{title:d,link:u,featuredImage:p,categories:h,author:k,date:x,postFormats:g}=r;return(0,a.createElement)("div",{className:`nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden ${m} ${e}`,"data-nc-id":"Card9"},(0,a.createElement)("div",{className:"absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-30 duration-300"},(0,a.createElement)(s.Z,{className:"relative",postData:r}),(0,a.createElement)(l.Z,null)),(0,a.createElement)("div",{className:`flex items-start relative w-full ${t}`}),(0,a.createElement)("a",{href:u},(0,a.createElement)(o.Z,{containerClassName:"absolute inset-0 rounded-3xl",className:"object-cover w-full h-full rounded-3xl",src:p?.node.sourceUrl,srcSet:p?.node.srcSet}),(0,a.createElement)(c.Z,{className:"absolute top-3 left-3 group-hover:hidden",postType:g.edges[0]?.node.slug,wrapSize:"w-7 h-7",iconSize:"w-4 h-4"}),(0,a.createElement)("span",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"})),(0,a.createElement)("a",{href:u,className:"absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"}),(0,a.createElement)("div",{className:"absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow"},(0,a.createElement)("a",{href:u,className:"absolute inset-0"}),(0,a.createElement)("div",{className:"mb-3"},(0,a.createElement)(n.Z,{categories:h})),(0,a.createElement)("div",{className:"inline-flex items-center text-xs text-neutral-300 "},(0,a.createElement)("a",{href:u,className:"block relative overflow-hidden"},(0,a.createElement)("h2",{className:"block text-lg font-semibold text-white "},(0,a.createElement)("span",{className:"line-clamp-2",title:d},d)),(0,a.createElement)("div",{className:"flex items-center mt-2.5"},(0,a.createElement)("span",{className:"block text-neutral-200 hover:text-white font-medium truncate py-1"},k?.node.name),(0,a.createElement)("span",{className:"mx-[6px] font-medium"},"·"),(0,a.createElement)("span",{className:"font-normal flex-shrink-0"},(0,i.Z)(x)))))))}},797:function(e,t,r){var a=r(307),n=(r(196),r(220));t.Z=({className:e="",itemClass:t="",categories:r})=>(0,a.createElement)("div",{className:"nc-CategoryBadgeList flow-root ","data-nc-id":"CategoryBadgeList"},(0,a.createElement)("div",{className:`flex flex-wrap space-x-2 -my-1 ${e}`},r.edges.map(((e,r)=>(0,a.createElement)(n.Z,{className:`relative my-1 ${t}`,key:r,name:e.node.name,href:e.node.link})))))},113:function(e,t,r){var a=r(307),n=(r(196),r(353));t.Z=({containerClassName:e="",alt:t="nc-imgs",className:r="object-cover w-full h-full",loading:o="lazy",src:l,sizes:s,imageSizes:c=(window.innerWidth<475?"MEDIUM":"MEDIUM_LARGE"),...i})=>{let m=(0,n.Z)({sizeName:c,sizes:s});return(0,a.createElement)("div",{className:`nc-NcImage ${e}`,"data-nc-id":"NcImage"},l&&l.includes("http")?(0,a.createElement)("img",{src:l,alt:t,className:r,loading:o,...i,sizes:m}):(0,a.createElement)("div",{className:`${r} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`},(0,a.createElement)("div",{className:"h-2/4 max-w-[50%]"})))}},788:function(e,t,r){var a=r(307);r(196),t.Z=({className:e="flex px-3 h-8 text-xs",href:t,commentCount:r})=>(0,a.createElement)("a",{href:t+"#comments",className:`nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 ${e} `,title:"Comments","data-nc-id":"PostCardCommentBtn"},(0,a.createElement)("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"}),(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"}),(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"}),(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"})),(0,a.createElement)("span",{className:"ml-1 text-neutral-900 dark:text-neutral-200"},r))},863:function(e,t,r){var a=r(307);r(196),t.Z=()=>(0,a.createElement)("div",{className:"nc-NcBookmark relative rounded-full flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"},(0,a.createElement)("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.1",d:"M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"}),(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.1",d:"M12 14.25L12 5"}),(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.1",d:"M8.75 8.25L12 4.75L15.25 8.25"})))},95:function(e,t,r){var a=r(307),n=(r(196),r(788));t.Z=({className:e="",itemClass:t="px-3 h-8 text-xs",hiddenCommentOnMobile:r=!0,postData:o,onClickLike:l=(()=>{})})=>(0,a.createElement)("div",{className:`nc-PostCardLikeAndComment flex items-center space-x-2 ${e}`,"data-nc-id":"PostCardLikeAndComment"},(0,a.createElement)("div",{dangerouslySetInnerHTML:{__html:o?.ncPostMetaData?.favoriteButtonShortcode||""}}),(0,a.createElement)(n.Z,{href:o.link,commentCount:o.commentCount||0,className:`${r?"hidden sm:flex":"flex"}  ${t}`}))},667:function(e,t,r){var a=r(307);r(196),t.Z=({className:e="",postType:t="Standard",onClick:r=(()=>{}),wrapSize:n="w-11 h-11",iconSize:o="w-6 h-6"})=>(0,a.createElement)("div",{className:`nc-PostTypeFeaturedIcon ${e}`,"data-nc-id":"PostTypeFeaturedIcon",onClick:r},!!t&&"Standard"!==t&&(0,a.createElement)("span",{className:`bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white ${n}`},t.includes("video")?(0,a.createElement)("svg",{className:o,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)("path",{d:"M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})):t.includes("audio")?(0,a.createElement)("svg",{className:o,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)("path",{d:"M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.createElement)("path",{d:"M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.createElement)("path",{d:"M20.8398 16.8V12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.createElement)("path",{d:"M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.createElement)("path",{d:"M9.40039 9.5199L20.8404 6.3999",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})):t.includes("gallery")?(0,a.createElement)("svg",{className:o,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)("path",{d:"M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.createElement)("path",{d:"M11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.createElement)("path",{d:"M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})):null))},97:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var a=r(307),n=(r(196),r(113)),o=({className:e="h-full",post:t})=>{const{title:r,link:o,featuredImage:l,postFormats:s,excerpt:c}=t;return(0,a.createElement)("div",{className:`nc-Card15Podcast relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${e}`,"data-nc-id":"Card15Podcast"},(0,a.createElement)("div",{className:"w-1/4 flex-shrink-0"},(0,a.createElement)("a",{href:o,className:"block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg "},(0,a.createElement)(n.Z,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full ",src:l?.node.sourceUrl,srcSet:l?.node.srcSet}))),(0,a.createElement)("div",{className:"flex flex-col flex-grow ml-4 overflow-hidden"},(0,a.createElement)("h2",{className:"nc-card-title block font-semibold text-lg"},(0,a.createElement)("a",{href:o,className:"line-clamp-1",title:r},r)),c?(0,a.createElement)("span",{className:"text-xs text-neutral-500 dark:text-neutral-400 mt-1 "},(0,a.createElement)("span",{className:"line-clamp-1",dangerouslySetInnerHTML:{__html:c}})):null))},l=r(171),s=({activePosts:e})=>(0,a.createElement)("div",null,(0,a.createElement)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"},e[0]&&(0,a.createElement)(l.Z,{ratio:"aspect-w-4 aspect-h-3 ",post:e[0].node}),e[1]&&(0,a.createElement)(l.Z,{ratio:"aspect-w-4 aspect-h-3 ",post:e[1].node}),e[2]&&(0,a.createElement)(l.Z,{ratio:"aspect-w-4 aspect-h-3 ",post:e[2].node})),(0,a.createElement)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8"},e.filter(((e,t)=>t>2)).map((e=>(0,a.createElement)(o,{key:e.node.id,post:e.node})))))},593:function(e,t,r){function a(e){let t=new Date(e),r=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t);return`${new Intl.DateTimeFormat("en",{month:"short"}).format(t)} ${new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t)}, ${r}`}r.d(t,{Z:function(){return a}})},353:function(e,t){t.Z=({sizeName:e,sizes:t})=>{let r;switch(e){case"THUMBNAIL":r="(max-width: 150px) 100vw, 150px";break;case"MEDIUM":r="(max-width: 475px) 100vw, 475px";break;case"MEDIUM_LARGE":r="(max-width: 768px) 100vw, 768px";break;case"LARGE":r="(max-width: 1024px) 100vw, 1024px";break;case"_1536X1536":r="(max-width: 1536px) 100vw, 1536px";break;case"_2048X2048":r="(max-width: 1600px) 100vw, 1600px";break;case"IS_SIZES":r=t}return r}}}]);