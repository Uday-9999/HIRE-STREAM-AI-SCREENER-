
function renderRecentTable(){

  $('recent-table').innerHTML =
    CANDIDATES.slice(0,5).map(c=>`
      <tr>
        <td>${c.name}</td>
        <td>${c.role}</td>
        <td>${formatScore(c.score)}</td>
        <td>${STAGE_LABELS[c.stage]}</td>
        <td>2d ago</td>
      </tr>
    `).join('');
}