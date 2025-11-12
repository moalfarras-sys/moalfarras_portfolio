
// Reveal on scroll
const ro = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); ro.unobserve(e.target); }
  })
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// Animate skill bars
function animateBars(){
  document.querySelectorAll('.fill[data-w]').forEach(el=>{
    el.style.width = el.dataset.w + '%';
  });
}
setTimeout(animateBars, 300);
