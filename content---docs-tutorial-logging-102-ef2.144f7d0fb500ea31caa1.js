(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return g}));t(0);var r=t(98);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={id:"logging",title:"Logging",sidebar_label:"Logging"},i=[],p={rightToc:i},c="wrapper";function g(e){var n=e.components,t=o(e,["components"]);return Object(r.b)(c,a({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"People often do not use Python logging due to the setup cost.\nHydra solves that by configuring the Python logging for you."),Object(r.b)("p",null,"By default Hydra logs at the INFO level to both console and a file."),Object(r.b)("p",null,"Example of logging with Hydra:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-python"}),'import logging\n\n# A logger for this file\nlog = logging.getLogger(__name__)\n\n@hydra.main()\ndef my_app(_cfg):\n    log.info("Info level message")\n    log.debug("Debug level message")\n\n$ python my_app.py\n[2019-06-27 00:52:46,653][__main__][INFO] - Info level message\n\n')),Object(r.b)("p",null,"You can enable DEBUG level logging from the command line with ",Object(r.b)("inlineCode",{parentName:"p"},"-v")," or ",Object(r.b)("inlineCode",{parentName:"p"},"--verbose"),"."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-text"}),"$ python my_app.py -v __main__\n[2019-06-27 00:54:39,440][__main__][INFO] - Info level message\n[2019-06-27 00:54:39,441][__main__][DEBUG] - Debug level message\n")),Object(r.b)("p",null,"You can activate multiple loggers by passing a comma separated list to ",Object(r.b)("inlineCode",{parentName:"p"},"-v"),"."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py -v hydra,mysql \n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"-v root")," activate debug logging for all loggers, even external libraries. "),Object(r.b)("p",null,"Logging can be ",Object(r.b)("a",a({parentName:"p"},{href:"../configure_hydra/logging"}),"customized"),"."))}g.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r),o=a.a.createContext({}),l=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=l(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),g=l(t),u=r,s=g[i+"."+u]||g[u]||c[u]||o;return t?a.a.createElement(s,Object.assign({},{ref:n},p,{components:t})):a.a.createElement(s,Object.assign({},{ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);