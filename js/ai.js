// js/ai.js

window.runAiDemo = function(){

  $('ai-body').innerHTML="Analyzing resume...";

  setTimeout(()=>{
    $('ai-overall').textContent="89%";
    $('ai-body').innerHTML=
      "<b>Strong candidate match.</b>";
  },1500);
}