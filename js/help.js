function scoreClass(s){ return s>=80?'high':s>=65?'mid':'low'; }
function scoreBarClass(s){ return s>=80?'':'s>=65?mid:low'; }
function badgeClass(stage){ return `badge-${STAGE_COLORS[stage]}`; }
function initials(name){ return name.split(' ').map(w=>w[0]).join('').slice(0,2); }
function avatarColor(i){
  const colors=['linear-gradient(135deg,#4f8ef7,#38e2b8)','linear-gradient(135deg,#f7834f,#f7c84f)','linear-gradient(135deg,#38e2b8,#4f8ef7)','linear-gradient(135deg,#f74f6a,#f7834f)','linear-gradient(135deg,#8e4ff7,#4f8ef7)'];
  return colors[i%colors.length];
}
function formatScore(s){
  const cls = s>=80?'high':s>=65?'mid':'low';
  const barCls = s>=80?'':'s>=65?mid:low';
  return `<div class="score-bar"><div class="score-track"><div class="score-fill ${s<80&&s>=65?'mid':s<65?'low':''}" style="width:${s}%"></div></div><span class="score-num">${s}%</span></div>`;
}

window.$ = function(id) {
  return document.getElementById(id);
};