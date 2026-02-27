// js/notify.js

function notify(msg){

  const n=document.createElement('div');
  n.className='notif';
  n.textContent=msg;

  document.body.appendChild(n);

  setTimeout(()=>n.remove(),2500);
}