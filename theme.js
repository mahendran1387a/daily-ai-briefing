(function(){
  var KEY="briefing_theme", root=document.documentElement;
  function set(t){root.setAttribute("data-theme",t);try{localStorage.setItem(KEY,t);}catch(e){}
    var b=document.getElementById("themeToggle"); if(b)b.textContent=(t==="dark"?"☀":"☾");}
  var saved=null; try{saved=localStorage.getItem(KEY);}catch(e){}
  set(saved||((window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches)?"light":"dark"));
  document.addEventListener("DOMContentLoaded",function(){
    var b=document.getElementById("themeToggle"); if(!b)return;
    b.textContent=(root.getAttribute("data-theme")==="dark"?"☀":"☾");
    b.addEventListener("click",function(){set(root.getAttribute("data-theme")==="dark"?"light":"dark");});
  });
})();
