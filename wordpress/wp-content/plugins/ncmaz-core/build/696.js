"use strict";(self.webpackChunkncmaz_core=self.webpackChunkncmaz_core||[]).push([[696],{591:function(e,t,a){var r=a(307),n=(a(196),a(345)),l=a(353);t.Z=({containerClassName:e="ring-1 ring-white dark:ring-neutral-900",sizeClass:t="h-6 w-6 text-sm",radius:a="rounded-md",imgUrl:o,userName:s,imageSizes:c="THUMBNAIL",srcSet:i})=>{let m=(0,l.Z)({sizeName:c});const d=o||"",u=s||"John Doe";return(0,r.createElement)("div",{className:`wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${a} ${t} ${e}`,style:{backgroundColor:d?void 0:(e=>{const t=Math.floor(e.charCodeAt(0)%n.T3.length);return n.T3[t]})(u)}},d&&(0,r.createElement)("img",{className:"absolute inset-0 w-full h-full object-cover",src:d,srcSet:i,alt:u,sizes:m}),(0,r.createElement)("span",{className:"wil-avatar__name"},u[0]))}},220:function(e,t,a){var r=a(307);a(196),t.Z=({className:e="relative",name:t,color:a="pink",href:n=""})=>{const l=(e=!0)=>{switch(a){case"pink":default:return"text-pink-800 bg-pink-100 "+(e?"hover:bg-pink-800":"");case"red":return"text-red-800 bg-red-100 "+(e?"hover:bg-red-800":"");case"gray":return"text-gray-800 bg-gray-100 "+(e?"hover:bg-gray-800":"");case"green":return"text-green-800 bg-green-100 "+(e?"hover:bg-green-800":"");case"purple":return"text-purple-800 bg-purple-100 "+(e?"hover:bg-purple-800":"");case"indigo":return"text-indigo-800 bg-indigo-100 "+(e?"hover:bg-indigo-800":"");case"yellow":return"text-yellow-800 bg-yellow-100 "+(e?"hover:bg-yellow-800":"");case"blue":return"text-blue-800 bg-blue-100 "+(e?"hover:bg-blue-800":"")}},o="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs "+e;return n?(0,r.createElement)("a",{href:n||"",className:`transition-colors hover:text-white duration-300 ${o} ${l()}`},t):(0,r.createElement)("span",{className:`${o} ${l(!1)} ${e}`},t)}},55:function(e,t,a){var r=a(307),n=(a(196),a(113)),l=a(667),o=a(797),s=a(993),c=a(95),i=a(863);t.Z=({className:e="h-full",size:t="normal",post:a})=>{const{featuredImage:m,title:d,link:u,date:h,categories:p,excerpt:x,author:g,postFormats:k,ncPostMetaData:f}=a;return(0,r.createElement)("div",{className:`nc-Card2 group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${e}`,"data-nc-id":"Card2"},(0,r.createElement)("span",{className:"block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden"},(0,r.createElement)(n.Z,{containerClassName:"absolute inset-0",src:m?.node.sourceUrl,srcSet:m?.node.srcSet}),(0,r.createElement)(l.Z,{className:"absolute bottom-2 left-2",postType:k.edges[0]?.node.slug,wrapSize:"w-8 h-8",iconSize:"w-4 h-4"})),(0,r.createElement)("a",{href:u,className:"absolute inset-0"}),(0,r.createElement)("div",{className:"p-4 sm:p-5 flex flex-col"},(0,r.createElement)("div",{className:"space-y-3"},(0,r.createElement)(o.Z,{categories:p}),(0,r.createElement)("h2",{className:"nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors "+("large"===t?"text-lg sm:text-2xl":"text-base")},(0,r.createElement)("a",{href:u,className:"line-clamp-2",title:d},d)),(0,r.createElement)("div",{className:"block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2",dangerouslySetInnerHTML:{__html:x}})),(0,r.createElement)(s.Z,{className:"relative my-4",date:h,author:g,readingTimeShortcode:f.readingTimeShortcode,hoverReadingTime:!1}),(0,r.createElement)("div",{className:"flex items-center justify-between mt-auto"},(0,r.createElement)(c.Z,{className:"relative",postData:a}),(0,r.createElement)(i.Z,null))))}},171:function(e,t,a){var r=a(307),n=(a(196),a(797)),l=a(113),o=a(863),s=a(95),c=a(667),i=a(593);t.Z=({className:e="h-full",ratio:t="aspect-w-3 aspect-h-3 sm:aspect-h-4",post:a,hoverClass:m=""})=>{const{title:d,link:u,featuredImage:h,categories:p,author:x,date:g,postFormats:k}=a;return(0,r.createElement)("div",{className:`nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden ${m} ${e}`,"data-nc-id":"Card9"},(0,r.createElement)("div",{className:"absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-30 duration-300"},(0,r.createElement)(s.Z,{className:"relative",postData:a}),(0,r.createElement)(o.Z,null)),(0,r.createElement)("div",{className:`flex items-start relative w-full ${t}`}),(0,r.createElement)("a",{href:u},(0,r.createElement)(l.Z,{containerClassName:"absolute inset-0 rounded-3xl",className:"object-cover w-full h-full rounded-3xl",src:h?.node.sourceUrl,srcSet:h?.node.srcSet}),(0,r.createElement)(c.Z,{className:"absolute top-3 left-3 group-hover:hidden",postType:k.edges[0]?.node.slug,wrapSize:"w-7 h-7",iconSize:"w-4 h-4"}),(0,r.createElement)("span",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"})),(0,r.createElement)("a",{href:u,className:"absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"}),(0,r.createElement)("div",{className:"absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow"},(0,r.createElement)("a",{href:u,className:"absolute inset-0"}),(0,r.createElement)("div",{className:"mb-3"},(0,r.createElement)(n.Z,{categories:p})),(0,r.createElement)("div",{className:"inline-flex items-center text-xs text-neutral-300 "},(0,r.createElement)("a",{href:u,className:"block relative overflow-hidden"},(0,r.createElement)("h2",{className:"block text-lg font-semibold text-white "},(0,r.createElement)("span",{className:"line-clamp-2",title:d},d)),(0,r.createElement)("div",{className:"flex items-center mt-2.5"},(0,r.createElement)("span",{className:"block text-neutral-200 hover:text-white font-medium truncate py-1"},x?.node.name),(0,r.createElement)("span",{className:"mx-[6px] font-medium"},"·"),(0,r.createElement)("span",{className:"font-normal flex-shrink-0"},(0,i.Z)(g)))))))}},993:function(e,t,a){var r=a(307),n=(a(196),a(593)),l=a(591);t.Z=({className:e="",author:t,readingTimeShortcode:a="",date:o,hoverReadingTime:s=!0})=>{if(!t)return null;const{node:c}=t;return(0,r.createElement)("a",{href:c.url+c.uri,className:`nc-CardAuthor2 relative inline-flex items-center ${e}`,"data-nc-id":"CardAuthor2"},(0,r.createElement)(l.Z,{sizeClass:"h-10 w-10 text-base",containerClassName:"flex-shrink-0 mr-3",radius:"rounded-full",imgUrl:c.avatar?.url,userName:c.username}),(0,r.createElement)("div",null,(0,r.createElement)("h2",{className:"text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"},c.name),(0,r.createElement)("span",{className:"flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400"},(0,r.createElement)("span",null,(0,n.Z)(o)),a&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("span",{className:"hidden lg:inline mx-1 transition-opacity "+(s?"opacity-0 group-hover:opacity-100":"")},"·"),(0,r.createElement)("span",{className:"hidden lg:inline transition-opacity "+(s?"opacity-0 group-hover:opacity-100":""),dangerouslySetInnerHTML:{__html:a}})))))}},797:function(e,t,a){var r=a(307),n=(a(196),a(220));t.Z=({className:e="",itemClass:t="",categories:a})=>(0,r.createElement)("div",{className:"nc-CategoryBadgeList flow-root ","data-nc-id":"CategoryBadgeList"},(0,r.createElement)("div",{className:`flex flex-wrap space-x-2 -my-1 ${e}`},a.edges.map(((e,a)=>(0,r.createElement)(n.Z,{className:`relative my-1 ${t}`,key:a,name:e.node.name,href:e.node.link})))))},113:function(e,t,a){var r=a(307),n=(a(196),a(353));t.Z=({containerClassName:e="",alt:t="nc-imgs",className:a="object-cover w-full h-full",loading:l="lazy",src:o,sizes:s,imageSizes:c=(window.innerWidth<475?"MEDIUM":"MEDIUM_LARGE"),...i})=>{let m=(0,n.Z)({sizeName:c,sizes:s});return(0,r.createElement)("div",{className:`nc-NcImage ${e}`,"data-nc-id":"NcImage"},o&&o.includes("http")?(0,r.createElement)("img",{src:o,alt:t,className:a,loading:l,...i,sizes:m}):(0,r.createElement)("div",{className:`${a} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`},(0,r.createElement)("div",{className:"h-2/4 max-w-[50%]"})))}},788:function(e,t,a){var r=a(307);a(196),t.Z=({className:e="flex px-3 h-8 text-xs",href:t,commentCount:a})=>(0,r.createElement)("a",{href:t+"#comments",className:`nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 ${e} `,title:"Comments","data-nc-id":"PostCardCommentBtn"},(0,r.createElement)("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,r.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"}),(0,r.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"}),(0,r.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"}),(0,r.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"})),(0,r.createElement)("span",{className:"ml-1 text-neutral-900 dark:text-neutral-200"},a))},863:function(e,t,a){var r=a(307);a(196),t.Z=()=>(0,r.createElement)("div",{className:"nc-NcBookmark relative rounded-full flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"},(0,r.createElement)("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,r.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.1",d:"M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"}),(0,r.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.1",d:"M12 14.25L12 5"}),(0,r.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.1",d:"M8.75 8.25L12 4.75L15.25 8.25"})))},95:function(e,t,a){var r=a(307),n=(a(196),a(788));t.Z=({className:e="",itemClass:t="px-3 h-8 text-xs",hiddenCommentOnMobile:a=!0,postData:l,onClickLike:o=(()=>{})})=>(0,r.createElement)("div",{className:`nc-PostCardLikeAndComment flex items-center space-x-2 ${e}`,"data-nc-id":"PostCardLikeAndComment"},(0,r.createElement)("div",{dangerouslySetInnerHTML:{__html:l?.ncPostMetaData?.favoriteButtonShortcode||""}}),(0,r.createElement)(n.Z,{href:l.link,commentCount:l.commentCount||0,className:`${a?"hidden sm:flex":"flex"}  ${t}`}))},667:function(e,t,a){var r=a(307);a(196),t.Z=({className:e="",postType:t="Standard",onClick:a=(()=>{}),wrapSize:n="w-11 h-11",iconSize:l="w-6 h-6"})=>(0,r.createElement)("div",{className:`nc-PostTypeFeaturedIcon ${e}`,"data-nc-id":"PostTypeFeaturedIcon",onClick:a},!!t&&"Standard"!==t&&(0,r.createElement)("span",{className:`bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white ${n}`},t.includes("video")?(0,r.createElement)("svg",{className:l,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})):t.includes("audio")?(0,r.createElement)("svg",{className:l,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M20.8398 16.8V12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M9.40039 9.5199L20.8404 6.3999",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})):t.includes("gallery")?(0,r.createElement)("svg",{className:l,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})):null))},696:function(e,t,a){a.r(t);var r=a(307),n=(a(196),a(55)),l=a(171);t.default=({activePosts:e})=>(0,r.createElement)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"},e[0]&&(0,r.createElement)(n.Z,{size:"large",post:e[0].node}),(0,r.createElement)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"},e.filter(((e,t)=>t<5&&t>=1)).map(((e,t)=>(0,r.createElement)(l.Z,{ratio:"aspect-w-3 aspect-h-3",key:t,post:e.node})))))},593:function(e,t,a){function r(e){let t=new Date(e),a=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t);return`${new Intl.DateTimeFormat("en",{month:"short"}).format(t)} ${new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t)}, ${a}`}a.d(t,{Z:function(){return r}})},353:function(e,t){t.Z=({sizeName:e,sizes:t})=>{let a;switch(e){case"THUMBNAIL":a="(max-width: 150px) 100vw, 150px";break;case"MEDIUM":a="(max-width: 475px) 100vw, 475px";break;case"MEDIUM_LARGE":a="(max-width: 768px) 100vw, 768px";break;case"LARGE":a="(max-width: 1024px) 100vw, 1024px";break;case"_1536X1536":a="(max-width: 1536px) 100vw, 1536px";break;case"_2048X2048":a="(max-width: 1600px) 100vw, 1600px";break;case"IS_SIZES":a=t}return a}}}]);