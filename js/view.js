

window.showView = function(name, el){

  document.querySelectorAll('.view')
    .forEach(v=>v.classList.remove('active'));

  $(`view-${name}`).classList.add('active');

  document.querySelectorAll('.nav-item')
    .forEach(n=>n.classList.remove('active'));

  el.classList.add('active');

  const titles={
    dashboard:'Dashboard',
    jobs:'Job Postings',
    candidates:'Candidates',
    pipeline:'Pipeline',
    ai:'AI Screener',
    settings:'Settings'
  };

  $('page-title').textContent=titles[name];

  if(name==='pipeline')
    renderKanban('main-kanban',true);
}