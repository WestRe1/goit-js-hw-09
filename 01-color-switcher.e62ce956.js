!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body");t.addEventListener("click",(function(){var n=setInterval((function(){a.style.backgroundColor=d(),t.hasAttribute("disabled")||clearInterval(n)}),1e3);t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0})),e.disabled=!0;d();function d(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.e62ce956.js.map
