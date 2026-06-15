/* Mark-read engine — styling lives in style.css (.rc-bar/.rc-btn/.readable.is-read/.is-hidden) */
(function(){
  var KEY="briefing_read_ids";
  function get(){try{return new Set(JSON.parse(localStorage.getItem(KEY)||"[]"));}catch(e){return new Set();}}
  function save(s){localStorage.setItem(KEY,JSON.stringify(Array.from(s)));}
  function apply(){
    var read=get(), showEl=document.getElementById("rc-show"), showRead=showEl&&showEl.checked, unread=0;
    document.querySelectorAll(".readable[data-id]").forEach(function(el){
      var id=el.getAttribute("data-id"), isRead=read.has(id);
      el.classList.toggle("is-read",isRead);
      el.classList.toggle("is-hidden",isRead&&!showRead);
      if(!isRead)unread++;
      var btn=el.querySelector(".rc-btn"); if(btn)btn.textContent=isRead?"↺ Unread":"✓ Mark read";
    });
    var c=document.getElementById("rc-count"); if(c)c.textContent=unread+" unread"+(read.size?(" · "+read.size+" read"):"");
  }
  function init(){
    var bar=document.getElementById("read-controls");
    if(bar){bar.className="rc-bar";
      bar.innerHTML='<span class="rc-count" id="rc-count">—</span><label><input type="checkbox" id="rc-show"> Show read</label><button id="rc-reset">↺ Reset all</button>';
      document.getElementById("rc-show").addEventListener("change",apply);
      document.getElementById("rc-reset").addEventListener("click",function(){if(confirm("Mark everything as unread again?")){localStorage.removeItem(KEY);apply();}});
    }
    document.querySelectorAll(".readable[data-id]").forEach(function(el){
      if(el.querySelector(".rc-btn"))return;
      var b=document.createElement("span"); b.className="rc-btn";
      b.addEventListener("click",function(){var s=get(),id=el.getAttribute("data-id");if(s.has(id))s.delete(id);else s.add(id);save(s);apply();});
      var host=(el.tagName==="TR"&&el.cells.length)?el.cells[el.cells.length-1]:el; host.appendChild(b);
    });
    apply();
  }
  if(document.readyState!=="loading")init();else document.addEventListener("DOMContentLoaded",init);
})();
