(function(){
var root=document.documentElement,saved=null;
try{saved=localStorage.getItem('theme')}catch(e){}
if(saved)root.dataset.theme=saved;
document.getElementById('theme').addEventListener('click',function(){
  var n=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=n;
  try{localStorage.setItem('theme',n)}catch(e){}
});
document.querySelectorAll('.project .head').forEach(function(h){
  h.addEventListener('click',function(){
    var li=h.parentElement,open=!li.classList.contains('open');
    li.classList.toggle('open',open);h.setAttribute('aria-expanded',open);
  });
});
var fs=document.querySelectorAll('#filters button'),ps=document.querySelectorAll('.project');
fs.forEach(function(b){b.addEventListener('click',function(){
  fs.forEach(function(x){x.classList.remove('on')});b.classList.add('on');
  var f=b.dataset.f;
  ps.forEach(function(p){p.classList.toggle('dim',f!=='all'&&p.dataset.tags.split(' ').indexOf(f)<0)});
})});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
})();
