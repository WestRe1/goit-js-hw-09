const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){const e=setInterval((()=>{r.style.backgroundColor=a(),t.hasAttribute("disabled")||clearInterval(e)}),1e3);t.setAttribute("disabled","true")})),e.addEventListener("click",(function(){t.hasAttribute("disabled")&&t.removeAttribute("disabled")}));a();function a(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.66d84efc.js.map