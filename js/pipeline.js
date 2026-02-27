
function renderKanban(containerId,interactive=false){

  const container=$(containerId);

  container.innerHTML = STAGES.map(stage=>{

    const cards=CANDIDATES
      .filter(c=>c.stage===stage)
      .map(c=>`
        <div class="kanban-card"
          draggable="${interactive}"
          ondragstart="dragStart(event,${c.id})">
          ${c.name}
        </div>`).join('');

    return `<div class="kanban-col"
        ondrop="drop(event,'${stage}')"
        ondragover="dragOver(event)">
        <h4>${STAGE_LABELS[stage]}</h4>
        ${cards}
      </div>`;
  }).join('');
}

function dragStart(e,id){ draggedId=id; }
function dragOver(e){ e.preventDefault(); }

function drop(e,stage){
  e.preventDefault();
  const cand=CANDIDATES.find(c=>c.id===draggedId);
  cand.stage=stage;
  renderKanban('main-kanban',true);
}
window.dragStart = function(e,id){ draggedId=id; }
window.dragOver = function(e){ e.preventDefault(); }
window.drop = function(e,stage){
  e.preventDefault();
  const cand=CANDIDATES.find(c=>c.id===draggedId);
  cand.stage=stage;
  renderKanban('main-kanban',true);
};