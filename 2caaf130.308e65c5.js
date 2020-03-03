(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{134:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return b}));var i=a(1),n=a(9),o=(a(0),a(154)),r={id:"modifiers",title:"Modifiers"},c={id:"gateway/modifiers",title:"Modifiers",description:"## Whats a modifier",source:"@site/docs/gateway/modifiers.md",permalink:"/bunos/docs/gateway/modifiers",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/bunos/docs/gateway/getting-started"},next:{title:"Responders",permalink:"/bunos/docs/gateway/responders"}},d=[{value:"Whats a modifier",id:"whats-a-modifier",children:[]},{value:"Available Modifiers",id:"available-modifiers",children:[]},{value:"Writing Your Own Modifier",id:"writing-your-own-modifier",children:[{value:"Contract",id:"contract",children:[]},{value:"Example",id:"example",children:[]}]}],s={rightToc:d};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"whats-a-modifier"},"Whats a modifier"),Object(o.b)("p",null,"The modifier manages a collection of functions that ultimately build a metadata object that is used to find an ",Object(o.b)("inlineCode",{parentName:"p"},"ApplicationTarget")," so we can proxy a response for the gateway."),Object(o.b)("h2",{id:"available-modifiers"},"Available Modifiers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://git.eogresources.com/jmorlan/gateway/packages/modifier-app-path"}),"App Path")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://git.eogresources.com/jmorlan/gateway/packages/modifier-branch"}),"Feature Branch - Query String"))),Object(o.b)("div",{className:"admonition admonition-note"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Missing Modifier")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Submit a PR in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://git.eogresources.com/jmorlan/gateway"}),"Gateway")," repo"))),Object(o.b)("h2",{id:"writing-your-own-modifier"},"Writing Your Own Modifier"),Object(o.b)("h3",{id:"contract"},"Contract"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"(request: HTTPRequest, modification: object): Promise<object>\n")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"module.exports = opts => (request, modification) => {\n  return Promise.resolve({name: 'Jay'});\n};\n")))}b.isMDXComponent=!0}}]);