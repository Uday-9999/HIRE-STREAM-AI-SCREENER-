

function renderCandidatesTable(filter=''){

  const list=CANDIDATES.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  $('candidates-table').innerHTML =
    list.map(c=>`
      <tr>
        <td>${c.name}</td>
        <td>${c.role}</td>
        <td>${formatScore(c.score)}</td>
        <td>${STAGE_LABELS[c.stage]}</td>
        <td>${c.email}</td>
      </tr>
    `).join('');
}

function filterCandidates(v){
  renderCandidatesTable(v);
}