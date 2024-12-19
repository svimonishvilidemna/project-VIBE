 const bellIcon = document.querySelector('#bell'); 
 const notificationsDiv = document.querySelector('.notifications');
 bellIcon.addEventListener('click', () => {
   notificationsDiv.classList.toggle('active');
 }); 
const pfp = document.querySelector('.pfp');
const profile = document.querySelector('.profile');
const container=document.querySelector('.container');
const header = document.querySelector('.header-blur');
 pfp.addEventListener('click', () => {
    profile.classList.toggle('active');
    container.classList.toggle('active');
    header.classList.toggle('active');
});