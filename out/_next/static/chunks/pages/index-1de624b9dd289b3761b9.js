(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,n){"use strict";var i=n(3038),r=n(862);t.default=void 0;var o=r(n(7294)),a=n(1689),s=n(2441),d=n(5749),l={};function p(e,t,n,i){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var c=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.asPath||"/",c=o.default.useMemo((function(){var t=(0,a.resolveHref)(r,e.href,!0),n=i(t,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,a.resolveHref)(r,e.as):s||o}}),[r,e.href,e.as]),m=c.href,u=c.as,f=e.children,h=e.replace,x=e.shallow,g=e.scroll,b=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var y=o.Children.only(f),w=y&&"object"===typeof y&&y.ref,j=(0,d.useIntersection)({rootMargin:"200px"}),v=i(j,2),k=v[0],_=v[1],C=o.default.useCallback((function(e){k(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,k]);(0,o.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(m),i="undefined"!==typeof b?b:n&&n.locale,r=l[m+"%"+u+(i?"%"+i:"")];e&&!r&&p(n,m,u,{locale:i})}),[u,m,_,b,t,n]);var S={ref:C,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,s,d){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=i.indexOf("#")<0),t[r?"replace":"push"](n,i,{shallow:o,locale:d,scroll:s}))}(e,n,m,u,h,x,g,b)},onMouseEnter:function(e){(0,a.isLocalURL)(m)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),p(n,m,u,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var I="undefined"!==typeof b?b:n&&n.locale,z=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(u,I,n&&n.locales,n&&n.domainLocales);S.href=z||(0,a.addBasePath)((0,a.addLocale)(u,I,n&&n.defaultLocale))}return o.default.cloneElement(y,S)};t.default=c},5749:function(e,t,n){"use strict";var i=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,d=(0,r.useRef)(),l=(0,r.useState)(!1),p=i(l,2),c=p[0],m=p[1],u=(0,r.useCallback)((function(e){d.current&&(d.current(),d.current=void 0),n||c||e&&e.tagName&&(d.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(r))}}(e,(function(e){return e&&m(e)}),{rootMargin:t}))}),[n,t,c]);return(0,r.useEffect)((function(){if(!a&&!c){var e=(0,o.requestIdleCallback)((function(){return m(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[c]),[u,c]};var r=n(7294),o=n(8391),a="undefined"!==typeof IntersectionObserver;var s=new Map},4458:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return me}});var i=n(5893),r=n(7294),o=n(9163),a=o.default.section.withConfig({displayName:"GlobalComponents__Section",componentId:"sc-6qzy6y-0"})(["display:",";flex-direction:",";padding:",";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ","{padding:24px 48px 0;flex-direction:column;}@media ","{padding:",";width:calc(100vw - 32px);flex-direction:column;}"],(function(e){return e.grid?"grid":"flex"}),(function(e){return e.row?"row":"column"}),(function(e){return e.nopadding?"0":"32px 48px 0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.nopadding?"0":"16px 16px 0"})),s=o.default.h2.withConfig({displayName:"GlobalComponents__SectionTitle",componentId:"sc-6qzy6y-1"})(["font-weight:800;font-size:",";line-height:",";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:",";@media ","{font-size:",";line-height:",";margin-bottom:12px;padding:",";}@media ","{font-size:32px;line-height:40px;font-size:",";line-height:",";margin-bottom:8px;padding:",";max-width:100%;}"],(function(e){return e.main?"65px":"56px"}),(function(e){return e.main?"72px":"56px"}),(function(e){return e.main?"58px 0 16px":"0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"40px 0 12px":"0"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.main?"28px":"32px"}),(function(e){return e.main?"32px":"40px"}),(function(e){return e.main?"16px 0 8px":"0"})),d=o.default.p.withConfig({displayName:"GlobalComponents__SectionText",componentId:"sc-6qzy6y-2"})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ","{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ","{font-size:16px;line-height:24px;padding-bottom:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),l=o.default.div.withConfig({displayName:"GlobalComponents__SectionDivider",componentId:"sc-6qzy6y-3"})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:",";margin:",";@media ","{width:48px;height:4px;}@media ","{width:32px;height:2px;}"],(function(e){return e.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.divider?"4rem 0":""}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),p=(o.default.p.withConfig({displayName:"GlobalComponents__SectionSubText",componentId:"sc-6qzy6y-4"})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ","{max-width:672px;font-size:16px;line-height:25px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.button.withConfig({displayName:"GlobalComponents__SecondaryBtn",componentId:"sc-6qzy6y-5"})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ","{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"GlobalComponents__ButtonBack",componentId:"sc-6qzy6y-6"})(["width:",";height:",";border-radius:50px;font-size:",";font-weight:600;display:flex;align-items:center;justify-content:center;margin:",";color:#fff;background:",";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:",";@media ","{width:",";height:",";font-size:",";margin-bottom:",";}@media ","{width:100%;height:32px;font-size:14px;margin-bottom:",";}"],(function(e){return e.alt?"150px":"262px"}),(function(e){return e.alt?"52px":"64px"}),(function(e){return e.alt?"20px":"24px"}),(function(e){var t=e.alt,n=e.form;return t||n?"0":"0 0 80px"}),(function(e){return e.alt?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"150px":"184px"}),(function(e){return e.alt?"52px":"48px"}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.alt?"0":"64px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.alt?"0":"32px"})),o.default.button.withConfig({displayName:"GlobalComponents__ButtonFront",componentId:"sc-6qzy6y-7"})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:",";opacity:",";transition:.4s ease;font-size:",";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:",";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{font-size:",";}@media ","{font-size:14px;}"],(function(e){return e.alt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.alt?"20px":"24px"}),(function(e){return e.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"GlobalComponents__LinkContainer",componentId:"sc-6qzy6y-8"})(["margin-left:",";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ","{margin-left:",";}@media ","{margin-left:",";}"],(function(e){return e.large?"24px":"16px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.large?"16px":"8px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"0":"8px"})),o.default.div.withConfig({displayName:"GlobalComponents__LinkIconImg",componentId:"sc-6qzy6y-9"})(["display:flex;height:",";@media ","{height:",";}@media ","{height:",";}"],(function(e){return e.large?"32px":"24px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.nav?"16px":"24px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"32px":"16px"})),o.default.div.withConfig({displayName:"AcomplishmentsStyles__Boxes",componentId:"vuq5bz-0"})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ","{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ","{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:500px;margin:24px auto;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"AcomplishmentsStyles__Box",componentId:"vuq5bz-1"})(["background:#212D45;border-radius:12px;height:144px;padding:24px;@media ","{height:210px;}@media ","{height:135px;padding:16px;}@media ","{height:110px;padding:12px;&:nth-child(2n){grid-row:2;}}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.h5.withConfig({displayName:"AcomplishmentsStyles__BoxNum",componentId:"vuq5bz-2"})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;@media ","{font-size:28px;line-height:32px;}@media ","{font-size:24px;line-height:26px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.p.withConfig({displayName:"AcomplishmentsStyles__BoxText",componentId:"vuq5bz-3"})(["font-style:normal;font-weight:normal;font-size:18px;line-height:24px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:20px;};@media ","{font-size:10px;line-height:14px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"AcomplishmentsStyles__Join",componentId:"vuq5bz-4"})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ","{display:flex;justify-content:center;padding-bottom:64px;}@media ","{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.h5.withConfig({displayName:"AcomplishmentsStyles__JoinText",componentId:"vuq5bz-5"})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ","{line-height:32px;font-size:20px;};@media ","{font-size:16px;line-height:24px;margin:0 0 16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"AcomplishmentsStyles__IconContainer",componentId:"vuq5bz-6"})(["display:flex;@media ","{width:160px;justify-content:space-between;}"],(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"HeroStyles__LeftSection",componentId:"pbjia3-0"})(["width:100%;@media ","{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ","{width:100%;display:flex;flex-direction:column;margin:0 auto;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md}))),c=function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a,{row:!0,nopadding:!0,children:(0,i.jsxs)(p,{children:[(0,i.jsxs)(s,{main:!0,center:!0,children:["Hii I'm ",(0,i.jsx)("br",{}),"Yashkumar Gupta"]}),(0,i.jsx)(d,{children:"My aim is to become a software developer. I'm a logical and organized individual looking to pursue a career in software developement. Looking to start my career as a software developer with a firm driven by technology."})]})})})},m=o.default.img.withConfig({displayName:"ProjectsStyles__Img",componentId:"l76idc-0"})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]),u=o.default.section.withConfig({displayName:"ProjectsStyles__GridContainer",componentId:"l76idc-1"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ","{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"],(function(e){return e.theme.breakpoints.sm})),f=o.default.div.withConfig({displayName:"ProjectsStyles__BlogCard",componentId:"l76idc-2"})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ","{width:100%;}"],(function(e){return e.theme.breakpoints.sm})),h=o.default.div.withConfig({displayName:"ProjectsStyles__TitleContent",componentId:"l76idc-3"})(["text-align:center;z-index:20;width:100%;"]),x=o.default.h3.withConfig({displayName:"ProjectsStyles__HeaderThree",componentId:"l76idc-4"})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:",";"],(function(e){return e.title?"3rem":"2rem"})),g=o.default.hr.withConfig({displayName:"ProjectsStyles__Hr",componentId:"l76idc-5"})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]),b=(o.default.div.withConfig({displayName:"ProjectsStyles__Intro",componentId:"l76idc-6"})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]),o.default.p.withConfig({displayName:"ProjectsStyles__CardInfo",componentId:"l76idc-7"})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ","{padding:.3rem}"],(function(e){return e.theme.breakpoints.sm}))),y=o.default.ul.withConfig({displayName:"ProjectsStyles__UtilityList",componentId:"l76idc-8"})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]),w=o.default.a.withConfig({displayName:"ProjectsStyles__ExternalLinks",componentId:"l76idc-9"})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]),j=o.default.ul.withConfig({displayName:"ProjectsStyles__TagList",componentId:"l76idc-10"})(["display:flex;justify-content:space-around;padding:2rem;"]),v=o.default.li.withConfig({displayName:"ProjectsStyles__Tag",componentId:"l76idc-11"})(["color:#d8bfbf;font-size:1.5rem;"]),k=[{title:"Task Manager App",description:"Made a task manager/to-do list website. Front-end is developed using HTML, CSS and JS. Written a back-end API using NodeJS and Express which performs CRUD operations.",image:"/images/1.png",tags:["HTML","CSS","NodeJS","Express"],source:"https://task-manager-app-420.up.railway.app/",visit:"https://github.com/yashh1234/Task-Manager-App",id:0},{title:"Tution Classes Website",description:"Made a website for tuition classes using HTML, Bootstrap. It has different sections on the home page for different subjects and users can select which subjects they want to get classes for.",image:"/images/2.png",tags:["HTML","Bootstrap"],source:"https://yashh1234.github.io/iTutorials/index.html",visit:"https://github.com/yashh1234/iTutorials",id:1},{title:"Food Ordering Website",description:"Made a website for a restaurant using HTML, CSS, Bootstrap and JS. Added a sign-up and sign-in page to the website. Integrated a chat-bot to help users in the ordering process. The chat-bot also confirms the order.",image:"/images/3.png",tags:["HTML","CSS","Bootstrap","Javascript","SASS"],source:"https://github.com/yashh1234",visit:"https://github.com/yashh1234/Food-Ordering-Website",id:2},{title:"Customer Segmentation Using K-Means Clustering",description:"Divided customers using basic data of customers like age, gender, annual income and spending score. Used Mall Customer Segmentation Data which is available on Kaggle. From the segmented customers we can decide what type of advertisements have to be targeted on the specific group of customers.",image:"/images/4.png",tags:[],source:"https://github.com/yashh1234",visit:"https://github.com/yashh1234/Customer-Segmentation",id:3}],_=[{year:2022,text:"Software Engineering Virtual Experience (Forage)"},{year:2022,text:"AWS Academy Graduate - AWS Academy Cloud Foundations"},{year:2022,text:"Basic Image Classification with TensorFlow"},{year:2020,text:"Creating Database Tables with SQL"},{year:2020,text:"Machine Learning for All"},{year:2020,text:"Technical Support Fundamentals"},{year:2020,text:"Programming for Everybody (Getting Started With Python"}],C=function(){return(0,i.jsxs)(a,{nopadding:!0,id:"projects",children:[(0,i.jsx)(l,{}),(0,i.jsx)(s,{main:!0,children:"Projects"}),(0,i.jsx)(u,{children:k.map((function(e,t){return(0,i.jsxs)(f,{children:[(0,i.jsx)(m,{src:e.image}),(0,i.jsxs)(h,{children:[(0,i.jsx)(x,{title:!0,children:e.title}),(0,i.jsx)(g,{})]}),(0,i.jsx)(b,{className:"card-info",children:e.description}),(0,i.jsxs)("div",{children:[(0,i.jsx)(h,{}),(0,i.jsx)(j,{children:e.tags.map((function(e,t){return(0,i.jsx)(v,{children:e},t)}))})]}),(0,i.jsxs)(y,{children:[(0,i.jsx)(w,{href:e.visit,children:"Github"}),(0,i.jsx)(w,{href:e.source,children:"Live"})]})]},t)}))})]})},S=(o.default.div.withConfig({displayName:"TechnologiesStyles__ImageContainer",componentId:"sc-1ehw0pq-0"})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ","{background-image:none;padding:0;margin-top:40px;}@media ","{background-image:none;padding:0;margin-top:16px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md})),o.default.img.withConfig({displayName:"TechnologiesStyles__MainImage",componentId:"sc-1ehw0pq-1"})(["width:100%;"]),o.default.ul.withConfig({displayName:"TechnologiesStyles__List",componentId:"sc-1ehw0pq-2"})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ","{margin:64px 0;}@media ","{margin:64px 0;gap:24px}@media ","{display:flex;flex-direction:column;margin:32px 0;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),I=o.default.div.withConfig({displayName:"TechnologiesStyles__ListContainer",componentId:"sc-1ehw0pq-3"})(["display:flex;flex-direction:column;@media ","{display:flex;margin-left:18px;}"],(function(e){return e.theme.breakpoints.sm})),z=o.default.h4.withConfig({displayName:"TechnologiesStyles__ListTitle",componentId:"sc-1ehw0pq-4"})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ","{font-size:24px;line-height:28px;}@media ","{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),N=o.default.p.withConfig({displayName:"TechnologiesStyles__ListParagraph",componentId:"sc-1ehw0pq-5"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:28px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),F=o.default.li.withConfig({displayName:"TechnologiesStyles__ListItem",componentId:"sc-1ehw0pq-6"})(["max-width:320px;display:flex;flex-direction:column;@media ","{max-width:203px;}@media ","{margin-bottom:14px;max-width:320px;flex-direction:row;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),L=(o.default.img.withConfig({displayName:"TechnologiesStyles__ListIcon",componentId:"sc-1ehw0pq-7"})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ","{width:40px;height:40px;margin-bottom:8px;}@media ","{width:32px;height:32px;margin-bottom:0px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),function(){return(0,i.jsxs)(a,{id:"tech",children:[(0,i.jsx)(l,{divider:!0}),(0,i.jsx)(s,{children:"Technologies"}),(0,i.jsx)(d,{children:"I've worked with a range a technologies in the web development world."}),(0,i.jsxs)(S,{children:[(0,i.jsxs)(F,{children:[(0,i.jsx)("picture",{}),(0,i.jsxs)(I,{children:[(0,i.jsx)(z,{children:"Front-End"}),(0,i.jsxs)(N,{children:["React.js ",(0,i.jsx)("br",{}),"HTML ",(0,i.jsx)("br",{}),"CSS ",(0,i.jsx)("br",{}),"Angular ",(0,i.jsx)("br",{}),"Bootstrap ",(0,i.jsx)("br",{}),"SASS ",(0,i.jsx)("br",{}),"Svelte ",(0,i.jsx)("br",{})]})]})]}),(0,i.jsxs)(F,{children:[(0,i.jsx)("picture",{}),(0,i.jsxs)(I,{children:[(0,i.jsx)(z,{children:"Back-End"}),(0,i.jsxs)(N,{children:["NodeJS ",(0,i.jsx)("br",{}),"Javascript ",(0,i.jsx)("br",{}),"PHP ",(0,i.jsx)("br",{}),".NET ",(0,i.jsx)("br",{}),"Express.js ",(0,i.jsx)("br",{}),"jQuery ",(0,i.jsx)("br",{}),"MongoDB ",(0,i.jsx)("br",{}),"MySQL ",(0,i.jsx)("br",{}),"Postman ",(0,i.jsx)("br",{})]})]})]}),(0,i.jsxs)(F,{children:[(0,i.jsx)("picture",{}),(0,i.jsxs)(I,{children:[(0,i.jsx)(z,{children:"Programming Languages"}),(0,i.jsxs)(N,{children:["C ",(0,i.jsx)("br",{}),"C++ ",(0,i.jsx)("br",{}),"Javascript ",(0,i.jsx)("br",{}),"Python ",(0,i.jsx)("br",{}),"Solidity ",(0,i.jsx)("br",{}),"Typescript ",(0,i.jsx)("br",{})]})]})]}),(0,i.jsxs)(F,{children:[(0,i.jsx)("picture",{}),(0,i.jsxs)(I,{children:[(0,i.jsx)(z,{children:"Misc."}),(0,i.jsxs)(N,{children:["Markdown ",(0,i.jsx)("br",{}),"Latex ",(0,i.jsx)("br",{}),"AWS ",(0,i.jsx)("br",{}),"Google Cloud Platform ",(0,i.jsx)("br",{}),"Heroku ",(0,i.jsx)("br",{}),"Netlify ",(0,i.jsx)("br",{}),"Jenkins ",(0,i.jsx)("br",{}),"Arduino ",(0,i.jsx)("br",{}),"Docker ",(0,i.jsx)("br",{})]})]})]})]}),(0,i.jsx)(l,{color:!0})]})}),T=o.default.ul.withConfig({displayName:"TimeLineStyles__CarouselContainer",componentId:"vs8qb6-0"})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ","{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm})),q=o.default.div.withConfig({displayName:"TimeLineStyles__CarouselMobileScrollNode",componentId:"vs8qb6-1"})(["@media ","{display:flex;min-width:","}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.final?"120%;":"min-content"})),M=o.default.div.withConfig({displayName:"TimeLineStyles__CarouselItem",componentId:"vs8qb6-2"})(["background:#0F1624;border-radius:3px;max-width:196px;@media ","{max-width:124px;}@media ","{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;",";}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.active===e.index?"opacity: 1":"opacity: 0.5"})),D=o.default.h4.withConfig({displayName:"TimeLineStyles__CarouselItemTitle",componentId:"vs8qb6-3"})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ","{font-size:20px;line-height:28px;margin-bottom:4px;}@media ","{font-size:16px;line-height:24px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),E=o.default.svg.withConfig({displayName:"TimeLineStyles__CarouselItemImg",componentId:"vs8qb6-4"})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ","{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"],(function(e){return e.theme.breakpoints.sm})),P=o.default.p.withConfig({displayName:"TimeLineStyles__CarouselItemText",componentId:"vs8qb6-5"})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ","{font-size:12px;line-height:18px;padding-right:32px;}@media ","{font-size:10px;line-height:16px;padding-right:0;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),A=o.default.div.withConfig({displayName:"TimeLineStyles__CarouselButtons",componentId:"vs8qb6-6"})(["width:288px;display:none;visibility:hidden;@media ","{display:flex;visibility:visible;margin-bottom:48px;}"],(function(e){return e.theme.breakpoints.sm})),B=o.default.button.withConfig({displayName:"TimeLineStyles__CarouselButton",componentId:"vs8qb6-7"})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:",";transform:",";&:focus{outline:none;}"],(function(e){return e.active===e.index?"1":".33"}),(function(e){return e.active===e.index?"scale(1.6)":"scale(1)"})),H=o.default.div.withConfig({displayName:"TimeLineStyles__CarouselButtonDot",componentId:"vs8qb6-8"})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]),O=_.length,G=function(){var e=(0,r.useState)(0),t=e[0],n=e[1],o=(0,r.useRef)(),p=function(e,t){return e.scrollTo({left:t,behavior:"smooth"})},c=function(e,t){if(e.preventDefault(),o.current){var n=Math.floor(.7*o.current.scrollWidth*(t/_.length));p(o.current,n)}};return(0,r.useEffect)((function(){window.addEventListener("resize",(function(){p(o.current,0)}))}),[]),(0,i.jsxs)(a,{id:"about",children:[(0,i.jsx)(s,{children:"Certifications"}),(0,i.jsx)(d,{children:"These are some of my certifications which I have acquired during my university."}),(0,i.jsx)(T,{ref:o,onScroll:function(){if(o.current){var e=Math.round(o.current.scrollLeft/(.7*o.current.scrollWidth)*_.length);n(e)}},children:(0,i.jsx)(i.Fragment,{children:_.map((function(e,n){return(0,i.jsx)(q,{final:n===O-1,children:(0,i.jsxs)(M,{index:n,id:"carousel__item-".concat(n),active:t,onClick:function(e){return c(e,n)},children:[(0,i.jsxs)(D,{children:["".concat(e.year),(0,i.jsxs)(E,{width:"208",height:"6",viewBox:"0 0 208 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",fill:"url(#paint0_linear)","fill-opacity":"0.33"}),(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"paint0_linear",x1:"-4.30412e-10",y1:"0.5",x2:"208",y2:"0.500295",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{"stop-color":"white"}),(0,i.jsx)("stop",{offset:"0.79478","stop-color":"white","stop-opacity":"0"})]})})]})]}),(0,i.jsx)(P,{children:e.text})]})},n)}))})}),(0,i.jsx)(A,{children:_.map((function(e,n){return(0,i.jsx)(B,{index:n,active:t,onClick:function(e){return c(e,n)},type:"button",children:(0,i.jsx)(H,{active:t})},n)}))}),(0,i.jsx)(l,{})]})},R=n(2821),J=n(1649),W=o.default.div.withConfig({displayName:"HeaderStyles__Container",componentId:"sc-9w0vkp-0"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ","{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),U=o.default.div.withConfig({displayName:"HeaderStyles__Div1",componentId:"sc-9w0vkp-1"})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ","{grid-area:1 / 1 / 2 / 3;}"],(function(e){return e.theme.breakpoints.sm})),K=o.default.div.withConfig({displayName:"HeaderStyles__Div2",componentId:"sc-9w0vkp-2"})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ","{grid-area:2 / 2 / 3 / 5;}"],(function(e){return e.theme.breakpoints.sm})),V=o.default.div.withConfig({displayName:"HeaderStyles__Div3",componentId:"sc-9w0vkp-3"})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ","{align-items:center;grid-area:1 / 4 / 2 / 6;}"],(function(e){return e.theme.breakpoints.sm})),Q=o.default.a.withConfig({displayName:"HeaderStyles__NavLink",componentId:"sc-9w0vkp-4"})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ","{padding:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),Y=(o.default.button.withConfig({displayName:"HeaderStyles__ContactDropDown",componentId:"sc-9w0vkp-5"})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ","{padding:0.4rem 0;}@media ","{padding:0;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md})),(0,o.default)(J.U0j).withConfig({displayName:"HeaderStyles__NavProductsIcon",componentId:"sc-9w0vkp-6"})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:",";transform:",";&:hover{opacity:1;}@media ","{margin:2px 0 0 2px;width:15px;}"],(function(e){return e.isOpen?"1":".75"}),(function(e){return e.isOpen?"scaleY(-1)":"scaleY(1)"}),(function(e){return e.theme.breakpoints.sm})),o.default.a.withConfig({displayName:"HeaderStyles__SocialIcons",componentId:"sc-9w0vkp-7"})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"])),X=o.default.section.withConfig({displayName:"FooterStyles__FooterWrapper",componentId:"sc-1ifsifd-0"})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ","{padding:0 16px 48px;width:calc(100vw - 32px);}"],(function(e){return e.theme.breakpoints.sm})),Z=o.default.a.withConfig({displayName:"FooterStyles__LinkItem",componentId:"sc-1ifsifd-1"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ","{font-size:16px;line-height:28px;display:flex;}@media ","{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),$=o.default.div.withConfig({displayName:"FooterStyles__SocialIconsContainer",componentId:"sc-1ifsifd-2"})(["max-width:1040px;display:flex;justify-content:space-between;@media ","{display:flex;justify-content:space-between;}@media ","{display:flex;width:100%;flex-direction:column;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),ee=o.default.div.withConfig({displayName:"FooterStyles__CompanyContainer",componentId:"sc-1ifsifd-3"})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ","{flex-direction:column;align-items:baseline;}@media ","{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),te=o.default.p.withConfig({displayName:"FooterStyles__Slogan",componentId:"sc-1ifsifd-4"})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ","{font-size:16px;line-height:28px;}@media ","{line-height:22px;font-size:14px;min-width:100px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),ne=o.default.div.withConfig({displayName:"FooterStyles__SocialContainer",componentId:"sc-1ifsifd-5"})(["display:flex;align-items:center;@media ","{justify-content:center;padding-right:16px;flex-wrap:wrap;}"],(function(e){return e.theme.breakpoints.md})),ie=o.default.ul.withConfig({displayName:"FooterStyles__LinkList",componentId:"sc-1ifsifd-6"})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ","{padding:32px 0 16px;}@media ","{width:100%;padding:32px 0 16px;gap:16px;}@media ","{width:100%;padding:32px 4px 16px;gap:5px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),re=o.default.div.withConfig({displayName:"FooterStyles__LinkColumn",componentId:"sc-1ifsifd-7"})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]),oe=o.default.h4.withConfig({displayName:"FooterStyles__LinkTitle",componentId:"sc-1ifsifd-8"})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ","{font-size:10px;line-height:12px;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm})),ae=function(){return(0,i.jsxs)(X,{children:[(0,i.jsxs)(ie,{children:[(0,i.jsxs)(re,{children:[(0,i.jsx)(oe,{children:"Call"}),(0,i.jsx)(Z,{href:"",children:"+91 8668978960"})]}),(0,i.jsxs)(re,{children:[(0,i.jsx)(oe,{children:"Email"}),(0,i.jsx)(Z,{href:"mailto:yashguptace@gmail.com",children:"yashguptace@gmail"})]})]}),(0,i.jsxs)($,{children:[(0,i.jsx)(ee,{children:(0,i.jsx)(te,{})}),(0,i.jsxs)(ne,{children:[(0,i.jsx)(Y,{href:"https://github.com/yashh1234",children:(0,i.jsx)(R.RrF,{size:"3rem"})}),(0,i.jsx)(Y,{href:"https://www.linkedin.com/in/yashkg02/",children:(0,i.jsx)(R._iD,{size:"3rem"})}),(0,i.jsx)(Y,{href:"https://www.instagram.com/yashh.__/",children:(0,i.jsx)(R.t0C,{size:"3rem"})}),(0,i.jsx)(Y,{href:"https://yashh1234.github.io/Resume/",children:(0,i.jsx)(R.p4z,{size:"3rem"})})]})]})]})},se=n(1664),de=n(859),le=function(){return(0,i.jsxs)(W,{children:[(0,i.jsx)(U,{children:(0,i.jsx)(se.default,{href:"/",children:(0,i.jsxs)("a",{style:{display:"flex",alignItems:"center",color:"white"},children:[(0,i.jsx)(de.JAz,{size:"3rem"})," ",(0,i.jsx)("span",{children:"Portfolio"})]})})}),(0,i.jsxs)(K,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(se.default,{href:"#projects",children:(0,i.jsx)(Q,{children:"Projects"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(se.default,{href:"#tech",children:(0,i.jsx)(Q,{children:"Technologies"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(se.default,{href:"#about",children:(0,i.jsx)(Q,{children:"About"})})})]}),(0,i.jsxs)(V,{children:[(0,i.jsx)(Y,{href:"https://github.com/yashh1234",children:(0,i.jsx)(R.RrF,{size:"3rem"})}),(0,i.jsx)(Y,{href:"https://www.linkedin.com/in/yashkg02/",children:(0,i.jsx)(R._iD,{size:"3rem"})}),(0,i.jsx)(Y,{href:"https://www.instagram.com/yashh.__/",children:(0,i.jsx)(R.t0C,{size:"3rem"})}),(0,i.jsx)(Y,{href:"https://yashh1234.github.io/Resume/",children:(0,i.jsx)(R.p4z,{size:"3rem"})})]})]})},pe=o.default.div.withConfig({displayName:"LayoutStyles__Container",componentId:"mzu455-0"})(["max-width:1280px;width:100%;margin:auto;"]),ce=function(e){var t=e.children;return(0,i.jsxs)(pe,{children:[(0,i.jsx)(le,{}),(0,i.jsx)("main",{children:t}),(0,i.jsx)(ae,{})]})},me=function(){return(0,i.jsxs)(ce,{children:[(0,i.jsx)(a,{grid:!0,children:(0,i.jsx)(c,{})}),(0,i.jsx)(C,{}),(0,i.jsx)(L,{}),(0,i.jsx)(G,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4458)}])},1664:function(e,t,n){e.exports=n(6071)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var i=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),a=function(){return(a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function d(e){return e&&e.map((function(e,t){return i.createElement(e.tag,a({key:t},e.attr),d(e.child))}))}function l(e){return function(t){return i.createElement(p,a({attr:a({},e.attr)},t),d(e.child))}}function p(e){var t=function(t){var n,r=e.attr,o=e.size,d=e.title,l=s(e,["attr","size","title"]),p=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),d&&i.createElement("title",null,d),e.children)};return void 0!==o?i.createElement(o.Consumer,null,(function(e){return t(e)})):t(r)}}},function(e){e.O(0,[866,921,617,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);