

function renderJobsTable(){

  $('jobs-table').innerHTML =
    JOBS.map(j=>`
      <tr>
        <td>${j.title}</td>
        <td>${j.dept}</td>
        <td>${j.apps}</td>
        <td>${j.status}</td>
        <td>${j.posted}</td>
      </tr>
    `).join('');
}

function addJob(){

  const title=$('new-job-title').value.trim();
  if(!title) return notify("Enter job title");

  JOBS.unshift({
    id:Date.now(),
    title,
    dept:$('new-job-dept').value,
    apps:0,
    status:'active',
    posted:new Date().toDateString()
  });

  renderJobsTable();
  closeModal('job-modal');
}