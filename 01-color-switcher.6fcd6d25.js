const t={start:document.querySelector("button[data-start"),stop:document.querySelector("button[data-stop")};t.start.addEventListener("click",r);let e=!0,o=null;function r(){o=setInterval((()=>document.querySelector("body").style.backgroundColor=`${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`),1e3),e&&(t.start.setAttribute("disabled","disabled"),e=!1)}t.stop.addEventListener("click",r);
//# sourceMappingURL=01-color-switcher.6fcd6d25.js.map
