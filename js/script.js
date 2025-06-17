window.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('header nav');
  const btn=document.querySelector('.nav-toggle');
  btn.addEventListener('click',()=>{
    nav.classList.toggle('active');
    btn.classList.toggle('open');
  });
});