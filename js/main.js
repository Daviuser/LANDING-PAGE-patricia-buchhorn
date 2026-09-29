const t=document.querySelector('.tog'),m=document.getElementById('menu');
t.addEventListener('click',()=>{const o=m.classList.toggle('open');t.setAttribute('aria-expanded',o)});
m.addEventListener('click',e=>{if(e.target.closest('a')){m.classList.remove('open');t.setAttribute('aria-expanded',false)}});