(function(){
  var index = [
    {label:"About", sub:"Summary", target:"#about"},
    {label:"Experience", sub:"Work history", target:"#experience"},
    {label:"Skills", sub:"Tech stack", target:"#skills"},
    {label:"Highlights", sub:"Certifications & accomplishments", target:"#projects"},
    {label:"Contact", sub:"Get in touch", target:"#contact"},
    {label:"Mastercard", sub:"Current role, Software Engineer II", target:"#experience"},
    {label:"Eshopbox", sub:"Software Development Engineer II", target:"#experience"},
    {label:"Wissen Technology", sub:"Software Engineer", target:"#experience"},
    {label:"Tata Consultancy Services", sub:"System Engineer, Cardinal Health", target:"#experience"},
    {label:"Spring Boot", sub:"Skill", target:"#skills"},
    {label:"Java 8/11/17", sub:"Skill", target:"#skills"},
    {label:"Microservices", sub:"Core specialty", target:"#about"},
    {label:"Google Cloud (GCP)", sub:"Skill", target:"#skills"},
    {label:"MySQL / PostgreSQL / DB2 / Oracle", sub:"Databases", target:"#skills"},
    {label:"Certifications", sub:"Edureka, LinkedIn Learning, Udemy, Eduonix", target:"#projects"},
    {label:"Smart India Hackathon 2020", sub:"Accomplishment", target:"#projects"},
    {label:"Education — SPPU, Pune", sub:"B.E. Information Technology", target:"#projects"},
    {label:"Publications", sub:"IJERT paper", target:"#projects"},
    {label:"Résumé (PDF)", sub:"Download", target:"resume.pdf"}
  ];

  var input = document.getElementById("searchInput");
  var list = document.getElementById("suggestions");
  var activeIdx = -1;
  var current = [];

  function render(items){
    list.innerHTML = "";
    if(!items.length){ list.hidden = true; return; }
    items.forEach(function(item, i){
      var li = document.createElement("li");
      li.setAttribute("role","option");
      li.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>' +
        '<span><strong>'+item.label+'</strong>' + (item.sub ? ' <span style="color:#5f6368">— '+item.sub+'</span>' : '') + '</span>';
      li.addEventListener("click", function(){ go(item); });
      list.appendChild(li);
    });
    list.hidden = false;
    current = items;
    activeIdx = -1;
  }

  function go(item){
    list.hidden = true;
    input.value = "";
    if(item.target.indexOf("#") === 0){
      var el = document.querySelector(item.target);
      if(el) el.scrollIntoView({behavior:"smooth", block:"start"});
    } else {
      window.open(item.target, "_blank");
    }
  }

  input.addEventListener("input", function(){
    var q = input.value.trim().toLowerCase();
    if(!q){ list.hidden = true; return; }
    var matches = index.filter(function(item){
      return item.label.toLowerCase().indexOf(q) !== -1 || (item.sub && item.sub.toLowerCase().indexOf(q) !== -1);
    }).slice(0, 7);
    render(matches);
  });

  input.addEventListener("keydown", function(e){
    if(list.hidden) return;
    var items = list.querySelectorAll("li");
    if(e.key === "ArrowDown"){
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
    } else if(e.key === "ArrowUp"){
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
    } else if(e.key === "Enter"){
      e.preventDefault();
      if(activeIdx >= 0 && current[activeIdx]) go(current[activeIdx]);
      else if(current[0]) go(current[0]);
      return;
    } else if(e.key === "Escape"){
      list.hidden = true;
      return;
    } else {
      return;
    }
    items.forEach(function(li, i){ li.classList.toggle("active", i === activeIdx); });
  });

  document.addEventListener("click", function(e){
    if(!e.target.closest(".searchwrap")) list.hidden = true;
  });

  document.getElementById("searchGoBtn").addEventListener("click", function(){
    var q = input.value.trim().toLowerCase();
    var match = index.find(function(item){ return item.label.toLowerCase().indexOf(q) !== -1; });
    go(match || index[0]);
  });

  document.getElementById("luckyBtn").addEventListener("click", function(){
    var candidates = document.querySelectorAll(".card, .hcard");
    var pick = candidates[Math.floor(Math.random() * candidates.length)];
    if(!pick) return;
    pick.scrollIntoView({behavior:"smooth", block:"center"});
    pick.style.transition = "box-shadow .3s, border-color .3s";
    pick.style.boxShadow = "0 1px 6px rgba(66,133,244,.45)";
    pick.style.borderColor = "#4285F4";
    setTimeout(function(){
      pick.style.boxShadow = "";
      pick.style.borderColor = "";
    }, 1600);
  });
})();
