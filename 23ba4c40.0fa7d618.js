(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var i=n(1),o=n(9),a=(n(0),n(154)),p={id:"app-store",title:"Application Target Store"},r={id:"gateway/app-store",title:"Application Target Store",description:"## Prerequisites",source:"@site/docs/gateway/app-store.md",permalink:"/bunos/docs/gateway/app-store",sidebar:"someSidebar",previous:{title:"Responders",permalink:"/bunos/docs/gateway/responders"},next:{title:"Getting Started",permalink:"/bunos/docs/ws-server/getting-started"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Contract",id:"contract",children:[]}],s={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"You should install ",Object(a.b)("inlineCode",{parentName:"p"},"@bunos/gw-application")),Object(a.b)("h2",{id:"contract"},"Contract"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"type ApplicationResponse {\n  found: boolean;\n  application: Application\n}\n\ninterface {\n  add(app: Application): ApplicationResponse;\n  get(id: string): ApplicationResponse\n  match(filter: ApplicationFilter): ApplicationResponse\n  search(filter: ApplicationFilter): [ApplicationResponse]\n}\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"found")," value for the ",Object(a.b)("inlineCode",{parentName:"p"},"match")," function should return ",Object(a.b)("inlineCode",{parentName:"p"},"false")," if more than one applications are found."))}l.isMDXComponent=!0}}]);