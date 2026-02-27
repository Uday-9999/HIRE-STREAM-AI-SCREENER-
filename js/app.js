// js/app.js

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  renderRecentTable();
  renderJobsTable();
  renderCandidatesTable();
  renderKanban('mini-kanban', false);
  console.log("App Started");
}