
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit', (e)=>{
e.preventDefault();
alert('Thanks — message sent (demo). Replace with your backend or EmailJS to receive messages.');
form.reset();
});
}

// Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(a=>{
a.addEventListener('click', function(e){
const href = this.getAttribute('href');
if(href && href.startsWith('#')){
e.preventDefault();
document.querySelector(href).scrollIntoView({behavior:'smooth'});
}
})
});
