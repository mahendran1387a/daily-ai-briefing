(function(){
  var KEY="briefing_read_ids";
  function get(){try{return new Set(JSON.parse(localStorage.getItem(KEY)||"[]"));}catch(e){return new Set();}}
  function save(s){localStorage.setItem(KEY,JSON.stringify(Array.from(s)));}
  var css=document.createElement("style");
  css.textContent=".rc-bar{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin:0 0 20px;padding:11px 15px;background:#161b22;border:1px solid #2a3038;border-radius:10px;font-size:13.5px;color:#9aa7b4;}"
   +".rc-bar .rc-count{font-weight:700;color:#fff;} .rc-bar label{cursor:pointer;display:flex;align-items:center;gap:6px;}"
   +".rc-bar button{background:#1f2733;border:1px solid #2a3038;color:#9aa7b4;font-size:12.5px;padding:5px 12px;border-radius:8px;cursor:pointer;} .rc-bar button:hover{color:#fff;}"
   +".readable{transition:opacity .25s;} .readable.is-read{opacity:.4;} .readable.is-hidden{display:none;}"
   +".rc-btn{display:inline-block;margin-top:8px;margin-left:4px;font-size:12px;font-weight:600;padding:3px 10px;border-radius:7px;border:1px solid #2a3038;background:#1f2733;color:#22c55e;cursor:pointer;white-space:nowrap;} .rc-btn:hover{border-color:#22c55e;}";
  document.head.appendChild(css);
  function apply(){
    var read=get();
    var showEl=document.getElementById("rc-show");
    var showRead=showEl&&showEl.checked;
    var unread=0;
    document.querySelectorAll(".readable[data-id]").forEach(function(el){
      var id=el.getAttribute("data-id"),isRead=read.has(id);
      el.classList.toggle("is-read",isRead);
      el.classList.toggle("is-hidden",isRead&&!showRead);
      if(!isRead)unread++;
      var btn=el.querySelector(".rc-btn");
      if(btn)btn.textContent=isRead?"↺ unread":"✓ read";
    });
    var c=document.getElementById("rc-count");
    if(c)c.textContent=unread+" unread"+(read.size?(" · "+read.size+" read"):"");
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
      var b=document.createElement("span");b.className="rc-btn";
      b.addEventListener("click",function(){var s=get(),id=el.getAttribute("data-id");if(s.has(id))s.delete(id);else s.add(id);save(s);apply();});
      var host=(el.tagName==="TR"&&el.cells.length)?el.cells[el.cells.length-1]:el;
      host.appendChild(b);
    });
    apply();
  }
  if(document.readyState!=="loading")init();else document.addEventListener("DOMContentLoaded",init);
})();
