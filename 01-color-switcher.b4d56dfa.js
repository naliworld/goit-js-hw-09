const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;t.addEventListener("click",(function(){t.disabled=!0,d.disabled=!1})),d.addEventListener("click",(function(){t.disabled=!1,d.disabled=!0,clearInterval(a)})),a=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3);
//# sourceMappingURL=01-color-switcher.b4d56dfa.js.map
